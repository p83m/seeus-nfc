import { Button } from "@/components/ui/button";
import nfcKeychainHero from "@/assets/nfc-keychain-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Dynamic grid background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--electric-blue)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-electric-blue rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-electric-purple rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-5 h-5 bg-electric-cyan rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Centered hero content */}
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-12">
          
          {/* Main headline with typewriter effect styling */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 backdrop-blur-sm border border-electric-blue/20 rounded-full px-6 py-2 text-sm font-medium text-foreground">
              <span className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></span>
              <span>Nowoczesne gadżety promocyjne</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <span className="block text-foreground mb-2">Make It</span>
              <span className="block gradient-text text-6xl md:text-8xl lg:text-9xl xl:text-[10rem]">WOW</span>
              <span className="block text-foreground text-2xl md:text-3xl lg:text-4xl font-normal mt-4">
                z brelokami NFC
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Jedna sekcunda. Jeden dotyk. Nieskończone możliwości. 
              Twoi klienci będą zachwyceni.
            </p>
          </div>
          
          {/* Interactive product preview */}
          <div className="relative">
            <div className="group cursor-pointer">
              <div className="relative w-80 h-80 mx-auto">
                {/* Main product image with hover effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={nfcKeychainHero}
                    alt="Brelok NFC seeUS"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                
                {/* Floating info bubbles */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">1 tap</div>
                    <div className="text-xs text-muted-foreground">instant connect</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">∞</div>
                    <div className="text-xs text-muted-foreground">possibilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero px-8 py-4 text-lg">
                🚀 Zamów teraz
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg border-2 hover:bg-primary/5">
                📱 Zobacz demo
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              ✨ Darmowa wycena • 🚚 Dostawa 7-14 dni • 🎨 Personalizacja
            </div>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50 max-w-md">
            <div className="text-center">
              <div className="text-2xl font-black gradient-text">500+</div>
              <div className="text-xs text-muted-foreground">firm</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black gradient-text">50k+</div>
              <div className="text-xs text-muted-foreground">breloków</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black gradient-text">99%</div>
              <div className="text-xs text-muted-foreground">zadowolonych</div>
            </div>
          </div>
        </div>
        
        {/* Elegant scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-3 text-muted-foreground/60">
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-muted-foreground/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;