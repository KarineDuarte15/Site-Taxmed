import { Stethoscope, Heart, Building2, Hospital, ArrowRight, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const segments = [
  {
    icon: Stethoscope,
    title: "Médicos",
    description: "Planejamento tributário especializado para médicos CLT, autônomos e com CNPJ próprio.",
    benefits: ["Redução de IR", "Gestão de pró-labore", "Declaração de renda"],
    color: "from-primary to-primary/80",
    path: "/medicos"
  },
  {
    icon: Heart,
    title: "Dentistas",
    description: "Contabilidade completa para consultórios odontológicos e profissionais liberais.",
    benefits: ["Equiparação hospitalar", "Deduções legais", "Nota fiscal eletrônica"],
    color: "from-secondary to-secondary/80",
    path: "/dentistas"
  },
  {
    icon: Building2,
    title: "Clínicas",
    description: "Gestão contábil e fiscal para clínicas médicas, estéticas e de especialidades.",
    benefits: ["Lucro Real/Presumido", "Folha de pagamento", "Gestão de sócios"],
    color: "from-primary to-secondary",
    path: "/clinicas"
  },
  {
    icon: Hospital,
    title: "Hospitais",
    description: "Soluções completas para hospitais e unidades de saúde de médio e grande porte.",
    benefits: ["Auditoria fiscal", "Compliance total", "Consultoria estratégica"],
    color: "from-secondary to-primary",
    path: "/hospitais"
  },
  {
    icon: Microscope,
    title: "Laboratórios",
    description: "Contabilidade técnica para laboratórios de análises clínicas e diagnóstico.",
    benefits: ["Gestão de estoque", "Tributação específica", "Relatórios técnicos"],
    color: "from-primary to-secondary",
    path: "/laboratorios"
  },
];

const Segments = () => {
  return (
    <section id="segmentos" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções para cada{" "}
            <span className="gradient-text">profissional da saúde</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {segments.map((segment, index) => (
            <div
              key={segment.title}
              className="group glass-card rounded-2xl p-6 hover-lift cursor-pointer animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${segment.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <segment.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {segment.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                {segment.description}
              </p>

              <Link to={segment.path} className="w-full mt-auto">
                <Button variant="ghost" className="w-full group/btn text-primary hover:text-primary justify-start px-0 hover:bg-transparent">
                  Saiba mais
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;