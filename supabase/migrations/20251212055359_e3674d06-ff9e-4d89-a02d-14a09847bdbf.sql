-- Drop the blocking SELECT policy and create one that allows SELECT for upsert operations
DROP POLICY IF EXISTS "No public read access to leads" ON public.leads;

-- Allow anon/authenticated to select (needed for upsert on_conflict to work)
CREATE POLICY "Allow anonymous lead selects for upsert" 
ON public.leads 
FOR SELECT 
TO anon, authenticated
USING (true);