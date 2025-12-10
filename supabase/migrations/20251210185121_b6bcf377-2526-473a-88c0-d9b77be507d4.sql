-- Drop the existing RESTRICTIVE INSERT policy
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;

-- Create a PERMISSIVE INSERT policy instead
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);