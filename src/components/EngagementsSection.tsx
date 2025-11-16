import { CheckCircle2 } from "lucide-react";

const engagements = [
  "Produits frais chaque jour",
  "Farines biologiques disponibles",
  "Respect des traditions boulangères",
  "Zéro additif chimique",
  "Fabrication artisanale 100%",
];

const EngagementsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Nos engagements qualité
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La qualité et l'authenticité au service de votre plaisir
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {engagements.map((engagement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground font-medium">
                  {engagement}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 border-2 border-accent/20 rounded-2xl p-8 text-center">
            <p className="text-xl md:text-2xl font-display font-semibold text-foreground">
              Boulangerie artisanale à Saint-André-de-Sangonis
            </p>
            <p className="text-muted-foreground mt-3">
              Nous perpétuons la tradition boulangère française avec passion et authenticité dans l'Hérault
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementsSection;
