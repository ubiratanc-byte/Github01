import { AlertTriangle, ShieldX } from "lucide-react";
import logoMercadoLivre from "@/assets/logo-mercadolivre.png";
import logoShopee from "@/assets/logo-shopee.png";
import logoOlx from "@/assets/logo-olx.webp";

interface CounterfeitWarningBannerProps {
  className?: string;
}

const CounterfeitWarningBanner = ({ className = "" }: CounterfeitWarningBannerProps) => {
  return (
    <div className={`bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white px-4 md:px-8 py-6 md:py-8 rounded-2xl shadow-xl border-4 border-yellow-400 relative overflow-hidden animate-warning-pulse ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`
        }}></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-5">
        <div className="flex items-center justify-center gap-2 md:gap-3 w-full animate-bounce-slow">
          <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-yellow-300 animate-pulse flex-shrink-0" />
          <span className="text-xl md:text-3xl font-black tracking-wide text-center animate-glow">⚠️ ATENÇÃO: CUIDADO COM FALSIFICAÇÕES!</span>
          <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-yellow-300 animate-pulse flex-shrink-0" />
        </div>
        
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl border-4 border-yellow-400 hover:scale-105 transition-transform duration-300">
          <div className="text-center mb-3">
            <span className="text-red-600 font-black text-lg md:text-2xl uppercase tracking-wider">🚫 NÃO VENDEMOS NESTAS PLATAFORMAS:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="relative group hover:scale-110 transition-transform duration-300">
              <img src={logoMercadoLivre} alt="Mercado Livre" className="h-16 md:h-28 w-auto object-contain rounded-lg" />
            </div>
            <div className="relative group hover:scale-110 transition-transform duration-300">
              <img src={logoShopee} alt="Shopee" className="h-12 md:h-20 w-auto object-contain rounded-lg" />
            </div>
            <div className="relative group hover:scale-110 transition-transform duration-300">
              <img src={logoOlx} alt="OLX" className="h-12 md:h-20 w-auto object-contain rounded-lg" />
            </div>
          </div>
          <div className="text-center mt-3">
            <span className="text-gray-700 font-bold text-sm md:text-base">Produtos vendidos nessas plataformas são FALSIFICAÇÕES!</span>
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-base md:text-xl font-bold text-center">
            O Vita Flux <span className="bg-white/20 px-2 py-1 rounded animate-pulse">NÃO É VENDIDO</span> no Mercado Livre, Shopee, OLX ou outras plataformas
          </p>
          <p className="text-sm md:text-base text-white/90 text-center">
            Ao comprar em sites não autorizados, você corre riscos à saúde e apoia a pirataria
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-xl border border-white/30 animate-bounce-slow">
          <ShieldX className="w-5 h-5 md:w-6 md:h-6 text-yellow-300 animate-pulse" />
          <span className="text-sm md:text-lg font-black text-center">Este é o ÚNICO SITE OFICIAL do Vita Flux</span>
        </div>
      </div>
    </div>
  );
};

export default CounterfeitWarningBanner;
