-- Create a secure function to upsert leads (bypasses RLS safely)
CREATE OR REPLACE FUNCTION public.upsert_lead(
  p_email text,
  p_ad_source text DEFAULT NULL,
  p_ehr_consent_given boolean DEFAULT false,
  p_ehr_consent_timestamp timestamptz DEFAULT NULL,
  p_email_only boolean DEFAULT true
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.leads (email, ad_source, ehr_consent_given, ehr_consent_timestamp, email_only)
  VALUES (p_email, p_ad_source, p_ehr_consent_given, p_ehr_consent_timestamp, p_email_only)
  ON CONFLICT (email) DO UPDATE SET
    ad_source = COALESCE(EXCLUDED.ad_source, leads.ad_source),
    ehr_consent_given = EXCLUDED.ehr_consent_given,
    ehr_consent_timestamp = EXCLUDED.ehr_consent_timestamp,
    email_only = EXCLUDED.email_only;
END;
$$;

-- Grant execute permission to anon and authenticated roles
GRANT EXECUTE ON FUNCTION public.upsert_lead TO anon, authenticated;

-- Drop the overly permissive policies
DROP POLICY IF EXISTS "Allow anonymous lead selects for upsert" ON public.leads;
DROP POLICY IF EXISTS "Allow anonymous lead updates" ON public.leads;

-- Create restrictive SELECT policy (no one can read leads via RLS - only through admin tools)
CREATE POLICY "No public read access to leads" 
ON public.leads 
FOR SELECT 
USING (false);

-- Create restrictive UPDATE policy (updates only via secure function)
CREATE POLICY "No public update access to leads" 
ON public.leads 
FOR UPDATE 
USING (false);