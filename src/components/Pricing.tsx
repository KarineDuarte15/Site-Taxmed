import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Start / MEI",
    description: "Para quem está começando e fatura até R$ 10k/mês",
    price: "83,08",
    period: "/mês*",
    billingDetails: "R$ 997/ano (12x cartão) ou R$ 109,00 mensal",
    features: [
      "Emissão de NFs ilimitadas",
      "Cálculo de impostos mensais",
      "Entrega das guias",
      "Conta PJ digital inclusa",
      "Entrega da Declaração Anual Simei",
    ],
    highlighted: false,
    cta: "Começar Agora",
  },
  {
    name: "Essencial",
    description: "Para faturamento de até R$ 30k/mês",
    price: "397",
    period: "/mês*",
    billingDetails: "No plano anual (cartão). R$ 497,00 no mensal",
    features: [
      "Emissão de NFs ilimitadas",
      "Contabilidade digital completa",
      "Balanço e DRE anual",
      "Impostos e guias mensais",
      "Sede virtual gratuita",
      "Pró-labore do sócio",
      "Faturamento até 30 mil reais / mês",
    ],
    highlighted: true,
    badge: "Mais Popular",
    cta: "Assinar Essencial",
  },
  {
    name: "Crescimento",
    description: "Para faturamento de até R$ 150k/mês",
    price: "Sob Consulta",
    period: "",
    billingDetails: "Solicitar proposta personalizada",
    features: [
      "Tudo do Plano Essencial",
      "Folha até 5 colaboradores",
      "1º certificado digital PJ grátis",
      "Pró-labore dos sócios",
    ],
    highlighted: false,
    cta: "Solicitar Proposta",
  },
  {
    name: "Performance",
    description: "Para faturamento ilimitado e grandes volumes",
    price: "Sob Consulta",
    period: "",
    billingDetails: "Solicitar proposta personalizada",
    features: [
      "Tudo do Plano Crescimento",
      "Sistema de gestão financeira",
      "Certificado digital grátis",
      "Planejamento anual com especialista",
    ],
    highlighted: false,
    cta: "Falar com Consultor",
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
            Nossos Planos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Escolha o plano ideal para o seu <span className="gradient-text">momento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Contabilidade completa, digital e especializada para a área da saúde.
          </p>
        </div>

        {/* Alterado para grid de 4 colunas em telas grandes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 animate-fade-up flex flex-col ${plan.highlighted
                ? "glass-card border-2 border-primary/30 glow-effect scale-105 z-10"
                : "glass-card hover-lift"
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-bg text-primary-foreground text-xs font-bold flex items-center gap-1.5 shadow-md whitespace-nowrap">
                  <Star className="h-3 w-3 fill-current" />
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4 h-8 flex items-center justify-center">
                  {plan.description}
                </p>

                <div className="flex flex-col items-center justify-center gap-1 mb-2">
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Sob Consulta" && <span className="text-sm text-muted-foreground">R$</span>}
                    <span className={`font-bold gradient-text ${plan.price === "Sob Consulta" ? "text-2xl" : "text-4xl"}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  {/* Detalhes de cobrança (anual vs mensal) */}
                  <span className="text-[10px] text-muted-foreground font-medium bg-muted/50 px-2 py-1 rounded-full">
                    {plan.billingDetails}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-left">
                    <div className="w-4 h-4 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-2.5 w-2.5 text-secondary" />
                    </div>
                    <span className="text-xs text-foreground/80 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.highlighted ? "gradient" : "outline"}
                size="lg"
                className="w-full mt-auto"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-12 max-w-2xl mx-auto">
          *Valores referentes aos planos anuais parcelados no cartão de crédito. Consulte condições para pagamento mensal via boleto. Abertura de empresa grátis para planos anuais (taxas da junta comercial não inclusas).
        </p>
      </div>
    </section>
  );
};

export default Pricing;