import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">Nos adresses</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <address className="not-italic">
                    <strong>Ma Mie Adorée Saint-André</strong><br />
                    95 avenue de Montpellier<br />
                    34725 Saint-André-de-Sangonis<br />
                    Hérault, Occitanie
                  </address>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a 
                    href="tel:0467271030"
                    className="hover:text-accent transition-colors font-semibold"
                  >
                    04 67 27 10 30
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-accent/20">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <address className="not-italic">
                    <strong>Ma Mie Adorée Gignac</strong><br />
                    6 boulevard de l'Esplanade<br />
                    34150 Gignac<br />
                    Hérault, Occitanie
                  </address>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a 
                    href="tel:0499669156"
                    className="hover:text-accent transition-colors font-semibold"
                  >
                    04 99 66 91 56
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button 
                asChild
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold"
              >
                <a href="tel:0467271030">
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler maintenant
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-foreground font-semibold"
              >
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=43.650291,3.507174"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Itinéraire
                </a>
              </Button>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-accent" />
              Horaires d'ouverture
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-accent/20 pb-2">
                <span className="font-medium">7 jours sur 7</span>
                <span>6h00 - 20h00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-accent">Jours fériés</span>
                <span className="text-accent">Ouverts</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">À propos</h3>
            <p className="mb-4 leading-relaxed">
              Boulangerie artisanale au cœur de Saint-André-de-Sangonis, nous vous proposons chaque jour du pain frais, des viennoiseries et des pâtisseries fabriqués avec passion selon les méthodes traditionnelles.
            </p>
            <p className="text-accent font-medium">
              Desservant également Gignac, Aniane et Clermont-l'Hérault
            </p>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Ma Mie Adorée - Boulangerie Artisanale à Saint-André-de-Sangonis (34725, Hérault)</p>
          <p className="mt-2">Pain artisanal | Viennoiseries | Pâtisseries | Boulanger traditionnel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
