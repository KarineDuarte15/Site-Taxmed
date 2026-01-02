import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SegmentPage from "./pages/SegmentPage";
import WhatsAppButton from "./components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Rotas dos Segmentos usando o novo Template */}
          <Route path="/medicos" element={<SegmentPage segmentKey="medicos" />} />
          <Route path="/dentistas" element={<SegmentPage segmentKey="dentistas" />} />
          <Route path="/laboratorios" element={<SegmentPage segmentKey="laboratorios" />} />
          <Route path="/hospitais" element={<SegmentPage segmentKey="hospitais" />} />
          <Route path="/clinicas" element={<SegmentPage segmentKey="clinicas" />} />

          {/* Rota genérica ou 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;