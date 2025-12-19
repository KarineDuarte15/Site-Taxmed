import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-brand-dark text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <div className="glass-card rounded-2xl p-8 md:p-12 bg-primary/10 backdrop-blur-xl border-primary/20 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Pronto para economizar em impostos?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra quanto você pode economizar com a contabilidade digital especializada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="xl">
                Agendar consultoria gratuita
              </Button>
              <Button variant="whatsapp" size="xl" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="TaxMed" className="h-20 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Contabilidade digital especializada para profissionais da saúde.
              100% online, compliance e economia real.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/taxmed.assessoria/" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/taxmed.assessoria/" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61553438125084" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Planejamento Tributário</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Abertura de CNPJ</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Contabilidade Mensal</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Auditoria Fiscal</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Consultoria Estratégica</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Segmentos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Médicos</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Dentistas</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Clínicas</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Hospitais</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Laboratórios</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">(85) 98741-1585</p>
                  <p className="text-xs text-primary-foreground/50">WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">contato@taxmed.com.br</p>
                  <p className="text-xs text-primary-foreground/50">E-mail</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">Fortaleza, CE</p>
                  <p className="text-xs text-primary-foreground/50">100% Digital</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} TaxMed. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Desenvolvido por <a href="https://site-karine-duarte-developer.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Karine Duarte Developer</a>
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
