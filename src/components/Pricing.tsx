import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essencial",
    description: "Para profissionais autônomos e início de carreira",
    price: "197",
    period: "/mês",
    features: [
      "Contabilidade mensal completa",
      "Emissão de até 30 notas/mês",
      "Declaração de IR anual",
      "Suporte via chat",
      "Acesso à plataforma digital",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    description: "Para consultórios e clínicas de pequeno porte",
    price: "397",
    period: "/mês",
    features: [
      "Tudo do plano Essencial",
      "Notas fiscais ilimitadas",
      "Folha de pagamento (até 3 func.)",
      "Planejamento tributário",
      "Suporte prioritário WhatsApp",
      "Relatórios gerenciais",
    ],
    highlighted: true,
    badge: "Mais Popular",
  },
  {
    name: "Empresarial",
    description: "Para clínicas e hospitais de médio porte",
    price: "797",
    period: "/mês",
    features: [
      "Tudo do plano Profissional",
      "Funcionários ilimitados",
      "Consultoria tributária mensal",
      "Auditoria fiscal preventiva",
      "Gestor de conta dedicado",
      "Reuniões mensais estratégicas",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Planos Transparentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Investimento que se{" "}
            <span className="gradient-text">paga sozinho</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossos clientes economizam em média 40% em impostos. 
            Escolha o plano ideal para o seu momento profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 animate-fade-up ${
                plan.highlighted
                  ? "glass-card border-2 border-primary/30 glow-effect scale-105"
                  : "glass-card"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-bg text-primary-foreground text-sm font-medium flex items-center gap-1.5">
                  <Star className="h-4 w-4" />
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-secondary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.highlighted ? "gradient" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.highlighted ? "Começar agora" : "Fale com especialista"}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Todos os planos incluem suporte humanizado e migração gratuita da sua contabilidade atual.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
