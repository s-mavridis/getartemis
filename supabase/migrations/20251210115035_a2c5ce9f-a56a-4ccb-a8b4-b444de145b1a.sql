-- Create a restrictive SELECT policy on leads table
-- No one can read leads data until proper admin roles are configured
-- This protects sensitive PII (emails, phones) and health consent data

CREATE POLICY "No public read access to leads"
ON public.leads
FOR SELECT
USING (false);

-- Note: When you need admin access to leads, you should:
-- 1. Create a user_roles table with admin role
-- 2. Update this policy to use: public.has_role(auth.uid(), 'admin')