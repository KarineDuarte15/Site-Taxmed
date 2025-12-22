import { useState } from "react";
import { Menu, X, Phone, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="TaxMed Logo" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 text-sm">
              Início
            </Link>

            {/* Dropdown de Segmentos */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-primary font-medium transition-colors duration-200 text-sm outline-none">
                Segmentos <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white/95 backdrop-blur-md">
                <DropdownMenuItem>
                  <Link to="/medicos" className="w-full">Médicos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dentistas" className="w-full">Dentistas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/clinicas" className="w-full">Clínicas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/hospitais" className="w-full">Hospitais</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/laboratorios" className="w-full">Laboratórios</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button onClick={() => scrollToSection('servicos')} className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 text-sm">
              Serviços
            </button>
            <button onClick={() => scrollToSection('planos')} className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 text-sm">
              Planos
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 text-sm">
              Sobre
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://api.whatsapp.com/send/?phone=5585987411585&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+planos.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-2 border-primary/20 text-primary hover:bg-primary/5">
                Agendar Consultoria
              </Button>
            </a>
            <div className="hidden lg:flex items-center gap-3">
              <a href="https://app.taxmed.com.br" target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" size="default">
                  <User className="h-4 w-4" />
                  Área do Cliente
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/30 animate-fade-up">
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary font-medium py-2">Início</Link>
              <Link to="/servicos" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary font-medium py-2">Serviços</Link>
              <Link to="/planos" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary font-medium py-2">Planos</Link>
              <Link to="/sobre" onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary font-medium py-2">Sobre</Link>
              <div className="space-y-2 pl-4 border-l-2 border-primary/20">
                <p className="text-sm font-semibold text-primary mb-2">Segmentos</p>
                <Link to="/medicos" onClick={() => setIsMenuOpen(false)} className="block text-foreground/80 py-1">Médicos</Link>
                <Link to="/dentistas" onClick={() => setIsMenuOpen(false)} className="block text-foreground/80 py-1">Dentistas</Link>
                <Link to="/clinicas" onClick={() => setIsMenuOpen(false)} className="block text-foreground/80 py-1">Clínicas</Link>

              </div>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="https://api.whatsapp.com/send/?phone=5585987411585&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+planos.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full gap-2 border-primary/20 text-primary">
                    Agendar Consultoria
                  </Button>

                </a>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <a href="https://app.taxmed.com.br" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="gradient" size="default" className="w-full">
                    <User className="h-4 w-4" />
                    Área do Cliente
                  </Button>
                </a>
              </div>

            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;