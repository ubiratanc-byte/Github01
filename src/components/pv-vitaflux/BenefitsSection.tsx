import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Heart, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Reduz a Vontade Frequente de Urinar",
      description: "Reduz a próstata e consequentemente para de pressionar a bexiga, eliminando a vontade constante de urinar.",
      image: "🚽"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Aumenta a Força do Jato Urinário",
      description: "Reduz em até 58,1% a inflamação da próstata, fazendo o canal da uretra voltar ao normal. Aumenta o jato urinário e combate sangramentos.",
      image: "💪"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Acaba com a Próstata Inflamada",
      description: "Alivia os sintomas da Hiperplasia Prostática, fazendo a próstata desinflamar desde a primeira semana de uso diário.",
      image: "❤️"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Elimina Infecções",
      description: "Combate infecções urinárias e outras complicações relacionadas à próstata de forma natural e eficaz.",
      image: "🛡️"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-tight">
            <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">Livre de exames invasivos</span>{" "}
            <span className="block text-brand-dark mt-1 md:mt-2">e consultas embaraçosas</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-2xl text-brand-silver font-medium leading-relaxed">
              Conheça todos os benefícios do{" "}
              <span className="font-black bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">Vita Flux</span>{" "}
              e veja como ele pode transformar sua vida.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-premium transition-all duration-500 border-0 bg-gradient-to-br from-white to-brand-dark/2 overflow-hidden hover:scale-105">
              <CardContent className="p-6 md:p-10 text-center space-y-6 md:space-y-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl md:text-7xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.image}
                  </div>
                  
                  <div className="bg-gradient-to-br from-brand-gold/15 to-brand-blue/10 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:from-brand-gold/25 group-hover:to-brand-blue/20 transition-all duration-300 shadow-soft">
                    <div className="text-brand-gold group-hover:text-brand-blue transition-all duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-2xl font-black text-brand-dark group-hover:text-brand-gold transition-all duration-300 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-brand-silver text-sm md:text-base leading-relaxed group-hover:text-foreground transition-all duration-300">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
