import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@seeUS.pl",
      description: "Odpowiadamy w ciągu 2h"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+48 123 456 789",
      description: "Szybki kontakt 7 dni w tygodniu"
    },
    {
      icon: "💬",
      title: "Live Chat",
      value: "seeUS.pl/chat",
      description: "Natychmiastowa pomoc online"
    }
  ];

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">WOW</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Skontaktuj się z nami już dziś i zacznij budować nowoczesny wizerunek swojej firmy
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Wybierz najwygodniejszy sposób kontaktu:
            </h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {method.title}
                    </h4>
                    <div className="text-white/90 font-medium mb-1">
                      {method.value}
                    </div>
                    <div className="text-white/70 text-sm">
                      {method.description}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                🕒 Godziny pracy
              </h4>
              <div className="space-y-2 text-white/80">
                <div>Pon-Pt: 9:00 - 18:00</div>
                <div>Sob: 10:00 - 14:00</div>
                <div className="text-sm text-white/60">
                  * W pilnych sprawach odpowiadamy również poza godzinami pracy
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick action section */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Rozpocznij współpracę w 3 krokach:
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Skontaktuj się</h4>
                    <p className="text-white/80 text-sm">Opowiedz nam o swoich potrzebach i otrzymaj darmową wycenę</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Zaprojektuj</h4>
                    <p className="text-white/80 text-sm">Wyślij nam swoje logo, wybierz kształt i kolory</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Otrzymaj</h4>
                    <p className="text-white/80 text-sm">Twoje breloki NFC gotowe do WOW-owania klientów!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <Button className="btn-hero w-full text-lg py-6">
                💬 Rozpocznij rozmowę
              </Button>
              
              <div className="text-white/80 text-sm">
                Bezpłatna konsultacja • Darmowa wycena • Brak zobowiązań
              </div>
              
              <div className="flex items-center justify-center space-x-4 text-white/60 text-sm">
                <span>🔒 Poufność gwarantowana</span>
                <span>•</span>
                <span>⚡ Szybka odpowiedź</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              🎯 Specjalna oferta dla pierwszych klientów
            </h3>
            <p className="text-white/80 mb-6">
              Zamów 100+ breloków NFC i otrzymaj 10% zniżki + darmowy projekt graficzny
            </p>
            <Button className="btn-neon">
              Skorzystaj z oferty
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;