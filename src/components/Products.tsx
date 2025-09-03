import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import nfcCollection from "@/assets/nfc-collection.jpg";
import nfcDeskStand from "@/assets/nfc-desk-stand.jpg";

const Products = () => {
  const products = [
    {
      title: "Custom NFC Keychains",
      subtitle: "Breloki NFC z Twoim Logo",
      description: "Personalizowane breloki w dowolnym kształcie z logo Twojej firmy. Minimalne zamówienie już od 50 sztuk.",
      image: nfcCollection,
      features: [
        "Dowolny kształt i kolor",
        "Nadruk/grawer logo",
        "Hurtowe ceny",
        "Szybka realizacja"
      ],
      price: "Od 15 zł/szt",
      popular: true
    },
    {
      title: "NFC Desk Stands",
      subtitle: "Stojaki Biurkowe NFC",
      description: "Eleganckie stojaki biurkowe z technologią NFC. Idealne do recepcji, biur i punktów sprzedaży.",
      image: nfcDeskStand,
      features: [
        "Premium materiały",
        "Stabilna konstrukcja", 
        "Elegancki design",
        "Łatwa konfiguracja"
      ],
      price: "Od 45 zł/szt",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-electric-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-electric-orange/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">Our </span>
            <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nowoczesne gadżety promocyjne, które wyróżnią Twoją markę na tle konkurencji
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className={`card-glow overflow-hidden group relative ${product.popular ? 'ring-2 ring-electric-blue/50' : ''}`}>
              {product.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Najpopularniejszy
                  </span>
                </div>
              )}
              
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {product.title}
                  </h3>
                  <h4 className="text-lg gradient-text font-semibold">
                    {product.subtitle}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold gradient-text">
                      {product.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {index === 0 ? "przy zamówieniu 100+ szt" : "przy zamówieniu 25+ szt"}
                    </div>
                  </div>
                  
                  <Button className={product.popular ? "btn-hero" : "btn-neon"}>
                    Zapytaj o cenę
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card-glow p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Masz pomysł na inny gadżet NFC?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tworzymy także niestandardowe rozwiązania - karty NFC, naklejki, etykiety i więcej!
            </p>
            <Button className="btn-hero">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;