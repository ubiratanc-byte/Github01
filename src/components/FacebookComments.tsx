import { useEffect, useState } from "react";

const FacebookComments = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const commentsSection = document.getElementById('facebook-comments');
    if (commentsSection) {
      observer.observe(commentsSection);
    }

    return () => observer.disconnect();
  }, []);

  if (!isVisible) {
    return (
      <div id="facebook-comments" className="mt-12 bg-white border border-gray-200 rounded-lg p-6 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-gray-600">Carregando comentários...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center">f</div>
        <h3 className="text-xl font-bold text-gray-800">Comentários do Facebook</h3>
        <span className="text-sm text-gray-500">(847 comentários)</span>
      </div>

      <div className="space-y-6">
        {/* Comentário 1 */}
        <div className="flex gap-3 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/fb-joao.jpg" 
              alt="João Silva" 
              className="w-full h-full object-cover" 
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
            />
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm">João Silva</span>
                <span className="text-xs text-gray-500">• 2 horas</span>
              </div>
              <p className="text-sm"><p className="text-sm">Gente, não acreditava que fosse funcionar, mas depois de 3 semanas usando o Vita Flux, estou urinando normal pela primeira vez em anos! Não acordo mais de madrugada. Minha esposa está impressionada! 👏👏</p> Não acordo mais de madrugada. Minha esposa está impressionada! 👏👏</p>
              <div className="mt-3">
                <img 
                  src="/joao-comment-image.jpg" 
                  alt="Produto Vita Flux" 
                  className="w-full rounded-lg max-w-md"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <button className="hover:underline">👍 Curtir</button>
              <button className="hover:underline">Responder</button>
              <span>47 curtidas</span>
            </div>
          </div>
        </div>

        {/* Comentário 2 */}
        <div className="flex gap-3 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/fb-marcos.jpg" 
              alt="Marcos Roberto" 
              className="w-full h-full object-cover" 
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
            />
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm">Marcos Roberto</span>
                <span className="text-xs text-gray-500">• 4 horas</span>
              </div>
              <p className="text-sm"><p className="text-sm">Pessoal, comprei o Vita Flux há 6 semanas. Resultado: PSA baixou de 11,2 para 4,1! Médico cancelou minha cirurgia. Estou sem palavras! Obrigado Dr. Carlos! 🙏</p>. Resultado: PSA baixou de 11,2 para 4,1! Médico cancelou minha cirurgia. Estou sem palavras! Obrigado Dr. Carlos! 🙏</p>
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <button className="hover:underline">👍 Curtir</button>
              <button className="hover:underline">Responder</button>
              <span>89 curtidas</span>
            </div>
          </div>
        </div>

        {/* Comentário 3 */}
        <div className="flex gap-3 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/fb-carlos.jpg" 
              alt="Carlos Ferreira" 
              className="w-full h-full object-cover" 
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
            />
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm">Carlos Ferreira</span>
                <span className="text-xs text-gray-500">• 6 horas</span>
              </div>
              <p className="text-sm">Meus amigos, estava tomando Tamsulosina há 5 anos. Nada resolvia. <p className="text-sm">Meus amigos, estava tomando Tamsulosina há 5 anos. Nada resolvia. Com o Vita Flux em 1 mês voltei a ser homem! Jato forte, sem gotejamento. Recomendo para todos! 💪</p> Jato forte, sem gotejamento. Recomendo para todos! 💪</p>
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <button className="hover:underline">👍 Curtir</button>
              <button className="hover:underline">Responder</button>
              <span>156 curtidas</span>
            </div>
          </div>
        </div>

        {/* Comentário 4 */}
        <div className="flex gap-3 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/fb-antonio.jpg" 
              alt="Antônio Santos" 
              className="w-full h-full object-cover" 
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
            />
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm">Antônio Santos</span>
                <span className="text-xs text-gray-500">• 8 horas</span>
              </div>
              <p className="text-sm">Dr. Carlos, obrigado por salvar minha vida! Estava com próstata 3x maior que o normal. Hoje, após 2 meses, está completamente normal. Meu urologista ficou chocado! 🙏✨</p>
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <button className="hover:underline">👍 Curtir</button>
              <button className="hover:underline">Responder</button>
              <span>203 curtidas</span>
            </div>
          </div>
        </div>

        {/* Comentário 5 */}
        <div className="flex gap-3 border-b border-gray-100 pb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/fb-paulo.jpg" 
              alt="Paulo Henrique" 
              className="w-full h-full object-cover" 
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
            />
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm">Paulo Henrique</span>
                <span className="text-xs text-gray-500">• 12 horas</span>
              </div>
              <p className="text-sm">Pessoal, comprei 3 frascos. Em 45 dias minha vida mudou completamente! Não levanto mais de madrugada, jato forte, sem dor. Minha esposa voltou a dormir do meu lado! ❤️</p>
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <button className="hover:underline">👍 Curtir</button>
              <button className="hover:underline">Responder</button>
              <span>127 curtidas</span>
            </div>
          </div>
        </div>

        {/* Comentário 6 */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/fb-ricardo.jpg" 
              alt="Ricardo Silva" 
              className="w-full h-full object-cover" 
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
            />
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-sm">Ricardo Silva</span>
                <span className="text-xs text-gray-500">• 1 dia</span>
              </div>
              <p className="text-sm">Galera, estava descrente, mas resolvi tentar. Resultado: em 21 dias cancelei minha cirurgia! PSA normalizou, próstata diminuiu 67%. Médico disse que nunca viu nada igual! 🔥</p>
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <button className="hover:underline">👍 Curtir</button>
              <button className="hover:underline">Responder</button>
              <span>291 curtidas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookComments;