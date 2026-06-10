import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcelo Santos", age: "52 anos", location: "São Paulo - SP", rating: 5,
      text: "Eu acordava 4 ou 5 vezes toda noite pra ir ao banheiro, e meu jato tava fraco demais. Achava que era normal da idade, mas depois que comecei a usar o Vita Flux, tudo mudou. Voltei a dormir a noite inteira, o fluxo tá forte de novo e até meu desejo melhorou. Me sinto com 30 anos outra vez. Esse produto realmente faz o que promete!",
      image: "/pv-vitaflux/client-marcelo.webp", verified: true, timeUsing: "3 meses"
    },
    {
      name: "Ricardo Oliveira", age: "51 anos", location: "Rio de Janeiro - RJ", rating: 5,
      text: "Eu sempre fui muito ativo, mas nos últimos anos comecei a sentir minha energia e meu desempenho caírem. Além disso, toda hora dava vontade de urinar, principalmente à noite. O Vita Flux mudou tudo. Hoje acordo disposto, o jato voltou ao normal e até minha esposa percebeu a diferença. É impressionante como um suplemento natural pode transformar a vida de um homem.",
      image: "/pv-vitaflux/client-ricardo.webp", verified: true, timeUsing: "4 meses"
    },
    {
      name: "João Carlos", age: "64 anos", location: "Porto Alegre - RS", rating: 5,
      text: "Depois dos 60 eu pensei que minha vida sexual tinha acabado. Acordava a noite inteira, o jato fraco, zero disposição. Comecei a usar o Vita Flux por curiosidade e me surpreendi. Dormindo bem, urino sem dor e até na cama voltei a ser o homem que eu era. Minha esposa brinca que pareço ter rejuvenescido uns 20 anos. Recomendo de olhos fechados!",
      image: "/pv-vitaflux/client-joao.webp", verified: true, timeUsing: "5 semanas"
    },
    {
      name: "Márcio Mattos", age: "54 anos", location: "Belo Horizonte - MG", rating: 5,
      text: "Eu tava quase marcando cirurgia por causa da próstata aumentada. Sentia dor, ardência e vivia cansado. Um amigo me indicou o Vita Flux e em menos de 15 dias já senti melhora. Hoje urino normalmente, sem dor e com muito mais vontade e energia. Me sinto outro homem. É libertador saber que existe uma solução natural e eficaz como essa.",
      image: "/pv-vitaflux/client-marcio.webp", verified: true, timeUsing: "2 meses"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          backgroundSize: '600px 600px, 400px 400px'
        }}></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-20">
          <Badge variant="outline" className="text-brand-gold border-brand-gold/30 bg-brand-gold/10 px-4 md:px-8 py-2 md:py-3 text-lg md:text-xl font-bold backdrop-blur-sm">
            <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 fill-current" />
            AVALIAÇÕES REAIS
            <Star className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2 fill-current" />
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-tight">
            <span className="bg-gradient-to-r from-brand-gold to-brand-blue bg-clip-text text-transparent">O que nossos clientes</span>{" "}
            <span className="block text-brand-dark mt-1 md:mt-2">estão dizendo</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-dark px-6 md:px-12 py-3 md:py-4 rounded-2xl shadow-gold backdrop-blur-sm border border-brand-gold-light/30 max-w-md mx-auto">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current text-brand-dark" />
              ))}
            </div>
            <span className="text-lg md:text-xl font-black">4.9/5 ⭐</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-premium transition-all duration-500 border-0 bg-gradient-to-br from-white to-brand-gold/5 overflow-hidden hover:scale-105">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} segurando Vita Flux`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {testimonial.verified && (
                  <Badge className="absolute top-4 right-4 bg-brand-gold/90 text-brand-dark border-0 backdrop-blur-sm font-bold">
                    ✅ Verificado
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-brand-gold" />
                    ))}
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="font-black text-brand-dark text-base md:text-lg group-hover:text-brand-gold transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs md:text-sm text-brand-silver">
                      {testimonial.age} • {testimonial.location}
                    </p>
                    <p className="text-xs text-brand-gold font-medium">
                      Usando há {testimonial.timeUsing}
                    </p>
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-6 h-6 text-brand-gold/20 absolute -top-1 -left-1 transform rotate-180" />
                    <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-all duration-300 italic pl-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-dark px-6 md:px-12 py-4 md:py-6 rounded-3xl shadow-gold backdrop-blur-sm border border-brand-gold-light/30">
            <span className="text-2xl md:text-3xl">🛡️</span>
            <span className="font-black text-lg md:text-xl tracking-wide">+17.000 CLIENTES SATISFEITOS</span>
            <span className="text-2xl md:text-3xl">🛡️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
