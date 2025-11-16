import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Où nous trouver à Saint-André-de-Sangonis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Boulangerie proche de Gignac, Aniane et Clermont-l'Hérault
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-2xl mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.234567890123!2d3.507174!3d43.650291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM5JzAxLjAiTiAzwrAzMCcyNS44IkU!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Ma Mie Adorée à Saint-André-de-Sangonis"
            />
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                  Notre adresse
                </h3>
                <address className="not-italic text-muted-foreground">
                  <strong className="text-foreground">Ma Mie Adorée</strong><br />
                  95 avenue de Montpellier<br />
                  34725 Saint-André-de-Sangonis<br />
                  Hérault, Occitanie
                </address>
              </div>
            </div>

            <Button 
              asChild
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-foreground font-semibold"
            >
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=43.650291,3.507174"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Obtenir l'itinéraire
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
