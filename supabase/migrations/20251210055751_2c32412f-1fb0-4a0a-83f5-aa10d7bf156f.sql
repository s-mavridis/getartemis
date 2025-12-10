-- Create leads table for ArtemisAI
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  age_range TEXT,
  ad_source TEXT,
  ehr_consent_given BOOLEAN DEFAULT false,
  ehr_consent_timestamp TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (public lead capture form)
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reads (admin only, handled separately)
-- No SELECT policy = no public reads