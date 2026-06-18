import { useEffect } from "react";

/**
 * Página "Elementor-friendly" da PV Vita Flux.
 * - Sem Tailwind (todo o CSS está no <style> abaixo)
 * - Sem componentes React (Cards/Accordion etc.)
 * - FAQ com <details>/<summary> nativos
 * - Imagens com caminhos absolutos em /public
 *
 * Pronta para ser capturada pelo CloneWebX e colada no Elementor.
 */
const PVExport = () => {
  useEffect(() => {
    document.title = "Vita Flux";
  }, []);

  const benefits = [
    "Acaba com a Próstata Inflamada",
    "Elimina Infecções",
    "Aumenta a força do jato urinário",
    "Totalmente seguro e natural",
    "Reduz a vontade frequente de urinar",
    "Fórmula 6 em 1 completa",
    "O único com extrato de Plantas Amazônicas",
    "Devolve a Virilidade masculina",
  ];

  const cards = [
    { emoji: "🚽", title: "Reduz a Vontade Frequente de Urinar", text: "Reduz a próstata e consequentemente para de pressionar a bexiga, eliminando a vontade constante de urinar." },
    { emoji: "💪", title: "Aumenta a Força do Jato Urinário", text: "Reduz em até 58,1% a inflamação da próstata, fazendo o canal da uretra voltar ao normal. Aumenta o jato urinário e combate sangramentos." },
    { emoji: "❤️", title: "Acaba com a Próstata Inflamada", text: "Alivia os sintomas da Hiperplasia Prostática, fazendo a próstata desinflamar desde a primeira semana de uso diário." },
    { emoji: "🛡️", title: "Elimina Infecções", text: "Combate infecções urinárias e outras complicações relacionadas à próstata de forma natural e eficaz." },
  ];

  const ingredients = [
    { name: "Vitamina C", sci: "Ácido Ascórbico", pct: "96%", img: "/pv-vitaflux/ingredients/vitamina-c.jpg", text: "Neutraliza as toxinas que se acumulam na próstata ao longo dos anos, combatendo a inflamação que alimenta o crescimento prostático." },
    { name: "Vitamina A", sci: "Retinol", pct: "94%", img: "/pv-vitaflux/ingredients/vitamina-a.jpg", text: "Regenera o tecido prostático danificado pelo acúmulo tóxico, restaurando o funcionamento saudável da glândula." },
    { name: "Luteína", sci: "Lutein", pct: "92%", img: "/pv-vitaflux/ingredients/luteina.jpg", text: "Limpa o estresse oxidativo das células da próstata, removendo os resíduos tóxicos que prejudicam sua função." },
    { name: "Zeaxantina", sci: "Zeaxanthin", pct: "91%", img: "/pv-vitaflux/ingredients/zeaxantina.jpg", text: "Potencializa a ação da luteína na desintoxicação prostática, protegendo a glândula em profundidade." },
    { name: "Cobre", sci: "Cuprum", pct: "93%", img: "/pv-vitaflux/ingredients/cobre.jpg", text: "Ativa as enzimas naturais do organismo responsáveis por eliminar toxinas e preservar a estrutura da próstata." },
    { name: "Selênio", sci: "Selenium", pct: "98%", img: "/pv-vitaflux/ingredients/selenio.jpg", text: "O mineral mais poderoso no combate ao lodo tóxico prostático. Estimula o sistema de limpeza celular do organismo e é indispensável para qualquer homem que quer proteger sua próstata." },
  ];

  const testimonials = [
    { name: "Marcelo Santos", age: "52 anos", location: "São Paulo - SP", time: "3 meses", img: "/pv-vitaflux/client-marcelo.webp", text: "Eu acordava 4 ou 5 vezes toda noite pra ir ao banheiro, e meu jato tava fraco demais. Achava que era normal da idade, mas depois que comecei a usar o Vita Flux, tudo mudou. Voltei a dormir a noite inteira, o fluxo tá forte de novo e até meu desejo melhorou. Me sinto com 30 anos outra vez. Esse produto realmente faz o que promete!" },
    { name: "Ricardo Oliveira", age: "51 anos", location: "Rio de Janeiro - RJ", time: "4 meses", img: "/pv-vitaflux/client-ricardo.webp", text: "Eu sempre fui muito ativo, mas nos últimos anos comecei a sentir minha energia e meu desempenho caírem. Além disso, toda hora dava vontade de urinar, principalmente à noite. O Vita Flux mudou tudo. Hoje acordo disposto, o jato voltou ao normal e até minha esposa percebeu a diferença." },
    { name: "João Carlos", age: "64 anos", location: "Porto Alegre - RS", time: "5 semanas", img: "/pv-vitaflux/client-joao.webp", text: "Depois dos 60 eu pensei que minha vida sexual tinha acabado. Acordava a noite inteira, o jato fraco, zero disposição. Comecei a usar o Vita Flux por curiosidade e me surpreendi. Dormindo bem, urino sem dor e até na cama voltei a ser o homem que eu era. Recomendo de olhos fechados!" },
    { name: "Márcio Mattos", age: "54 anos", location: "Belo Horizonte - MG", time: "2 meses", img: "/pv-vitaflux/client-marcio.webp", text: "Eu tava quase marcando cirurgia por causa da próstata aumentada. Sentia dor, ardência e vivia cansado. Um amigo me indicou o Vita Flux e em menos de 15 dias já senti melhora. Hoje urino normalmente, sem dor e com muito mais vontade e energia." },
  ];

  const offers = [
    { bottles: 1, original: 297, sale: 197, savings: 100, parcel: "20,37", img: "/pv-vitaflux/vitaflux-single.webp", visual: "1 Frasco", desc: "Experimente por 1 mês", link: "https://ev.braip.com/campanhas/cpa/cam8md4n8/?split=12" },
    { bottles: 3, original: 497, sale: 297, savings: 200, parcel: "30,70", img: "/pv-vitaflux/vitaflux-kit-3.webp", visual: "3 Frascos", desc: "Tratamento recomendado", promo: "2 + 1 Grátis", popular: true, link: "https://ev.braip.com/campanhas/cpa/camm7ezj5/?split=12" },
    { bottles: 5, original: 697, sale: 397, savings: 300, parcel: "41,06", img: "/pv-vitaflux/vitaflux-kit-5.webp", visual: "5 Frascos", desc: "Melhor custo benefício", promo: "3 + 2 Grátis", link: "https://ev.braip.com/campanhas/cpa/camgmryo7/?split=12" },
    { bottles: 12, original: 1297, sale: 697, savings: 600, parcel: "72,08", img: "/pv-vitaflux/vitaflux-kit-12.webp", visual: "12 Frascos", desc: "Tratamento completo", promo: "10 + 2 Grátis", best: true, link: "https://ev.braip.com/campanhas/cpa/cam9164np/?split=12" },
  ];

  const faqs = [
    { q: "O que é o Vita Flux?", a: "Vita Flux é um suplemento natural desenvolvido especificamente para homens que desejam melhorar sua performance, energia e vitalidade. Formulado com ingredientes cientificamente comprovados." },
    { q: "Como devo tomar o Vita Flux?", a: "Recomendamos tomar 12 gotas por dia, preferencialmente pela manhã com o estômago vazio ou conforme orientação médica. Para melhores resultados, use consistentemente por pelo menos 90 dias." },
    { q: "Quanto tempo leva para ver resultados?", a: "Os primeiros resultados podem ser sentidos entre 7 a 15 dias de uso regular. Para resultados mais significativos e duradouros, recomendamos o uso por pelo menos 90 dias." },
    { q: "O produto tem efeitos colaterais?", a: "Vita Flux é feito com ingredientes naturais e é seguro para a maioria dos homens. Porém, se você tem alguma condição médica ou toma medicamentos, consulte seu médico antes do uso." },
    { q: "Vocês oferecem garantia?", a: "Sim! Oferecemos 90 dias de garantia incondicional. Se não ficar satisfeito com os resultados, devolvemos 100% do seu dinheiro, sem perguntas." },
    { q: "Como funciona a entrega?", a: "Entregamos para todo o Brasil via Correios ou transportadoras. O prazo varia de 5 a 15 dias úteis dependendo da sua região. Você recebe o código de rastreamento por email." },
    { q: "É seguro comprar online?", a: "Absolutamente! Nosso site possui certificado SSL e trabalhamos apenas com processadores de pagamento seguros. Seus dados estão totalmente protegidos." },
    { q: "Posso tomar junto com outros suplementos?", a: "Geralmente sim, mas recomendamos consultar um profissional de saúde antes de combinar com outros suplementos ou medicamentos para evitar interações." },
  ];

  return (
    <div className="vfx-export">
      <style>{CSS}</style>

      {/* HEADER */}
      <header className="vfx-header">
        <div className="vfx-container vfx-header-inner">
          <h1 className="vfx-logo">
            <span className="vfx-gold">Vita</span> <span className="vfx-blue">Flux</span>
          </h1>
          <p className="vfx-logo-sub">SUPLEMENTO ALIMENTAR</p>
        </div>
      </header>

      {/* HERO */}
      <section className="vfx-hero">
        <div className="vfx-container vfx-hero-grid">
          <div className="vfx-hero-text">
            <h2 className="vfx-hero-title">
              <span className="vfx-gold">Fórmula 6 em 1</span> que combate os problemas relacionados à <span className="vfx-blue">Próstata</span>
              <span className="vfx-hero-sub">sem complicações.</span>
            </h2>
            <p className="vfx-hero-lead">
              <strong className="vfx-gold">Vita Flux</strong> com 6 ingredientes naturais cientificamente comprovados
            </p>
            <ul className="vfx-benefits-list">
              {benefits.map((b, i) => (
                <li key={i}>
                  <span className="vfx-check">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="vfx-anvisa">
              <span className="vfx-check vfx-check-lg">✓</span>
              <div>
                <div className="vfx-anvisa-title">APROVADO PELA ANVISA</div>
                <div className="vfx-anvisa-reg">Reg. 25351062763202632</div>
              </div>
            </div>
            <a href="#ofertas" className="vfx-cta vfx-cta-gold">🎯 CONHECER TODAS AS OFERTAS</a>
            <div className="vfx-trust-row">
              <div className="vfx-trust"><span className="vfx-dot"></span>Compra Segura</div>
              <div className="vfx-trust"><span className="vfx-dot"></span>Satisfação Garantida</div>
              <div className="vfx-trust"><span className="vfx-dot"></span>Privacidade Protegida</div>
            </div>
          </div>
          <div className="vfx-hero-img-wrap">
            <img src="/pv-vitaflux/vitaflux-hero.webp" alt="Vita Flux - Suplemento Alimentar" className="vfx-hero-img" />
            <div className="vfx-hero-badge">
              <span className="vfx-hero-badge-small">FÓRMULA</span>
              <span className="vfx-hero-badge-big">6 EM 1</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="vfx-section vfx-light">
        <div className="vfx-container">
          <h2 className="vfx-section-title vfx-dark-text">
            <span className="vfx-gold">Livre de exames invasivos</span>
            <span className="vfx-block">e consultas embaraçosas</span>
          </h2>
          <p className="vfx-section-lead">
            Conheça todos os benefícios do <strong className="vfx-gold">Vita Flux</strong> e veja como ele pode transformar sua vida.
          </p>
          <div className="vfx-grid-4">
            {cards.map((c, i) => (
              <div key={i} className="vfx-card-benefit">
                <div className="vfx-card-emoji">{c.emoji}</div>
                <h3 className="vfx-card-title">{c.title}</h3>
                <p className="vfx-card-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="vfx-section vfx-dark">
        <div className="vfx-container">
          <div className="vfx-badge-pill">⚡ VITA FLUX TECHNOLOGY ⚡</div>
          <h2 className="vfx-section-title vfx-light-text">
            <span className="vfx-gold">6 Ingredientes</span>
            <span className="vfx-block">Cientificamente Comprovados</span>
          </h2>
          <p className="vfx-section-lead vfx-silver">
            Cada ingrediente foi cuidadosamente selecionado por sua eficácia comprovada no suporte à saúde da próstata
          </p>
          <div className="vfx-grid-3">
            {ingredients.map((ing, i) => (
              <div key={i} className="vfx-card-ing">
                <div className="vfx-ing-circle">
                  <img src={ing.img} alt={ing.name} loading="lazy" />
                  <span className="vfx-ing-pct">{ing.pct}</span>
                </div>
                <h3 className="vfx-ing-name">{ing.name}</h3>
                <div className="vfx-ing-sci">{ing.sci}</div>
                <p className="vfx-ing-text">{ing.text}</p>
              </div>
            ))}
          </div>
          <div className="vfx-cert-row">
            <div className="vfx-cert-card">
              <h3 className="vfx-gold">🔬 Estudos Científicos</h3>
              <p>Comprovação internacional</p>
              <div className="vfx-cert-stats">
                <div><strong>+3.300</strong><span>Estudos Clínicos</span></div>
                <div><strong className="vfx-success">98%</strong><span>Taxa de Sucesso</span></div>
              </div>
            </div>
            <div className="vfx-cert-card">
              <h3 className="vfx-gold">🏆 Certificações</h3>
              <p>Máxima qualidade garantida</p>
              <ul className="vfx-cert-list">
                <li><span className="vfx-gold">✓</span> ANVISA Certificado</li>
                <li><span className="vfx-gold">✓</span> GMP - Boas Práticas</li>
                <li><span className="vfx-gold">✓</span> 100% Natural</li>
              </ul>
            </div>
          </div>
          <div className="vfx-banner-gold">✨ FÓRMULA 6 EM 1 COMPLETA ✨</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="vfx-section vfx-light">
        <div className="vfx-container">
          <div className="vfx-badge-pill vfx-badge-light">⭐ AVALIAÇÕES REAIS ⭐</div>
          <h2 className="vfx-section-title vfx-dark-text">
            <span className="vfx-gold">O que nossos clientes</span>
            <span className="vfx-block">estão dizendo</span>
          </h2>
          <div className="vfx-rating-pill">★★★★★ 4.9/5</div>
          <div className="vfx-grid-4">
            {testimonials.map((t, i) => (
              <div key={i} className="vfx-card-test">
                <div className="vfx-test-img-wrap">
                  <img src={t.img} alt={t.name} loading="lazy" />
                  <span className="vfx-test-verified">✅ Verificado</span>
                </div>
                <div className="vfx-test-body">
                  <div className="vfx-test-stars">★★★★★</div>
                  <h4 className="vfx-test-name">{t.name}</h4>
                  <p className="vfx-test-meta">{t.age} • {t.location}</p>
                  <p className="vfx-test-time">Usando há {t.time}</p>
                  <p className="vfx-test-quote">"{t.text}"</p>
                </div>
              </div>
            ))}
          </div>
          <div className="vfx-banner-gold">🛡️ +17.000 CLIENTES SATISFEITOS 🛡️</div>
        </div>
      </section>

      {/* PRICING */}
      <section id="ofertas" className="vfx-section vfx-dark">
        <div className="vfx-container">
          <h2 className="vfx-section-title vfx-light-text">
            <span className="vfx-blue">Ofertas Especiais</span>
            <span className="vfx-block">Por Tempo Limitado</span>
          </h2>
          <div className="vfx-shipping-banner">🚚 FRETE GRÁTIS PARA TODO BRASIL</div>
          <div className="vfx-grid-4 vfx-grid-pricing">
            {offers.map((o, i) => (
              <div key={i} className={`vfx-card-price ${o.popular ? "vfx-popular" : ""} ${o.best ? "vfx-best" : ""}`}>
                {o.popular && <div className="vfx-price-badge vfx-badge-blue">⭐ MAIS VENDIDO ⭐</div>}
                {o.best && <div className="vfx-price-badge vfx-badge-green">💰 MAIOR ECONOMIA 💰</div>}
                <div className="vfx-price-img-wrap">
                  <img src={o.img} alt={`Kit ${o.bottles} frascos`} loading="lazy" />
                </div>
                <h3 className="vfx-price-title">{o.visual}</h3>
                {o.promo && <div className="vfx-promo-pill">🎁 {o.promo}</div>}
                <p className="vfx-price-desc">{o.desc}</p>
                <div className="vfx-price-strike">
                  <span className="vfx-strike"> {o.original}</span>
                  <span className="vfx-discount-pill">-{Math.round(((o.original - o.sale) / o.original) * 100)}%</span>
                </div>
                <div className="vfx-price-main">12x  {o.parcel}</div>
                <div className="vfx-price-cash">Ou à vista por: <strong> {o.sale.toFixed(2).replace(".", ",")}</strong></div>
                <div className="vfx-price-save">💰 Economize R$ {o.savings}</div>
                {o.bottles > 1 && <div className="vfx-price-unit"> {Math.round(o.sale / o.bottles)}/frasco</div>}
                <a href={o.link} target="_blank" rel="noopener noreferrer" className="vfx-cta vfx-cta-green">🛒 COMPRAR AGORA</a>
                <ul className="vfx-price-benefits">
                  <li><span className="vfx-success">✓</span> Frete Grátis para todo Brasil</li>
                  <li><span className="vfx-success">✓</span> Garantia de 90 dias</li>
                  <li><span className="vfx-success">✓</span> Suporte especializado</li>
                </ul>
              </div>
            ))}
          </div>

          {/* GUARANTEE */}
          <div className="vfx-guarantee">
            <div className="vfx-guarantee-head">
              <span className="vfx-shield">🛡️</span>
              <div>
                <div className="vfx-gold vfx-guarantee-pre">GARANTIA BLINDADA</div>
                <h3 className="vfx-guarantee-title">90 Dias de Garantia Incondicional</h3>
              </div>
            </div>
            <p className="vfx-guarantee-text">
              Compre com <strong>total segurança</strong>. Se não obtiver os resultados esperados, devolvemos <strong>100% do valor investido</strong> sem questionamentos.
            </p>
            <div className="vfx-grid-3">
              <div className="vfx-guarantee-card">
                <div className="vfx-guarantee-icon">💳</div>
                <h4>Reembolso Integral</h4>
                <p>Devolução de 100% do valor pago em até 90 dias corridos</p>
              </div>
              <div className="vfx-guarantee-card">
                <div className="vfx-guarantee-icon">⏱️</div>
                <h4>Processamento Rápido</h4>
                <p>Solicitação processada em até 24 horas úteis</p>
              </div>
              <div className="vfx-guarantee-card">
                <div className="vfx-guarantee-icon">✅</div>
                <h4>Processo Simples</h4>
                <p>Sem burocracias ou perguntas constrangedoras</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vfx-section vfx-light">
        <div className="vfx-container">
          <h2 className="vfx-section-title vfx-faq-title">Perguntas Frequentes</h2>
          <p className="vfx-section-lead">Tire suas dúvidas sobre o Vita Flux</p>
          <div className="vfx-faq">
            {faqs.map((f, i) => (
              <details key={i} className="vfx-faq-item">
                <summary>{f.q}</summary>
                <div className="vfx-faq-answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="vfx-footer">
        <div className="vfx-container">
          <h3 className="vfx-logo">
            <span className="vfx-gold">Vita</span> <span className="vfx-blue">Flux</span>
          </h3>
          <p className="vfx-logo-sub">SUPLEMENTO ALIMENTAR</p>
          <p className="vfx-footer-text">
            Fórmula 6 em 1 com ingredientes naturais cientificamente comprovados para o suporte à saúde da próstata.
          </p>
          <div className="vfx-footer-bottom">
            <p>© 2025 <strong className="vfx-gold">Vita Flux</strong>. Todos os direitos reservados.</p>
            <div className="vfx-footer-links">
              <a href="#">Termos de Uso</a>
              <a href="#">Política de Privacidade</a>
              <a href="mailto:synecaps@gmail.com">SUPORTE - synecaps@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* =========================================================================
   CSS PURO — sem Tailwind. Tudo escopado em .vfx-export pra não vazar.
   ========================================================================= */
const CSS = `
.vfx-export, .vfx-export * { box-sizing: border-box; }
.vfx-export {
  font-family: 'Open Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #fff;
  background: #0f0f0f;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.vfx-export img { max-width: 100%; height: auto; display: block; }
.vfx-export a { color: inherit; text-decoration: none; }
.vfx-export ul { list-style: none; padding: 0; margin: 0; }

.vfx-container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }

.vfx-gold { color: #d4af37; }
.vfx-blue { color: #3b82f6; }
.vfx-success { color: #10b981; }
.vfx-silver { color: #9ca3af; }

/* ---------- HEADER ---------- */
.vfx-header { background: #0f0f0f; border-bottom: 1px solid rgba(212,175,55,0.2); padding: 18px 0; }
.vfx-header-inner { text-align: center; }
.vfx-logo { font-size: 28px; font-weight: 900; margin: 0; letter-spacing: -0.5px; }
.vfx-logo-sub { color: rgba(212,175,55,0.85); font-size: 12px; font-weight: 700; letter-spacing: 2px; margin: 4px 0 0; }

/* ---------- HERO ---------- */
.vfx-hero { background: #0f0f0f; padding: 32px 0 48px; }
.vfx-hero-grid { display: flex; flex-direction: column; gap: 32px; align-items: center; }
.vfx-hero-text { width: 100%; text-align: center; order: 2; }
.vfx-hero-img-wrap { position: relative; width: 100%; max-width: 460px; order: 1; }
.vfx-hero-img { filter: drop-shadow(0 10px 30px rgba(0,0,0,0.4)); }
.vfx-hero-badge {
  position: absolute; top: 12px; right: 8px;
  background: linear-gradient(135deg, #d4af37, #e6c44d);
  color: #0f0f0f; padding: 8px 14px; border-radius: 14px;
  font-weight: 900; text-align: center;
  box-shadow: 0 8px 20px rgba(212,175,55,0.4);
}
.vfx-hero-badge-small { display: block; font-size: 10px; font-weight: 700; opacity: 0.85; }
.vfx-hero-badge-big { display: block; font-size: 18px; }

.vfx-hero-title { font-size: 32px; font-weight: 900; line-height: 1.1; margin: 0 0 16px; letter-spacing: -0.5px; }
.vfx-hero-sub { display: block; color: #9ca3af; font-size: 20px; font-weight: 700; margin-top: 8px; }
.vfx-hero-lead { font-size: 17px; color: #9ca3af; margin: 0 0 24px; }

.vfx-benefits-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
.vfx-benefits-list li { display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 16px; font-weight: 600; }
.vfx-check {
  display: inline-flex; align-items: center; justify-content: center;
  width: 26px; height: 26px; border-radius: 8px;
  background: linear-gradient(135deg, #d4af37, #e6c44d);
  color: #0f0f0f; font-weight: 900; flex-shrink: 0; font-size: 14px;
}
.vfx-check-lg { width: 36px; height: 36px; border-radius: 50%; font-size: 18px; }

.vfx-anvisa {
  display: flex; align-items: center; gap: 12px;
  background: rgba(212,175,55,0.08);
  border: 2px solid rgba(212,175,55,0.4);
  border-radius: 14px; padding: 12px 16px; margin: 0 auto 20px;
  max-width: 480px; text-align: left;
}
.vfx-anvisa-title { font-size: 12px; font-weight: 800; color: #d4af37; letter-spacing: 1.5px; }
.vfx-anvisa-reg { font-family: monospace; font-size: 14px; font-weight: 600; }

.vfx-cta {
  display: inline-block; padding: 18px 32px; border-radius: 14px;
  font-weight: 900; font-size: 17px; letter-spacing: 0.5px;
  text-align: center; cursor: pointer; transition: transform .2s;
  width: 100%; max-width: 480px;
}
.vfx-cta:hover { transform: translateY(-2px); }
.vfx-cta-gold {
  background: linear-gradient(135deg, #d4af37, #e6c44d);
  color: #0f0f0f;
  box-shadow: 0 12px 30px rgba(212,175,55,0.35);
}
.vfx-cta-green {
  background: linear-gradient(135deg, #10b981, #059669);
  color: #fff;
  box-shadow: 0 12px 30px rgba(16,185,129,0.35);
}

.vfx-trust-row { display: grid; grid-template-columns: 1fr; gap: 8px; margin-top: 20px; }
.vfx-trust {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(212,175,55,0.2);
  border-radius: 12px; padding: 10px 14px;
  font-size: 13px; color: #9ca3af; font-weight: 500;
}
.vfx-dot { width: 8px; height: 8px; border-radius: 50%; background: #d4af37; }

/* ---------- SECTIONS GENÉRICAS ---------- */
.vfx-section { padding: 56px 0; }
.vfx-light { background: #f8fafc; color: #1a1a1a; }
.vfx-dark { background: #0f0f0f; color: #fff; }
.vfx-dark-text { color: #1a1a1a; }
.vfx-light-text { color: #fff; }

.vfx-section-title { font-size: 30px; font-weight: 900; line-height: 1.15; text-align: center; margin: 0 0 16px; letter-spacing: -0.5px; }
.vfx-block { display: block; margin-top: 4px; }
.vfx-section-lead { font-size: 17px; text-align: center; max-width: 720px; margin: 0 auto 36px; color: #6b7280; }
.vfx-dark .vfx-section-lead { color: #9ca3af; }

.vfx-badge-pill {
  display: inline-block; padding: 10px 24px; border-radius: 999px;
  background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.4);
  color: #d4af37; font-weight: 800; font-size: 14px;
  margin: 0 auto 20px; display: block; width: fit-content;
}
.vfx-badge-light { background: rgba(212,175,55,0.1); }

/* ---------- GRIDS ---------- */
.vfx-grid-3, .vfx-grid-4 { display: grid; grid-template-columns: 1fr; gap: 16px; }

/* ---------- BENEFIT CARDS ---------- */
.vfx-card-benefit {
  background: #fff; border-radius: 18px; padding: 28px 20px;
  text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
.vfx-card-emoji { font-size: 56px; margin-bottom: 12px; }
.vfx-card-title { font-size: 18px; font-weight: 900; color: #1a1a1a; margin: 12px 0 8px; line-height: 1.25; }
.vfx-card-text { font-size: 14px; color: #6b7280; line-height: 1.6; margin: 0; }

/* ---------- INGREDIENT CARDS ---------- */
.vfx-card-ing {
  background: rgba(0,0,0,0.5); border: 1px solid rgba(212,175,55,0.3);
  border-radius: 18px; padding: 20px; text-align: center;
}
.vfx-ing-circle {
  position: relative; width: 130px; height: 130px;
  margin: 0 auto 14px; border-radius: 50%; overflow: hidden;
  border: 2px solid rgba(212,175,55,0.4);
}
.vfx-ing-circle img { width: 100%; height: 100%; object-fit: cover; }
.vfx-ing-pct {
  position: absolute; top: 0; right: 0;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #fff; padding: 3px 8px; border-radius: 999px;
  font-size: 11px; font-weight: 900;
}
.vfx-ing-name { font-size: 22px; font-weight: 900; color: #d4af37; margin: 0; }
.vfx-ing-sci { font-size: 12px; font-style: italic; color: rgba(212,175,55,0.7); margin: 2px 0 10px; }
.vfx-ing-text { font-size: 15px; color: #fff; line-height: 1.55; margin: 0; }

/* ---------- CERT ROW ---------- */
.vfx-cert-row { display: grid; grid-template-columns: 1fr; gap: 16px; margin: 36px 0 24px; }
.vfx-cert-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(212,175,55,0.2);
  border-radius: 20px; padding: 22px;
}
.vfx-cert-card h3 { font-size: 20px; font-weight: 900; margin: 0; }
.vfx-cert-card p { color: #9ca3af; font-weight: 500; margin: 4px 0 14px; }
.vfx-cert-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.vfx-cert-stats > div {
  background: rgba(255,255,255,0.08); border: 1px solid rgba(212,175,55,0.2);
  border-radius: 12px; padding: 12px; text-align: center;
}
.vfx-cert-stats strong { display: block; font-size: 22px; font-weight: 900; color: #d4af37; }
.vfx-cert-stats span { font-size: 11px; color: #9ca3af; }
.vfx-cert-list li {
  background: rgba(255,255,255,0.08); border-radius: 10px;
  padding: 8px 12px; margin-bottom: 6px; font-size: 14px;
}

.vfx-banner-gold {
  background: linear-gradient(135deg, #d4af37, #e6c44d);
  color: #0f0f0f; padding: 16px 24px; border-radius: 999px;
  font-weight: 900; font-size: 16px; text-align: center;
  max-width: 600px; margin: 24px auto 0;
  box-shadow: 0 10px 30px rgba(212,175,55,0.35);
}

/* ---------- TESTIMONIALS ---------- */
.vfx-rating-pill {
  display: block; width: fit-content; margin: 0 auto 24px;
  background: linear-gradient(135deg, #d4af37, #e6c44d);
  color: #0f0f0f; padding: 10px 24px; border-radius: 999px;
  font-weight: 900; font-size: 18px;
  box-shadow: 0 8px 20px rgba(212,175,55,0.3);
}
.vfx-card-test {
  background: #fff; border-radius: 18px; overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
.vfx-test-img-wrap { position: relative; width: 100%; aspect-ratio: 3/4; overflow: hidden; }
.vfx-test-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
.vfx-test-verified {
  position: absolute; top: 12px; right: 12px;
  background: rgba(212,175,55,0.95); color: #0f0f0f;
  padding: 4px 10px; border-radius: 999px;
  font-size: 11px; font-weight: 800;
}
.vfx-test-body { padding: 16px; }
.vfx-test-stars { color: #d4af37; font-size: 15px; margin-bottom: 6px; }
.vfx-test-name { font-size: 17px; font-weight: 900; color: #1a1a1a; margin: 0; }
.vfx-test-meta { font-size: 12px; color: #9ca3af; margin: 2px 0; }
.vfx-test-time { font-size: 11px; color: #d4af37; font-weight: 700; margin: 0 0 10px; }
.vfx-test-quote { font-size: 13px; color: #4b5563; line-height: 1.55; font-style: italic; margin: 0; }

/* ---------- PRICING ---------- */
.vfx-shipping-banner {
  background: linear-gradient(135deg, #10b981, #059669);
  color: #fff; padding: 14px 24px; border-radius: 16px;
  font-weight: 900; font-size: 16px; text-align: center;
  max-width: 600px; margin: 0 auto 36px;
}
.vfx-grid-pricing { gap: 24px; margin-bottom: 36px; }
.vfx-card-price {
  background: #fff; color: #1a1a1a;
  border: 2px solid #e5e7eb; border-radius: 20px;
  padding: 28px 20px; text-align: center; position: relative;
}
.vfx-popular { border-color: #3b82f6; box-shadow: 0 12px 35px rgba(59,130,246,0.2); }
.vfx-best { border-color: #10b981; box-shadow: 0 12px 35px rgba(16,185,129,0.2); }
.vfx-price-badge {
  position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
  padding: 6px 16px; border-radius: 999px;
  color: #fff; font-weight: 900; font-size: 12px;
  white-space: nowrap;
}
.vfx-badge-blue { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.vfx-badge-green { background: linear-gradient(135deg, #10b981, #059669); }
.vfx-price-img-wrap { width: 100%; max-width: 200px; margin: 0 auto 12px; }
.vfx-price-title { font-size: 24px; font-weight: 900; margin: 0 0 10px; }
.vfx-promo-pill {
  display: inline-block; background: linear-gradient(135deg, #ef4444, #dc2626);
  color: #fff; padding: 4px 14px; border-radius: 999px;
  font-size: 13px; font-weight: 800; margin-bottom: 8px;
}
.vfx-price-desc { color: #9ca3af; font-size: 14px; margin: 0 0 14px; font-weight: 500; }
.vfx-price-strike { display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 6px; }
.vfx-strike { text-decoration: line-through; color: #9ca3af; font-size: 16px; }
.vfx-discount-pill { background: #ef4444; color: #fff; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 900; }
.vfx-price-main { font-size: 36px; font-weight: 900; color: #059669; letter-spacing: -1px; line-height: 1; margin-bottom: 8px; }
.vfx-price-cash { font-size: 14px; color: #6b7280; margin-bottom: 6px; }
.vfx-price-cash strong { color: #1a1a1a; }
.vfx-price-save { font-size: 15px; color: #3b82f6; font-weight: 800; margin-bottom: 6px; }
.vfx-price-unit {
  display: inline-block; background: rgba(0,0,0,0.05);
  padding: 4px 10px; border-radius: 8px;
  font-size: 12px; color: #6b7280; margin-bottom: 16px;
}
.vfx-price-benefits { margin-top: 16px; text-align: left; }
.vfx-price-benefits li { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #6b7280; margin-bottom: 8px; }

/* ---------- GUARANTEE ---------- */
.vfx-guarantee {
  background: linear-gradient(135deg, #0f0f0f, #1a1612, #0f0f0f);
  border: 1px solid rgba(212,175,55,0.25);
  border-radius: 24px; padding: 32px 20px;
  margin-top: 20px; color: #fff;
}
.vfx-guarantee-head { display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; margin-bottom: 18px; }
.vfx-shield { font-size: 48px; }
.vfx-guarantee-pre { font-size: 13px; font-weight: 900; letter-spacing: 1.5px; }
.vfx-guarantee-title { font-size: 26px; font-weight: 900; color: #d4af37; margin: 4px 0; line-height: 1.2; }
.vfx-guarantee-text { font-size: 16px; text-align: center; max-width: 720px; margin: 0 auto 28px; line-height: 1.6; }
.vfx-guarantee-card {
  background: rgba(255,255,255,0.06); border: 1px solid rgba(212,175,55,0.2);
  border-radius: 14px; padding: 20px; text-align: center;
}
.vfx-guarantee-icon { font-size: 36px; margin-bottom: 10px; }
.vfx-guarantee-card h4 { font-size: 17px; font-weight: 900; margin: 0 0 8px; color: #fff; }
.vfx-guarantee-card p { font-size: 13px; color: rgba(255,255,255,0.75); margin: 0; line-height: 1.5; }

/* ---------- FAQ ---------- */
.vfx-faq-title { color: #d4af37; }
.vfx-faq { max-width: 820px; margin: 32px auto 0; display: flex; flex-direction: column; gap: 12px; }
.vfx-faq-item {
  background: #fff; border: 1px solid #e5e7eb;
  border-radius: 12px; padding: 4px 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  transition: box-shadow .2s;
}
.vfx-faq-item[open] { box-shadow: 0 4px 14px rgba(0,0,0,0.08); }
.vfx-faq-item summary {
  cursor: pointer; padding: 16px 30px 16px 0; position: relative;
  font-size: 16px; font-weight: 700; color: #1a1a1a;
  list-style: none; line-height: 1.4;
}
.vfx-faq-item summary::-webkit-details-marker { display: none; }
.vfx-faq-item summary::after {
  content: '+'; position: absolute; right: 4px; top: 50%;
  transform: translateY(-50%); font-size: 26px; color: #d4af37;
  font-weight: 300; transition: transform .2s;
}
.vfx-faq-item[open] summary::after { content: '−'; }
.vfx-faq-item summary:hover { color: #d4af37; }
.vfx-faq-answer { padding: 0 0 18px; color: #4b5563; line-height: 1.7; font-size: 15px; }

/* ---------- FOOTER ---------- */
.vfx-footer { background: #0f0f0f; padding: 48px 0; text-align: center; }
.vfx-footer .vfx-logo { font-size: 26px; }
.vfx-footer-text { color: #9ca3af; font-size: 15px; max-width: 600px; margin: 16px auto 0; line-height: 1.6; }
.vfx-footer-bottom {
  border-top: 1px solid rgba(212,175,55,0.2);
  margin-top: 32px; padding-top: 24px;
  display: flex; flex-direction: column; gap: 16px;
  color: #9ca3af; font-size: 14px;
}
.vfx-footer-links { display: flex; flex-wrap: wrap; gap: 14px 24px; justify-content: center; }
.vfx-footer-links a { transition: color .2s; }
.vfx-footer-links a:hover { color: #d4af37; }

/* =================== TABLET (>=640px) =================== */
@media (min-width: 640px) {
  .vfx-container { padding: 0 24px; }
  .vfx-logo { font-size: 32px; }
  .vfx-hero-title { font-size: 44px; }
  .vfx-hero-sub { font-size: 26px; }
  .vfx-section-title { font-size: 38px; }
  .vfx-section { padding: 72px 0; }
  .vfx-grid-3 { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .vfx-grid-4 { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .vfx-trust-row { grid-template-columns: repeat(3, 1fr); }
  .vfx-cert-row { grid-template-columns: 1fr 1fr; }
  .vfx-cta { width: auto; }
  .vfx-hero-badge { padding: 10px 18px; }
  .vfx-hero-badge-big { font-size: 22px; }
}

/* =================== DESKTOP (>=1024px) =================== */
@media (min-width: 1024px) {
  .vfx-hero { padding: 64px 0 80px; }
  .vfx-hero-grid { flex-direction: row; gap: 56px; align-items: center; }
  .vfx-hero-text { flex: 1 1 40%; order: 1; text-align: left; }
  .vfx-hero-img-wrap { flex: 1 1 60%; order: 2; max-width: 640px; }
  .vfx-hero-title { font-size: 60px; }
  .vfx-hero-sub { font-size: 36px; }
  .vfx-hero-lead { font-size: 19px; }
  .vfx-benefits-list li { justify-content: flex-start; font-size: 17px; }
  .vfx-anvisa { margin-left: 0; margin-right: 0; }
  .vfx-trust-row { max-width: 100%; }
  .vfx-section-title { font-size: 48px; }
  .vfx-grid-3 { grid-template-columns: repeat(3, 1fr); }
  .vfx-grid-4 { grid-template-columns: repeat(4, 1fr); }
  .vfx-footer-bottom { flex-direction: row; justify-content: space-between; align-items: center; }
}
`;

export default PVExport;
