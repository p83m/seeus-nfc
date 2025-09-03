import { Card } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "Instant Connection",
      description: "Jednym dotknięciem klienci trafiają tam, gdzie chcesz - do sklepu, social media, czy strony internetowej",
      gradient: "from-electric-blue to-electric-purple"
    },
    {
      icon: "💼",
      title: "Professional Impact",
      description: "Twoja marka zyskuje nowoczesny wizerunek. Klienci pamiętają firmy, które używają najnowszych technologii",
      gradient: "from-electric-purple to-electric-pink"
    },
    {
      icon: "📈",
      title: "Measurable Results",
      description: "Śledzisz skuteczność każdego breloka. Widzisz, ile osób skorzystało z Twojej promocji",
      gradient: "from-electric-cyan to-primary"
    },
    {
      icon: "🎯",
      title: "Perfect Targeting",
      description: "Różne breloki dla różnych kampanii. Kierujesz klientów dokładnie tam, gdzie mają największe szanse na zakup",
      gradient: "from-electric-orange to-electric-pink"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">Why NFC?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            W dobie smartfonów, tradycyjne wizytówki i ulotki to przeszłość. 
            Twoi klienci mają telefony - wykorzystaj to!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-glow p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                <div className={`text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Gradient line */}
                <div className={`h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${benefit.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-black gradient-text">99%</div>
            <div className="text-muted-foreground">Ludzi ma telefon z NFC</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black gradient-text">3s</div>
            <div className="text-muted-foreground">Czas dotknięcia breloka</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black gradient-text">∞</div>
            <div className="text-muted-foreground">Możliwości wykorzystania</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;