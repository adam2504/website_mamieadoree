import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import MapSection from "@/components/MapSection";
import SavoirFaireSection from "@/components/SavoirFaireSection";
import EngagementsSection from "@/components/EngagementsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <MapSection />
      <SavoirFaireSection />
      <EngagementsSection />
      <Footer />
    </main>
  );
};

export default Index;
