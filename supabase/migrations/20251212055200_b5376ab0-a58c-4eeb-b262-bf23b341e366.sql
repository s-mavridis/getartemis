-- For upsert to work, we need an UPDATE policy that allows updating existing rows
-- Drop restrictive update policy and create permissive one for lead updates
DROP POLICY IF EXISTS "No public update access to leads" ON public.leads;

CREATE POLICY "Allow anonymous lead updates" 
ON public.leads 
FOR UPDATE 
TO anon, authenticated
USING (true)
WITH CHECK (true);