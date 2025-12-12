-- Drop ALL existing INSERT policies to start fresh
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;

-- Create a simple permissive INSERT policy that allows anonymous inserts
CREATE POLICY "Allow anonymous lead inserts" 
ON public.leads 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);