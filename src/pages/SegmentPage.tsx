import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { segments } from '../data/segments';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, MessageCircle, AlertCircle } from "lucide-react";
import WhatsAppButton from '@/components/WhatsAppButton';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";

interface SegmentPageProps {
    segmentKey?: string;
}

const SegmentPage: React.FC<SegmentPageProps> = ({ segmentKey }) => {
    const { type } = useParams();
    const key = segmentKey || type;

    const data = key ? segments[key] : null;

    if (!data) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow pt-20"> {/* pt-20 para compensar a altura do header fixo */}
                {/* --- HERO SECTION --- */}
                <section className="relative py-12 md:py-24 overflow-hidden bg-secondary/5">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary text-primary-foreground">
                                    Especializado em {data.title}
                                </div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
                                    {data.title}
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {data.subtitle}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="https://api.whatsapp.com/send/?phone=5585987411585&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+planos.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                                        <Button size="lg" className="gap-2 text-lg h-12 px-8">
                                            Falar com um Especialista <ArrowRight className="w-5 h-5" />
                                        </Button>
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative lg:ml-auto"
                            >
                                <div className="aspect-video overflow-hidden rounded-xl shadow-2xl border bg-muted">
                                    <img
                                        src={data.heroImage}
                                        alt={data.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Card Flutuante Decorativo */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Economia média de</p>
                                            <p className="text-xl font-bold text-primary">até 40% em impostos</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- SEÇÃO DE DORES (PAIN POINTS) --- */}
                <section className="py-16 bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-12 max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-primary mb-4">
                                Desafios que você enfrenta hoje
                            </h2>
                            <p className="text-muted-foreground">
                                Identificamos e resolvemos os principais gargalos do seu segmento.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {data.painPoints.map((pain, index) => (
                                <Card key={index} className="border-t-4 border-t-secondary shadow-md hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <AlertCircle className="w-10 h-10 text-secondary mb-2" />
                                        <CardTitle className="text-xl">{pain.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{pain.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SEÇÃO DE SOLUÇÕES --- */}
                <section className="py-16 bg-secondary/10">
                    <div className="container px-4 mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-6">
                                    Soluções Sob Medida
                                </h2>
                                <div className="space-y-4">
                                    {data.solutions.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border">
                                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-lg text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {data.extraInfo && (
                                    <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                                        <h3 className="font-semibold text-primary text-lg mb-2">{data.extraInfo.title}</h3>
                                        <p className="text-muted-foreground">{data.extraInfo.content}</p>
                                    </div>
                                )}
                            </div>
                            <div className="relative">
                                {/* Moldura Decorativa com Gradiente */}
                                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-1 shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-500">

                                    <div className="bg-white rounded-xl overflow-hidden aspect-video shadow-inner bg-black">

                                        {/* LÓGICA: Verifica se existe o caminho do vídeo local */}
                                        {data.videoPath ? (
                                            <video
                                                className="w-full h-full object-cover scale-110"
                                                autoPlay
                                                muted
                                                playsInline
                                                preload="metadata"
                                                poster={data.heroImage}
                                            >
                                                <source src={data.videoPath} type="video/mp4" />
                                                Seu navegador não suporta a tag de vídeo.
                                            </video>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100 relative">
                                                <img
                                                    src={data.heroImage}
                                                    className="opacity-50 w-full h-full object-cover blur-sm"
                                                    alt="Background"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <h3 className="text-2xl font-bold text-primary text-center px-4">
                                                        Taxmed Contabilidade
                                                    </h3>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* Elemento decorativo extra atrás */}
                                <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-primary/20 rounded-2xl -rotate-2"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA FINAL --- */}
                <section className="py-20 bg-primary text-white text-center">
                    <div className="container px-4 mx-auto max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Pronto para transformar sua gestão?
                        </h2>
                        <p className="text-primary-foreground/90 text-lg mb-8">
                            Agende uma consultoria gratuita e descubra o potencial de economia do seu negócio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://api.whatsapp.com/send/?phone=5585987411585&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+planos.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="secondary" className="gap-2 text-primary font-bold">
                                    <MessageCircle className="w-5 h-5" />
                                    Falar no WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
            <WhatsAppButton />
        </div >
    );
};

export default SegmentPage;