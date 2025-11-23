import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import { Phone } from "lucide-react";
import mamieadoree from "@/assets/mamieadoree.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <img 
          src={logo} 
          alt="Ma Mie Adorée logo" 
          className="h-16 md:h-20 w-auto rounded-lg shadow-lg"
        />
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${mamieadoree})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-white animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Boulangerie Ma Mie Adorée
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            Artisan Boulanger à Saint-André-de-Sangonis
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Pain artisanal et viennoiseries fraîches dans l'Hérault
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('products')}
              className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-lg px-8"
            >
              Nos produits
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-foreground font-semibold text-lg px-8"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Sticky phone button for mobile */}
      <a 
        href="tel:0467271030"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-accent hover:bg-accent/90 text-foreground rounded-full p-4 shadow-xl transition-transform hover:scale-110"
        aria-label="Appeler la boulangerie"
      >
        <Phone className="w-6 h-6" />
      </a>
    </header>
  );
};

export default HeroSection;
