import { ArrowRight, Shield, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Componente para a Grelha Interativa 3D (Mantido igual)
const RetroGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block">
      <div
        className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] auto-rows-[60px]"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      >
        {Array.from({ length: 600 }).map((_, i) => (
          <div
            key={i}
            className="border-[0.5px] border-primary/5 transition-all duration-300 ease-out 
                       hover:bg-primary/20 hover:scale-125 hover:z-10 
                       hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] hover:border-primary/40
                       hover:rotate-3 hover:rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="inicio"
      // 1. Aumentei o pt (padding-top) para pt-28 ou pt-32 no mobile para "fugir" do menu fixo
      // Adicionei overflow-hidden para evitar scroll horizontal indesejado
      className="relative min-h-fit lg:min-h-screen flex items-start lg:items-center py-12 pt-32 pb-12 lg:py-20 overflow-x-hidden bg-background"
    >
      <RetroGrid />

      {/* Elementos de Fundo (Blobs) */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -z-10 hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* 2. Grid explícito: 1 coluna no mobile, 2 no desktop (lg) */}
        {/* Adicionei gap-y-12 para separar bem o texto do formulário no mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-12 items-center">

          {/* --- Coluna da Esquerda (Texto) --- */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium animate-fade-up backdrop-blur-sm border border-primary/20">
              <Shield className="h-4 w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">100% Digital • Especialistas</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up animation-delay-100 text-foreground">
              Contabilidade digital para{" "}
              <span className="gradient-text block sm:inline">profissionais da saúde</span>
            </h1>

            {/* Descrição */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-up animation-delay-200">
              Reduza impostos, organize recebíveis e fique em dia com o fisco —
              tudo 100% online com atendimento especializado.
            </p>

            {/* Stats (Economia média) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-2 sm:pt-4 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
                  <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">50%</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Economia média</p>
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-up animation-delay-400">
              <a href="https://api.whatsapp.com/send/?phone=5585987411585&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+planos.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="gradient" size="xl" className="group shadow-lg shadow-primary/25 w-full">
                  Agende consultoria gratuita
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 ml-2" />
                </Button>
              </a>
              <a href="#planos" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="bg-background/50 backdrop-blur-sm hover:bg-primary/80 w-full">
                  Conheça nossos planos
                </Button>
              </a>
            </div>
          </div>

          {/* --- Coluna da Direita (Formulário) --- */}
          <div className="w-full lg:pl-8 animate-fade-up animation-delay-300">
            {/* 3. Ajustei padding interno (p-5) para mobile */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 lg:p-8 glow-effect relative overflow-visible border-t-2 border-primary/20 mx-auto max-w-md lg:max-w-full">
              <div className="mb-4 sm:mb-6 relative z-10 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Diagnóstico Fiscal Express
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Descubra quanto você pode economizar.
                </p>
              </div>

              <form className="space-y-4 relative z-10 text-left">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Seu nome
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite seu nome completo"
                    className="h-12 bg-background/50 border-primary/10 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail profissional
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="h-12 bg-background/50 border-primary/10 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp
                  </label>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="h-12 bg-background/50 border-primary/10 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Faturamento mensal estimado
                  </label>
                  <select className="w-full h-12 px-4 rounded-lg border border-primary/10 bg-background/50 text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none focus:border-primary/50 transition-all cursor-pointer appearance-none">
                    <option value="">Selecione uma faixa</option>
                    <option value="10k">Até R$ 10.000</option>
                    <option value="30k">R$ 10.000 - R$ 30.000</option>
                    <option value="50k">R$ 30.000 - R$ 50.000</option>
                    <option value="100k">R$ 50.000 - R$ 100.000</option>
                    <option value="100k+">Acima de R$ 100.000</option>
                  </select>
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full mt-6 shadow-md hover:shadow-lg transition-all">
                  Quero meu diagnóstico Express
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;