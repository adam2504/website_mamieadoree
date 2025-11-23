import { Wheat, Clock, Flame } from "lucide-react";
import bakerImage from "@/assets/IMG_6770.jpg";

const features = [
  {
    icon: Wheat,
    title: "Fabrication traditionnelle sur place",
    description: "Chaque pain est façonné à la main avec soin et expertise",
  },
  {
    icon: Clock,
    title: "Levain naturel et fermentation lente",
    description: "Des méthodes ancestrales pour un goût authentique",
  },
  {
    icon: Flame,
    title: "Cuisson au four traditionnel",
    description: "Le secret d'une croûte dorée et croustillante",
  },
];

const SavoirFaireSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Notre savoir-faire de boulanger artisan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La tradition boulangère française au cœur de l'Hérault
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-[400px] h-[450px]">
              <img
                src={bakerImage}
                alt="Artisan boulanger au travail à Saint-André-de-Sangonis"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavoirFaireSection;
