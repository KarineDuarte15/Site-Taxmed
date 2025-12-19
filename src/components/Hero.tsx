import { ArrowRight, Shield, TrendingDown, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Componente para a Grelha Interativa 3D (Corrigido)
const RetroGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">

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
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <RetroGrid />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -z-10 hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium animate-fade-up backdrop-blur-sm border border-primary/20">
              <Shield className="h-4 w-4 flex-shrink-0" />
              <span className="break-words">100% Digital • Especialistas em Saúde</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up animation-delay-100 text-foreground break-words">
              Contabilidade digital para{" "}
              <span className="gradient-text">profissionais da saúde</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-up animation-delay-200 break-words">
              Reduza impostos, organize recebíveis e fique em dia com o fisco —
              tudo 100% online com atendimento especializado.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
                  <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">50%</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Economia média</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-up animation-delay-400">
              <Button variant="gradient" size="xl" className="group shadow-lg shadow-primary/25 w-full sm:w-auto">
                Agende consultoria gratuita
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="bg-background/50 backdrop-blur-sm hover:bg-primary/80 w-full sm:w-auto">
                Conheça nossos planos
              </Button>
            </div>
          </div>

          {/* Right Content - Express Diagnostic Form */}
          <div className="lg:pl-8 animate-fade-up animation-delay-300 pointer-events-auto mt-8 lg:mt-0">
            <div className="glass-card rounded-2xl p-5 sm:p-8 glow-effect relative overflow-hidden border-t-2 border-primary/20">
              <div className="mb-4 sm:mb-6 relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Diagnóstico Fiscal Express
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Descubra quanto você pode economizar em impostos
                </p>
              </div>

              <form className="space-y-4 relative z-10">
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
                  <select className="w-full h-12 px-4 rounded-lg border border-primary/10 bg-background/50 text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none focus:border-primary/50 transition-all cursor-pointer">
                    <option value="">Selecione uma faixa</option>
                    <option value="10k">Até R$ 10.000</option>
                    <option value="30k">R$ 10.000 - R$ 30.000</option>
                    <option value="50k">R$ 30.000 - R$ 50.000</option>
                    <option value="100k">R$ 50.000 - R$ 100.000</option>
                    <option value="100k+">Acima de R$ 100.000</option>
                  </select>
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full mt-6 shadow-md hover:shadow-lg transition-all">
                  Quero meu diagnóstico gratuito
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