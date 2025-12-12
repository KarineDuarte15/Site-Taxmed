import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Segments from "@/components/Segments";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Segments />
        <HowItWorks />
        <Pricing />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
