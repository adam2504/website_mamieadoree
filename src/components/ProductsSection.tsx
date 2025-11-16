import { Card, CardContent } from "@/components/ui/card";
import baguetteImg from "@/assets/product-baguette.jpg";
import countryBreadImg from "@/assets/product-country-bread.jpg";
import croissantImg from "@/assets/product-croissant.jpg";
import multigrainImg from "@/assets/product-multigrain.jpg";
import viennoiseriesImg from "@/assets/product-viennoiseries.jpg";
import pastriesImg from "@/assets/product-pastries.jpg";

const products = [
  {
    name: "Pain Tradition",
    description: "Baguette croustillante à l'ancienne",
    image: "https://i.ibb.co/zHfCPJz8/IMG-6764.jpg",
  },
  {
    name: "Pain de Campagne",
    description: "Pain rustique au levain naturel",
    image: "https://i.ibb.co/FkR8FJXx/IMG-6772.jpg",
  },
  {
    name: "Croissants Pur Beurre",
    description: "Feuilletés dorés et fondants",
    image: "https://i.ibb.co/4ZjmBf1n/IMG-6771.jpg",
  },
  {
    name: "Pain aux Céréales",
    description: "Riche en graines et fibres",
    image: "https://i.ibb.co/5xKVWqfJ/IMG-6761.jpg",
  },
  {
    name: "Viennoiseries",
    description: "Pains au chocolat, brioches et chaussons",
    image: "https://i.ibb.co/zHSr1JTg/IMG-6773.jpg",
  },
  {
    name: "Pâtisseries",
    description: "Tartes, éclairs et douceurs sucrées",
    image: "https://i.ibb.co/zht1DGJD/IMG-6765.jpg",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Nos spécialités artisanales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de pains et viennoiseries fabriqués chaque jour avec passion à Saint-André-de-Sangonis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6 bg-card">
                <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
