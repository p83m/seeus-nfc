import { Button } from "@/components/ui/button";
import nfcKeychainHero from "@/assets/nfc-keychain-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
      
      {/* Animated background elements - more subtle */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-electric-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight">
                <span className="block gradient-text">WOW</span>
                <span className="block text-foreground">Your Clients</span>
              </h1>
              <p className="text-lg lg:text-xl xl:text-2xl text-muted-foreground font-medium max-w-2xl">
                Nowoczesne breloki NFC z Twoim logo, które zrobią efekt WOW na Twoich klientach
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Jednym dotknięciem kierujesz klientów do swojego sklepu, mediów społecznościowych lub strony internetowej. To przyszłość promocji!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="btn-hero">
                  Zamów Teraz
                </Button>
                <Button className="btn-neon">
                  Zobacz Produkty
                </Button>
              </div>
            </div>
            
            {/* Features highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground mb-2">💫</div>
                <div className="text-sm text-muted-foreground">Efekt WOW</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground mb-2">🚀</div>
                <div className="text-sm text-muted-foreground">Nowoczesna technologia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground mb-2">🎨</div>
                <div className="text-sm text-muted-foreground">Personalizacja</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Product image */}
          <div className="relative">
            <div className="relative z-10 float-animation">
              <img
                src={nfcKeychainHero}
                alt="Brelok NFC seeUS"
                className="w-full max-w-lg mx-auto pulse-glow rounded-3xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-electric-cyan/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-electric-orange/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Przewiń w dół</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;