import { ArrowRight, Shield, TrendingDown, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Componente para a Grelha Interativa 3D
const RetroGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden perspective-1000">
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] grid-rows-[repeat(auto-fill,minmax(60px,1fr))] opacity-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="border border-primary/10 transition-all duration-500 hover:bg-primary/20 hover:scale-110 hover:z-10 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:border-primary/50"
          />
        ))}
      </div>
      {/* Máscara de gradiente para suavizar as bordas */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
    </div>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background 3D Grid */}
      <RetroGrid />

      {/* Elementos Decorativos Blur */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-up backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              100% Digital • Especialistas em Saúde
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up animation-delay-100">
              Contabilidade digital para{" "}
              <span className="gradient-text">profissionais da saúde</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-up animation-delay-200">
              Reduza impostos, organize recebíveis e fique em dia com o fisco —
              tudo 100% online com atendimento especializado.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">40%</p>
                  <p className="text-sm text-muted-foreground">Economia média</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2.500+</p>
                  <p className="text-sm text-muted-foreground">Clientes ativos</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-up animation-delay-400">
              <Button variant="gradient" size="xl" className="group">
                Agende consultoria gratuita
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl" className="bg-background/50 backdrop-blur-sm">
                Conheça nossos planos
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-8 animate-fade-up animation-delay-300">
            <div className="glass-card rounded-2xl p-8 glow-effect relative overflow-hidden">
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Diagnóstico Fiscal Express
                </h3>
                <p className="text-muted-foreground">
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
                    className="h-12 bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp
                  </label>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="h-12 bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Faturamento mensal estimado
                  </label>
                  <select className="w-full h-12 px-4 rounded-lg border border-input bg-background/50 text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none">
                    <option value="">Selecione uma faixa</option>
                    <option value="10k">Até R$ 10.000</option>
                    <option value="30k">R$ 10.000 - R$ 30.000</option>
                    <option value="50k">R$ 30.000 - R$ 50.000</option>
                    <option value="100k+">Acima de R$ 100.000</option>
                  </select>
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full mt-6">
                  Quero meu diagnóstico gratuito
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;