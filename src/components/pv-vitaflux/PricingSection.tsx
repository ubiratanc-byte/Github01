import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Truck } from "lucide-react";


const PricingSection = () => {
  const offers = [
    {
      bottles: 1,
      originalPrice: 297,
      salePrice: 197,
      savings: 100,
      popular: false,
      description: "Experimente por 1 mês",
      image: "/pv-vitaflux/vitaflux-single.webp",
      visualText: "1 Frasco",
      bottleCount: 1,
      buyLink: "https://ev.braip.com/campanhas/cpa/cam8md4n8/?split=12"
    },
    {
      bottles: 3,
      originalPrice: 497,
      salePrice: 297,
      savings: 200,
      popular: true,
      description: "Tratamento recomendado",
      image: "/pv-vitaflux/vitaflux-kit-3.webp",
      visualText: "3 Frascos",
      promoText: "2 + 1 Grátis",
      bottleCount: 3,
      buyLink: "https://ev.braip.com/campanhas/cpa/camm7ezj5/?split=12"
    },
    {
      bottles: 5,
      originalPrice: 697,
      salePrice: 397,
      savings: 300,
      popular: false,
      description: "Melhor custo benefício",
      image: "/pv-vitaflux/vitaflux-kit-5.webp",
      visualText: "5 Frascos",
      promoText: "3 + 2 Grátis",
      bottleCount: 5,
      buyLink: "https://ev.braip.com/campanhas/cpa/camgmryo7/?split=12"
    },
    {
      bottles: 12,
      originalPrice: 1297,
      salePrice: 697,
      savings: 600,
      popular: false,
      bestValue: true,
      description: "Tratamento completo",
      image: "/pv-vitaflux/vitaflux-kit-12.webp",
      visualText: "12 Frascos",
      promoText: "10 + 2 Grátis",
      bottleCount: 12,
      buyLink: "https://ev.braip.com/campanhas/cpa/cam9164np/?split=12"
    }
  ];

  const benefits = [
    "Frete Grátis para todo Brasil",
    "Garantia de 90 dias",
    "Suporte especializado",
    "Produto 100% natural",
    "Aprovado pela ANVISA"
  ];

  return (
    <section id="ofertas" className="py-12 md:py-24 bg-gradient-to-br from-brand-dark via-brand-dark/98 to-brand-dark relative overflow-hidden">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Geometric Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                           linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%), 
                           linear-gradient(-45deg, rgba(16, 185, 129, 0.1) 25%, transparent 25%)`,
          backgroundSize: '400px 400px, 300px 300px, 60px 60px, 60px 60px',
          backgroundPosition: '0% 0%, 100% 100%, 0% 0%, 0% 0%'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-500/12 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-gradient-to-r from-transparent via-blue-500/8 to-transparent rotate-12 blur-2xl"></div>
      </div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark-foreground leading-tight">
            <span className="bg-gradient-to-r from-brand-blue to-brand-accent bg-clip-text text-transparent">Ofertas Especiais</span>{" "}
            <span className="block text-brand-dark-foreground mt-1 md:mt-2">Por Tempo Limitado</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-brand-success to-brand-success/90 text-white px-4 md:px-8 py-3 md:py-4 rounded-2xl shadow-premium backdrop-blur-sm border border-white/20">
            <Truck className="w-5 h-5 md:w-7 md:h-7" />
            <span className="text-lg md:text-2xl font-black tracking-wide">FRETE GRÁTIS PARA TODO BRASIL</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Mobile: reverse order, Desktop: normal order */}
          {offers
            .slice()
            .reverse()
            .map((offer, index) => (
            <Card key={index} className={`initiate relative group transition-all duration-500 hover:shadow-premium pt-6 border-2 ${
              offer.popular || offer.bestValue
                ? 'ring-2 ring-brand-blue scale-105 shadow-blue bg-gradient-to-br from-white to-brand-blue/5 border-brand-blue/30' 
                : 'hover:scale-105 bg-gradient-to-br from-white to-brand-dark/2 hover:shadow-blue border-gray-200'
            }`}>
              {offer.popular && (
                <Badge className="absolute -top-4 md:-top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-blue to-brand-accent text-white px-4 md:px-7 py-2 md:py-2.5 text-xs md:text-sm font-black rounded-full shadow-blue border border-white/30 z-50 whitespace-nowrap">
                  ⭐ MAIS VENDIDO ⭐
                </Badge>
              )}
              {offer.bestValue && (
                <Badge className="absolute -top-4 md:-top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 md:px-7 py-2 md:py-2.5 text-xs md:text-sm font-black rounded-full shadow-premium border border-white/30 z-50 whitespace-nowrap">
                  💰 MAIOR ECONOMIA 💰
                </Badge>
              )}
              
              {/* Product Image */}
              <div className="p-4 md:p-6 flex justify-center pt-2">
                <div className="relative w-full max-w-[200px] aspect-square flex items-center justify-center">
                  <img 
                    src={offer.image} 
                    alt={`Kit ${offer.bottles} frascos Vita Flux`}
                    loading="lazy"
                    className="w-full h-auto object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <CardHeader className="text-center space-y-4 md:space-y-6 pb-4 md:pb-6 pt-0">
                <div className="space-y-2 md:space-y-3">
                  <CardTitle className="text-xl md:text-3xl font-black text-brand-dark">
                    {offer.visualText}
                  </CardTitle>
                  {offer.promoText && (
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      🎁 {offer.promoText}
                    </div>
                  )}
                  <p className="text-sm md:text-base text-brand-silver font-medium">{offer.description}</p>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <span className="text-lg md:text-xl text-brand-silver line-through font-medium">
                      R$ {offer.originalPrice}
                    </span>
                    <Badge className="text-xs md:text-sm font-extrabold px-3 md:px-4 py-1.5 bg-red-500 text-white hover:bg-red-600 rounded-full shadow-lg border-0">
                      -{Math.round(((offer.originalPrice - offer.salePrice) / offer.originalPrice) * 100)}%
                    </Badge>
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-black text-green-600 tracking-tight">
                    12x R$ {offer.bottles === 1 ? '20,37' : offer.bottles === 3 ? '30,70' : offer.bottles === 5 ? '41,06' : '72,08'}
                  </div>
                  
                  <div className="text-sm md:text-base text-brand-silver font-medium">
                    Ou à vista por: <span className="font-bold text-brand-dark">R$ {offer.salePrice.toFixed(2).replace('.', ',')}</span>
                  </div>
                  
                  <div className="text-base md:text-lg text-brand-blue font-bold">
                    💰 Economize R$ {offer.savings}
                  </div>
                  
                  {offer.bottles > 1 && (
                    <div className="text-xs md:text-sm text-brand-silver bg-brand-dark/5 rounded-lg px-2 md:px-3 py-1 md:py-2">
                      <span className="font-medium">R$ {Math.round(offer.salePrice / offer.bottles)}/frasco</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6 md:space-y-8 px-4 md:px-8 pb-6 md:pb-8">
                <Button 
                  variant="success" 
                  className="initiate w-full text-lg md:text-xl py-6 md:py-8 font-black tracking-wide rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                  onClick={() => window.open(offer.buyLink, '_blank')}
                >
                  🛒 COMPRAR AGORA
                </Button>
                
                <div className="space-y-3 md:space-y-4">
                  {benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-success flex-shrink-0" />
                      <span className="text-brand-silver font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Guarantee Section */}
        <div className="bg-gradient-to-r from-brand-dark via-[hsl(30,20%,12%)] to-brand-dark p-8 md:p-16 rounded-3xl text-white shadow-premium backdrop-blur-sm border border-brand-gold/20 relative overflow-hidden mb-8 md:mb-12">
          {/* Premium Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-4 bg-brand-gold/10 backdrop-blur-md rounded-xl px-6 md:px-8 py-4 md:py-6 mb-6 border border-brand-gold/20">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-black text-brand-gold">GARANTIA BLINDADA</h3>
                  <p className="text-sm md:text-base text-white/90 font-medium">Proteção Total do Cliente</p>
                </div>
              </div>
              
              <h4 className="text-3xl md:text-5xl font-black text-brand-gold mb-6 leading-tight">
                90 Dias de Garantia Incondicional
              </h4>
              
              <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto font-medium leading-relaxed">
                Compre com <strong>total segurança</strong>. Se não obtiver os resultados esperados, 
                devolvemos <strong>100% do valor investido</strong> sem questionamentos.
              </p>
            </div>

            {/* Professional Features */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-brand-gold/20 text-center">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h5 className="text-lg md:text-xl font-black text-white mb-3">Reembolso Integral</h5>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">Devolução de 100% do valor pago em até 90 dias corridos</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-brand-gold/20 text-center">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h5 className="text-lg md:text-xl font-black text-white mb-3">Processamento Rápido</h5>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">Solicitação processada em até 24 horas úteis</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-brand-gold/20 text-center">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h5 className="text-lg md:text-xl font-black text-white mb-3">Processo Simples</h5>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">Sem burocracias ou perguntas constrangedoras</p>
              </div>
            </div>

            {/* Benefits Grid - Professional */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-brand-gold/10">
              <h5 className="text-xl md:text-2xl font-black text-brand-gold text-center mb-8">
                Benefícios Inclusos na Sua Compra
              </h5>
              <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg px-4 py-4 border border-brand-gold/20">
                    <div className="w-5 h-5 bg-brand-gold/30 rounded-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Trust Badge */}
            <div className="text-center mt-10 md:mt-12">
              <div className="inline-flex items-center gap-4 bg-brand-gold/10 backdrop-blur-md px-8 md:px-12 py-4 md:py-6 rounded-xl border border-brand-gold/20">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xl md:text-2xl font-black text-brand-gold">EMPRESA CONFIÁVEL</div>
                  <div className="text-sm md:text-base font-medium text-white/80">Mais de 17.000 clientes satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default PricingSection;
