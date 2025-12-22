import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Optimize from "./pages/Optimize";
import Risk from "./pages/Risk";
import Parents from "./pages/Parents";
import Support from "./pages/Support";
import Support2 from "./pages/Support2";
import Support3 from "./pages/Support3";
import Support4 from "./pages/Support4";
import Support5 from "./pages/Support5";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/optimize" element={<Optimize />} />
          <Route path="/risk" element={<Risk />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/2" element={<Support2 />} />
          <Route path="/support/3" element={<Support3 />} />
          <Route path="/support/4" element={<Support4 />} />
          <Route path="/support/5" element={<Support5 />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
