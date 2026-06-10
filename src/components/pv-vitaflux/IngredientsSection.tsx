import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ingredients = [
  { name: "Vitamina C", benefit: "Neutraliza as toxinas que se acumulam na próstata ao longo dos anos, combatendo a inflamação que alimenta o crescimento prostático.", image: "/pv-vitaflux/ingredients/vitamina-c.jpg", percentage: "96%", scientificName: "Ácido Ascórbico" },
  { name: "Vitamina A", benefit: "Regenera o tecido prostático danificado pelo acúmulo tóxico, restaurando o funcionamento saudável da glândula.", image: "/pv-vitaflux/ingredients/vitamina-a.jpg", percentage: "94%", scientificName: "Retinol" },
  { name: "Luteína", benefit: "Limpa o estresse oxidativo das células da próstata, removendo os resíduos tóxicos que prejudicam sua função.", image: "/pv-vitaflux/ingredients/luteina.jpg", percentage: "92%", scientificName: "Lutein" },
  { name: "Zeaxantina", benefit: "Potencializa a ação da luteína na desintoxicação prostática, protegendo a glândula em profundidade.", image: "/pv-vitaflux/ingredients/zeaxantina.jpg", percentage: "91%", scientificName: "Zeaxanthin" },
  { name: "Cobre", benefit: "Ativa as enzimas naturais do organismo responsáveis por eliminar toxinas e preservar a estrutura da próstata.", image: "/pv-vitaflux/ingredients/cobre.jpg", percentage: "93%", scientificName: "Cuprum" },
  { name: "Selênio", benefit: "O mineral mais poderoso no combate ao lodo tóxico prostático. Estimula o sistema de limpeza celular do organismo e é indispensável para qualquer homem que quer proteger sua próstata.", image: "/pv-vitaflux/ingredients/selenio.jpg", percentage: "98%", scientificName: "Selenium" }
];

const IngredientsSection = () => {

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-brand-dark via-brand-dark/98 to-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.2) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          backgroundSize: '400px 400px, 300px 300px'
        }}></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-gold/20 to-brand-blue/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-20">
          <Badge variant="outline" className="text-brand-gold border-brand-gold/30 bg-brand-gold/10 px-4 md:px-8 py-2 md:py-3 text-lg md:text-xl font-bold backdrop-blur-sm">
            <span className="mr-1 md:mr-2">⚡</span>
            VITA FLUX TECHNOLOGY
            <span className="ml-1 md:ml-2">⚡</span>
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark-foreground leading-tight">
            <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">6 Ingredientes</span>{" "}
            <span className="block text-brand-dark-foreground mt-1 md:mt-2">Cientificamente Comprovados</span>
          </h2>
          
          <p className="text-lg md:text-2xl text-brand-silver max-w-4xl mx-auto font-medium leading-relaxed">
            Cada ingrediente foi cuidadosamente selecionado por sua eficácia comprovada no suporte à saúde da próstata
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16 max-w-5xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <Card key={index} className="group hover:shadow-premium transition-all duration-500 border-brand-gold/30 overflow-hidden hover:scale-105 bg-brand-dark/80 backdrop-blur-sm relative">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mt-4 overflow-hidden rounded-full bg-brand-dark border-2 border-brand-gold/40">
                <img
                  src={`${ingredient.image}?v=2`}
                  alt={ingredient.name}
                  loading="lazy"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-brand-success to-brand-success/80 text-white px-2 py-0.5 rounded-full text-[10px] font-black shadow-lg">
                  {ingredient.percentage}
                </div>
              </div>
              <CardContent className="p-5 space-y-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="font-black text-brand-gold text-xl md:text-2xl leading-tight group-hover:text-brand-gold-light transition-colors duration-300 mb-1">
                    {ingredient.name}
                  </h3>
                  
                  <div className="text-xs text-brand-gold/70 font-medium italic mb-3">
                    {ingredient.scientificName}
                  </div>
                  
                  <p className="text-base md:text-lg text-white leading-relaxed font-medium">
                    {ingredient.benefit}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="bg-gradient-to-br from-white/10 to-brand-gold/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-brand-gold/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-brand-gold/20 to-brand-blue/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🔬</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-brand-gold">Estudos Científicos</h3>
                <p className="text-gray-300 font-medium">Comprovação internacional</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center border border-brand-gold/20">
                <div className="text-2xl font-black text-brand-gold">+3.300</div>
                <div className="text-xs text-gray-300">Estudos Clínicos</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center border border-brand-gold/20">
                <div className="text-2xl font-black text-brand-success">98%</div>
                <div className="text-xs text-gray-300">Taxa de Sucesso</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-brand-success/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-brand-gold/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-brand-success/20 to-brand-gold/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-brand-gold">Certificações</h3>
                <p className="text-gray-300 font-medium">Máxima qualidade garantida</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2">
                <span className="text-brand-gold">✓</span>
                <span className="text-sm font-medium text-gray-200">ANVISA Certificado</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2">
                <span className="text-brand-gold">✓</span>
                <span className="text-sm font-medium text-gray-200">GMP - Boas Práticas</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2">
                <span className="text-brand-gold">✓</span>
                <span className="text-sm font-medium text-gray-200">100% Natural</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 md:gap-4 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-dark px-6 md:px-12 py-4 md:py-6 rounded-3xl shadow-gold backdrop-blur-sm border border-brand-gold-light/30">
            <span className="text-2xl md:text-3xl animate-pulse">✨</span>
            <span className="font-black text-lg md:text-2xl tracking-wide">FÓRMULA 6 EM 1 COMPLETA</span>
            <span className="text-2xl md:text-3xl animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
