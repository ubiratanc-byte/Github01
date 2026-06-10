import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById("ofertas");
    offersSection?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    "Acaba com a Próstata Inflamada",
    "Elimina Infecções", 
    "Aumenta a força do jato urinário",
    "Totalmente seguro e natural",
    "Reduz a vontade frequente de urinar",
    "Fórmula 6 em 1 completa",
    "O único com extrato de Plantas Amazônicas",
    "Devolve a Virilidade masculina"
  ];

  return (
    <section className="relative min-h-screen bg-brand-dark overflow-hidden">

      
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 md:gap-12 items-center min-h-[80vh]">
          
          {/* Product Image - Mobile First */}
          <div className="relative order-1 lg:order-2 lg:col-span-3 w-full max-w-none mx-auto">
            <div className="relative z-10">
              {/* Main Product Image */}
              <div className="relative z-10">
                <img 
                  src="/pv-vitaflux/vitaflux-hero.webp?v=4"
                  alt="Vita Flux - Suplemento Alimentar em Gotas"
                  className="w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3)) drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))'
                  }}
                />
              </div>
            </div>
            
            {/* Premium Floating Badges */}
            <div className="absolute top-4 -right-2 sm:-right-4 md:-right-6 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-dark px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg sm:rounded-xl md:rounded-2xl font-black text-xs sm:text-sm md:text-lg shadow-gold border border-brand-gold-light/40 backdrop-blur-sm">
              <span className="block text-[10px] sm:text-xs font-medium opacity-80">FÓRMULA</span>
              <span className="block text-sm sm:text-lg md:text-xl">6 EM 1</span>
            </div>
            
          </div>

          {/* Content - Mobile Second */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1 lg:col-span-2 w-full">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-brand-dark-foreground leading-none tracking-tight">
                <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent block sm:inline">Fórmula 6 em 1</span>{" "}
                <span className="block text-brand-dark-foreground">que combate os</span>{" "}
                <span className="block text-brand-dark-foreground">problemas relacionados</span>{" "}
                <span className="block">à <span className="bg-gradient-to-r from-brand-blue to-brand-accent bg-clip-text text-transparent">Próstata</span></span>{" "}
                <span className="block text-brand-silver text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold mt-2">sem complicações.</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-brand-silver max-w-2xl mx-auto lg:mx-0 font-medium">
                <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent font-bold">Vita Flux</span> com 6 ingredientes naturais cientificamente comprovados
              </p>
            </div>

            {/* Premium Benefits List */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start gap-3 group">
                  <div className="bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-lg sm:rounded-xl p-1 sm:p-1.5 md:p-2 flex-shrink-0 shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-brand-dark" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-brand-dark-foreground group-hover:text-brand-gold transition-colors duration-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8 pt-4 sm:pt-6 md:pt-8">
              {/* Anvisa Approval Badge */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-brand-gold/15 to-brand-gold/5 border-2 border-brand-gold/40 rounded-xl px-4 py-3 max-w-xl mx-auto lg:mx-0 shadow-gold">
                <div className="flex-shrink-0 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full p-2">
                  <Check className="w-5 h-5 text-brand-dark" strokeWidth={3} />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-brand-gold uppercase tracking-wider">Aprovado pela Anvisa</div>
                  <div className="text-sm sm:text-base font-mono font-semibold text-brand-dark-foreground">Reg. 25351062763202632</div>
                </div>
              </div>

              <Button 
                variant="success" 
                size="lg" 
                onClick={scrollToOffers}
                className="addcart w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 rounded-xl sm:rounded-2xl shadow-premium hover:shadow-gold font-black tracking-wide bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-dark hover:from-brand-gold-light hover:to-brand-gold"
              >
                🎯 CONHECER TODAS AS OFERTAS
              </Button>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center justify-center gap-2 bg-brand-dark/50 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-2 sm:py-2 md:py-3 border border-brand-gold/20">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-brand-gold rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-xs md:text-sm font-medium text-brand-silver">Compra Segura</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-brand-dark/50 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-2 sm:py-2 md:py-3 border border-brand-gold/20">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-brand-gold rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-xs md:text-sm font-medium text-brand-silver">Satisfação Garantida</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-brand-dark/50 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-2 sm:py-2 md:py-3 border border-brand-gold/20">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-brand-gold rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-xs md:text-sm font-medium text-brand-silver">Privacidade Protegida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Bottom Accent - Gold */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-blue to-brand-gold"></div>
      <div className="absolute bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
