-- Add ehr_consent_willing column to leads table
ALTER TABLE public.leads ADD COLUMN ehr_consent_willing boolean DEFAULT NULL;

-- Drop existing functions and recreate with new parameter
DROP FUNCTION IF EXISTS public.upsert_lead(text, text, boolean, timestamp with time zone, boolean);
DROP FUNCTION IF EXISTS public.upsert_lead(text, text, boolean, timestamp with time zone, boolean, text);

-- Recreate upsert_lead function with ehr_consent_willing parameter
CREATE OR REPLACE FUNCTION public.upsert_lead(
  p_email text,
  p_ad_source text DEFAULT NULL,
  p_ehr_consent_given boolean DEFAULT false,
  p_ehr_consent_timestamp timestamp with time zone DEFAULT NULL,
  p_email_only boolean DEFAULT false,
  p_landing_page_source text DEFAULT NULL,
  p_ehr_consent_willing boolean DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.leads (email, ad_source, ehr_consent_given, ehr_consent_timestamp, email_only, landing_page_source, ehr_consent_willing)
  VALUES (p_email, p_ad_source, p_ehr_consent_given, p_ehr_consent_timestamp, p_email_only, p_landing_page_source, p_ehr_consent_willing)
  ON CONFLICT (email) DO UPDATE SET
    ad_source = COALESCE(EXCLUDED.ad_source, leads.ad_source),
    ehr_consent_given = CASE WHEN EXCLUDED.ehr_consent_given THEN EXCLUDED.ehr_consent_given ELSE leads.ehr_consent_given END,
    ehr_consent_timestamp = CASE WHEN EXCLUDED.ehr_consent_timestamp IS NOT NULL THEN EXCLUDED.ehr_consent_timestamp ELSE leads.ehr_consent_timestamp END,
    email_only = CASE WHEN EXCLUDED.ehr_consent_given THEN false ELSE EXCLUDED.email_only END,
    landing_page_source = COALESCE(EXCLUDED.landing_page_source, leads.landing_page_source),
    ehr_consent_willing = COALESCE(EXCLUDED.ehr_consent_willing, leads.ehr_consent_willing);
END;
$$;