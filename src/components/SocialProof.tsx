import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Ricardo Mendes",
    role: "Cardiologista",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    quote: "Reduzi meus impostos em 35% no primeiro ano. A equipe da TaxMed entende perfeitamente as necessidades de quem trabalha na saúde.",
    rating: 5,
  },
  {
    name: "Dra. Camila Santos",
    role: "Dentista - Proprietária de clínica",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    quote: "Finalmente uma contabilidade que fala minha língua. O atendimento pelo WhatsApp é rápido e as orientações sempre claras.",
    rating: 5,
  },
  {
    name: "Dr. Fernando Costa",
    role: "Cirurgião Plástico",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop&crop=face",
    quote: "A migração foi tranquila e sem dor de cabeça. Hoje tenho controle total das minhas finanças pela plataforma deles.",
    rating: 5,
  },
];

const stats = [
  { value: "2.500+", label: "Clientes ativos" },
  { value: "R$ 15M", label: "Economia gerada/ano" },
  { value: "98%", label: "Satisfação" },
  { value: "10+", label: "Anos de experiência" },
];

const SocialProof = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes{" "}
            <span className="gradient-text">dizem</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-6 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/20 mb-4" />

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
