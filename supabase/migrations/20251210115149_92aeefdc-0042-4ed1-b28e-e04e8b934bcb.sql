-- Create restrictive UPDATE and DELETE policies on leads table
-- No one can update or delete leads until proper admin roles are configured

CREATE POLICY "No public update access to leads"
ON public.leads
FOR UPDATE
USING (false);

CREATE POLICY "No public delete access to leads"
ON public.leads
FOR DELETE
USING (false);