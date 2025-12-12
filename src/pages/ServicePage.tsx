import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

interface ServicePageProps {
    title: string;
    description: string;
    benefits: string[];
}

const ServicePage = ({ title, description, benefits }: ServicePageProps) => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="flex-1 pt-24 pb-12 container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                            Soluções para <span className="gradient-text">{title}</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {description}
                        </p>

                        <div className="grid gap-4 md:grid-cols-2 text-left bg-muted/30 p-8 rounded-2xl border border-border/50">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <Button size="xl" variant="gradient" className="mt-8">
                            Falar com um especialista
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        </PageTransition>
    );
};

export default ServicePage;