import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
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

          <Route path="/medicos" element={
            <ServicePage
              title="Médicos"
              description="Planejamento tributário especializado para médicos CLT, autônomos e com CNPJ próprio. Reduza a carga tributária de forma legal e segura."
              benefits={["Redução de Imposto de Renda", "Gestão de Livro Caixa", "Planejamento Previdenciário", "Defesa contra Malha Fina"]}
            />
          } />
          <Route path="/dentistas" element={
            <ServicePage
              title="Dentistas"
              description="Contabilidade completa para consultórios odontológicos e profissionais liberais. Foco na regularização e eficiência fiscal."
              benefits={["Equiparação Hospitalar", "Gestão de Clínicas Odontológicas", "Folha de Pagamento Especializada", "Carnê-Leão Otimizado"]}
            />
          } />
          <Route path="/clinicas" element={
            <ServicePage
              title="Clínicas"
              description="Gestão contábil e fiscal para clínicas médicas, estéticas e de especialidades. Escalabilidade e controle financeiro."
              benefits={["Contabilidade Consultiva", "BPO Financeiro", "Gestão de Sócios e Repasses", "Planejamento Tributário Lucro Real/Presumido"]}
            />
          } />
          <Route path="/hospitais" element={
            <ServicePage
              title="Hospitais"
              description="Soluções completas para hospitais e unidades de saúde de médio e grande porte. Auditoria e Compliance rigorosos."
              benefits={["Auditoria Fiscal e Contábil", "Compliance Tributário", "Gestão de Custos Hospitalares", "Consultoria Estratégica de Fusões"]}
            />
          } />
          <Route path="/laboratorios" element={
            <ServicePage
              title="Laboratórios"
              description="Contabilidade especializada para laboratórios de análises clínicas e diagnóstico por imagem."
              benefits={["Gestão de Estoque e Custos", "Tributação Específica para Saúde", "Integração com Sistemas de Gestão", "Relatórios Gerenciais"]}
            />
          } />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;