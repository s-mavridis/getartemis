-- Add landing_page_source column to track which landing page the lead came from
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS landing_page_source text;

-- Update the upsert_lead function to include landing_page_source
CREATE OR REPLACE FUNCTION public.upsert_lead(
  p_email text,
  p_ad_source text DEFAULT NULL,
  p_ehr_consent_given boolean DEFAULT false,
  p_ehr_consent_timestamp timestamptz DEFAULT NULL,
  p_email_only boolean DEFAULT false,
  p_landing_page_source text DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.leads (email, ad_source, ehr_consent_given, ehr_consent_timestamp, email_only, landing_page_source)
  VALUES (p_email, p_ad_source, p_ehr_consent_given, p_ehr_consent_timestamp, p_email_only, p_landing_page_source)
  ON CONFLICT (email) DO UPDATE SET
    ad_source = COALESCE(EXCLUDED.ad_source, leads.ad_source),
    ehr_consent_given = CASE WHEN EXCLUDED.ehr_consent_given THEN EXCLUDED.ehr_consent_given ELSE leads.ehr_consent_given END,
    ehr_consent_timestamp = CASE WHEN EXCLUDED.ehr_consent_timestamp IS NOT NULL THEN EXCLUDED.ehr_consent_timestamp ELSE leads.ehr_consent_timestamp END,
    email_only = CASE WHEN EXCLUDED.ehr_consent_given THEN false ELSE EXCLUDED.email_only END,
    landing_page_source = COALESCE(EXCLUDED.landing_page_source, leads.landing_page_source);
END;
$$;

-- Ensure the function has proper permissions
GRANT EXECUTE ON FUNCTION public.upsert_lead(text, text, boolean, timestamptz, boolean, text) TO anon, authenticated;