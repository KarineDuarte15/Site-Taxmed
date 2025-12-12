import { MessageSquare, FileSearch, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Diagnóstico Inicial",
    description: "Análise completa da situação fiscal",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Migração Digital",
    description: "Transição segura e organizada",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Gestão Contínua",
    description: "Crescimento e economia real",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Contabilidade sem dor de cabeça
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Linha Central (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-primary/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.step} className="flex flex-col items-center text-center group">

                {/* Badge Circular Flutuante */}
                <div className="relative mb-8">
                  {/* Círculo do Ícone */}
                  <div className="w-24 h-24 rounded-[2.5rem] bg-white shadow-soft border border-primary/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>

                  {/* Bolinha do Número (estilo notificação) */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm border-4 border-background z-20 shadow-sm">
                    {step.step}
                  </div>
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;