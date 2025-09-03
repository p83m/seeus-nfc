const WhyUs = () => {
  const reasons = [
    {
      icon: "🚀",
      title: "Startup Energy",
      description: "Jesteśmy młodą, dynamiczną firmą. Rozumiemy potrzeby nowoczesnych biznesów i działamy szybko.",
      color: "electric-blue"
    },
    {
      icon: "💡",
      title: "Innovation First",
      description: "Nie kopiujemy - tworzymy. Każdy produkt to efekt naszej pasji do najnowszych technologii.",
      color: "electric-purple"
    },
    {
      icon: "🎨",
      title: "Full Customization",
      description: "Twoje logo, Twoje kolory, Twój kształt. Każdy brelok może być unikalny dla Twojej marki.",
      color: "electric-cyan"
    },
    {
      icon: "📦",
      title: "Bulk Orders",
      description: "Specjalizujemy się w dużych zamówieniach. Im więcej zamawiasz, tym lepsze ceny otrzymujesz.",
      color: "electric-orange"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Standardowa realizacja 7-14 dni. Ekspresowe zamówienia? Możliwe w 3-5 dni roboczych.",
      color: "electric-pink"
    },
    {
      icon: "🛠️",
      title: "Tech Support",
      description: "Pomagamy w konfiguracji NFC, doradzamy najlepsze rozwiązania. Wsparcie przed i po zakupie.",
      color: "primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-electric-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-electric-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">Why </span>
            <span className="gradient-text">seeUS?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nie jesteśmy kolejną korporacją. Jesteśmy zespołem pasjonatów, 
            którzy wierzą w moc nowoczesnych technologii promocyjnych.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-glow p-8 h-full hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                  
                  {/* Animated border */}
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-primary rounded-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="card-glow p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 gradient-text">
              Dlaczego firmy wybierają seeUS?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-3xl font-black gradient-text">500+</div>
                <div className="text-muted-foreground">Zadowolonych klientów</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-black gradient-text">50k+</div>
                <div className="text-muted-foreground">Wyprodukowanych breloków</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-black gradient-text">99%</div>
                <div className="text-muted-foreground">Pozytywnych opinii</div>
              </div>
            </div>
            
            <div className="mt-8 text-muted-foreground italic">
              "seeUS to nie tylko dostawca - to partner technologiczny, który pomoże Twojej firmie wyróżnić się na rynku"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;