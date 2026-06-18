import { useState } from 'react';

export default function Artigo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const ctaLink = 'https://dicasdoeduardo.com.br/';
  const braipLinks = [
    'https://ev.braip.com/ref?pl=pla1&ck=che1&af=afi1',
    'https://ev.braip.com/ref?pl=pla2&ck=che2&af=afi2',
    'https://ev.braip.com/ref?pl=pla3&ck=che3&af=afi3',
  ];

  const kits = [
    {
      name: 'Kit Tratamento 3 Frascos',
      price: 'R$ 297,00',
      oldPrice: 'R$ 591,00',
      tag: 'MAIS POPULAR',
      link: braipLinks[1],
    },
    {
      name: 'Kit 6 Frascos (Estoque Trimestral)',
      price: 'R$ 497,00',
      oldPrice: 'R$ 1.182,00',
      tag: 'MELHOR CUSTO-BENEFÍCIO',
      link: braipLinks[2],
    },
    {
      name: '1 Frasco Experimental',
      price: 'R$ 197,00',
      oldPrice: 'R$ 197,00',
      tag: 'TESTE 30 DIAS',
      link: braipLinks[0],
    },
  ];

  const comments = [
    {
      name: 'Roberto Ferreira',
      time: 'Há 2 horas',
      text: 'Tomei achando que era mais uma enganação. Hoje durmo a noite toda sem levantar. Minha esposa não acredita.',
      likes: 143,
    },
    {
      name: 'Antônio Nascimento',
      time: 'Há 1 dia',
      text: '21 dias de uso. Fui no médico esperando marcar a cirurgia. Ele adiou o procedimento e pediu para continuar.',
      likes: 218,
    },
    {
      name: 'Sérgio Cavalcanti',
      time: 'Há 1 dia',
      text: 'Comprei desconfiado. Minha esposa que insistiu. Agora sou eu que compro sozinho e guardo reserva.',
      likes: 96,
    },
    {
      name: 'Luiz Henrique Borges',
      time: 'Há 3 dias',
      text: '5 anos tomando Tamsulosina. Em 40 dias com Vita Flux parei de sentir aquela ardência constante.',
      likes: 174,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-teal-600 rounded" />
            <span className="text-xl font-bold tracking-tight text-stone-900">Nova Saúde</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#" className="hover:text-blue-700 transition">Saúde</a>
            <a href="#" className="hover:text-blue-700 transition">Bem-estar</a>
            <a href="#" className="hover:text-blue-700 transition">Reportagens</a>
            <a href="#" className="hover:text-blue-700 transition">Newsletter</a>
          </nav>

          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3 text-sm font-medium text-stone-700">
            <a href="#" className="block">Saúde</a>
            <a href="#" className="block">Bem-estar</a>
            <a href="#" className="block">Reportagens</a>
            <a href="#" className="block">Newsletter</a>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero banner */}
        <div className="w-full h-2 bg-gradient-to-r from-blue-900 via-blue-700 to-teal-600" />

        {/* Seção 1: Título principal */}
        <section className="max-w-3xl mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Reportagem Especial — Atualizado hoje
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-stone-900 mb-5">
            URGENTE: Cirurgião Quebra o Silêncio e Revela o 'Solvente Biológico' Que Está Esvaziando Salas de Cirurgia de Próstata no Brasil
          </h1>

          <p className="text-lg md:text-xl font-medium text-stone-700 mb-4">
            Muitos Chamam de Cura, Mas a Medicina Explica
          </p>

          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8">
            Uma descoberta feita por um grupo de pesquisadores independentes, liderado por um cirurgião urologista que preferiu não se identificar, aponta para um mecanismo natural capaz de reduzir o volume prostático sem bisturi, sem laser e sem internação hospitalar. O que começou como um estudo discreto em laboratório hoje atrai a atenção de pacientes, clínicas e especialistas de todo o país.
          </p>

          <div className="w-full h-56 md:h-80 rounded-lg bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 flex items-center justify-center shadow-lg">
            <span className="text-white/60 text-sm font-medium">Imagem: ilustração laboratorial / substituir</span>
          </div>

          <div className="mt-4 flex items-center gap-3 text-sm text-stone-500">
            <div className="w-8 h-8 rounded-full bg-stone-300" />
            <div>
              <p className="font-medium text-stone-800">Redação Nova Saúde</p>
              <p>Leitura de 6 min · Atualizado em {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        </section>

        {/* Seção 2: O Solvente Biológico */}
        <section className="bg-white border-y border-stone-200 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">
              O "Solvente Biológico" Ganhou o Nome de Vita Flux
            </h2>

            <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-5">
              Segundo a equipe de desenvolvimento, a inteligência artificial responsável pela triagem analisou mais de <strong>4.500 compostos naturais</strong> de diferentes origens. Desses, 4.490 foram descartados por baixa absorção, instabilidade ou interação negativa.
            </p>

            <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-5">
              Restaram <strong>apenas 6 ativos</strong> que, quando combinados em proporção específica, formaram uma sinergia capaz de agir sobre o tecido prostático de forma seletiva. Esse conjunto de compostos foi apelidado internamente de "Solvente Biológico" — e, posteriormente, batizado de <strong>Vita Flux</strong>.
            </p>

            <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-6">
              A fórmula é a única, segundo os pesquisadores, que preserva a <strong>"Sinergia de 6 Compostos"</strong> na dose e na forma de liberação exatas necessárias para que o organismo consiga absorver e utilizar cada componente.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
              {['Beta-sitosterol', 'Extrato de Pygeum', 'Babosa', 'Zinco', 'Licopeno', 'Selênio'].map((item) => (
                <div
                  key={item}
                  className="bg-stone-50 border border-stone-200 rounded-md px-4 py-3 text-center text-sm md:text-base font-semibold text-stone-800"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-700 to-teal-600 text-white font-bold text-lg rounded-md shadow-lg hover:from-blue-800 hover:to-teal-700 transition"
            >
              QUERO VITA FLUX AGORA!
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Seção 3: Depoimento João */}
        <section className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">
            "Médico Me Disse que a Bolsa de Urina Seria pra Sempre"
          </h2>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-stone-400 to-stone-600" />
            <div>
              <p className="font-bold text-stone-900">João R., 63 anos</p>
              <p className="text-sm text-stone-500">Ribeirão Preto / SP</p>
            </div>
          </div>

          <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-5">
            "Há três anos eu não dormia uma noite inteira. Levantava cinco, seis vezes para urinar. A pressão era tão fraca que parecia que a bexiga nunca esvaziava. Quando o médico disse que a próxima etapa seria a sonda e, provavelmente, a bolsa de urina, eu senti o chão sumir.", relembra João.
          </p>

          <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-5">
            "Ele me disse que a bolsa seria pra sempre. Que a cirurgia poderia resolver o volume, mas não garantia a continência. Eu sai da consulta abalado. Foi aí que meu filho me mandou uma matéria sobre o Vita Flux."
          </p>

          <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-6">
            João começou a usar a fórmula como orientado. Nas primeiras duas semanas notou que a urgência diminuía. Aos 30 dias, já dormia duas, três noites seguidas sem levantar. Em quatro semanas, voltou ao urologista para nova avaliação.
          </p>

          <blockquote className="border-l-4 border-blue-700 bg-blue-50/50 p-6 rounded-r-md">
            <p className="text-xl md:text-2xl font-bold text-stone-900 italic">
              "O médico disse que seria pra sempre. Não foi."
            </p>
          </blockquote>
        </section>

        {/* Seção 4: Depoimento Antônio */}
        <section className="bg-stone-100 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">
              "Próstata Reduziu 61%. Cirurgia Cancelada."
            </h2>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-stone-500 to-stone-700" />
              <div>
                <p className="font-bold text-stone-900">Antônio S., 67 anos</p>
                <p className="text-sm text-stone-500">Belo Horizonte / MG</p>
              </div>
            </div>

            <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-5">
              Antônio já tinha a data da cirurgia marcada. O volume da próstata estava em 87 gramas — muito acima do considerado normal — e o médico explicou que a ressecção transuretral seria o caminho mais seguro para evitar retenção completa.
            </p>

            <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-5">
              "Dois meses antes da cirurgia, um amigo que tinha passado pela mesma situação me falou do Vita Flux. Resolvi tentar enquanto aguardava a data. Não tinha nada a perder.", conta ele.
            </p>

            <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-6">
              O novo ultrassom, feito 60 dias depois, mostrou próstata de 34 gramas — <strong>redução de 61%</strong>. O médico cancelou a cirurgia e pediu acompanhamento trimestral.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
              <div className="w-full md:w-1/2 h-44 rounded-lg bg-gradient-to-br from-emerald-800 to-teal-700 flex items-center justify-center text-white/70 text-sm">
                Imagem: exame comparativo / substituir
              </div>
              <div className="w-full md:w-1/2 space-y-3">
                <div className="flex justify-between items-center bg-white px-4 py-3 rounded-md border border-stone-200">
                  <span className="text-stone-600">Antes</span>
                  <span className="font-bold text-red-700">87g</span>
                </div>
                <div className="flex justify-between items-center bg-white px-4 py-3 rounded-md border border-stone-200">
                  <span className="text-stone-600">Depois de 60 dias</span>
                  <span className="font-bold text-emerald-700">34g</span>
                </div>
                <div className="flex justify-between items-center bg-white px-4 py-3 rounded-md border border-stone-200">
                  <span className="text-stone-600">Redução</span>
                  <span className="font-bold text-blue-700">-61%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: Especialistas */}
        <section className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-8">
            O que os Especialistas Falam sobre o Tratamento?
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg text-stone-900">Dr. Antônio Silva</p>
                  <p className="text-sm text-blue-700 font-medium mb-3">Urologia — CRM/SP</p>
                  <p className="text-stone-700 leading-relaxed">
                    "Em 30 anos de carreira eu nunca indiquei um suplemento para paciente com hiperplasia prostática. Sempre preferi aguardar ou operar. O Vita Flux foi o primeiro. Não pela promessa, mas pelos exames que eu mesmo solicitei e vi retornarem diferentes."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-700 to-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg text-stone-900">Dr. Mário Santos</p>
                  <p className="text-sm text-blue-700 font-medium mb-3">Urologista — Hospital Albert Einstein</p>
                  <p className="text-stone-700 leading-relaxed">
                    "Vou ser honesto: fui cético. Quando o primeiro paciente voltou com PSA estabilizado e volume reduzido, pensei que fosse erro de laboratório. Pedi para repetir o exame. O resultado se manteve. Hoje, em casos selecionados, eu indico antes de qualquer procedimento invasivo."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 6: Garantia */}
        <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Garantia para Nossos Leitores de 180 Dias
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8">
              Garantia Flux de 180 dias, blindada. Ou todo o seu dinheiro de volta.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-5">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl font-bold">1</span>
                </div>
                <p className="font-bold mb-1">Teste por 6 meses</p>
                <p className="text-sm text-blue-100">Use a fórmula conforme a recomendação.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-5">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl font-bold">2</span>
                </div>
                <p className="font-bold mb-1">Não gostou?</p>
                <p className="text-sm text-blue-100">Entre em contato com o suporte a qualquer momento.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-5">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl font-bold">3</span>
                </div>
                <p className="font-bold mb-1">Dinheiro de volta</p>
                <p className="text-sm text-blue-100">100% do valor reembolsado, sem burocracia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 7: Preço e CTA */}
        <section className="max-w-5xl mx-auto px-4 py-14 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-3">Quanto Custa?</h2>
            <p className="text-lg md:text-xl font-medium text-blue-700">Oportunidade Especial Para Nossos Leitores</p>
          </div>

          <p className="text-center text-stone-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Por causa da complexidade de produção em laboratório, os lotes são pequenos: apenas 500 frascos são liberados a cada trimestre. No momento da publicação desta reportagem, <strong>restam apenas 34 frascos</strong> com o desconto especial para leitores da Nova Saúde.
          </p>

          <div className="w-full h-64 md:h-96 rounded-xl bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 flex items-center justify-center mb-8 shadow-xl">
            <div className="text-center text-white/70">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 border-2 border-white/20" />
              <p className="text-sm font-medium">Imagem do produto Vita Flux</p>
              <p className="text-xs mt-1">Substituir pela imagem real</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-md px-4 py-3 text-center mb-8">
            <p className="text-red-800 font-bold text-sm md:text-base uppercase tracking-wide">
              Últimas 34 unidades com desconto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {kits.map((kit, index) => (
              <div
                key={index}
                className={`relative bg-white border rounded-xl p-6 shadow-md flex flex-col ${
                  index === 1 ? 'border-blue-600 ring-2 ring-blue-100' : 'border-stone-200'
                }`}
              >
                {kit.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-700 to-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                    {kit.tag}
                  </div>
                )}

                <h3 className="text-lg font-bold text-stone-900 text-center mt-2 mb-4">{kit.name}</h3>

                <div className="text-center mb-5">
                  <p className="text-sm text-stone-500 line-through">{kit.oldPrice}</p>
                  <p className="text-3xl font-extrabold text-blue-700">{kit.price}</p>
                </div>

                <ul className="text-sm text-stone-600 space-y-2 mb-6 flex-1">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Entrega em todo o Brasil
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Garantia de 180 dias
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Pagamento seguro
                  </li>
                </ul>

                <a
                  href={kit.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-3 bg-gradient-to-r from-blue-700 to-teal-600 text-white font-bold rounded-md hover:from-blue-800 hover:to-teal-700 transition"
                >
                  Escolher {kit.name.split(' ')[0]}
                </a>
              </div>
            ))}
          </div>

          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full md:w-2/3 mx-auto text-center px-8 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xl font-extrabold rounded-lg shadow-xl hover:from-amber-600 hover:to-orange-700 transition animate-pulse"
          >
            QUERO VITA FLUX AGORA!
          </a>

          <p className="text-center text-xs md:text-sm text-red-700 font-bold uppercase mt-4 tracking-wide">
            Devido à complexidade de produção laboratorial, não sabemos até quando terá estoque.
          </p>
        </section>

        {/* Seção 8: Comentários */}
        <section className="bg-stone-100 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-stone-900">108 Comentários</h2>
              <div className="text-sm text-stone-500">Ordenar por: Mais relevantes</div>
            </div>

            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div key={index} className="bg-white border border-stone-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-300 to-stone-500" />
                    <div className="flex-1">
                      <p className="font-bold text-stone-900 text-sm">{comment.name}</p>
                      <p className="text-xs text-stone-500">{comment.time}</p>
                    </div>
                    <div className="text-stone-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-3">{comment.text}</p>
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <button className="flex items-center gap-1 hover:text-blue-700 transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      {comment.likes}
                    </button>
                    <button className="hover:text-blue-700 transition">Responder</button>
                    <button className="hover:text-blue-700 transition">Compartilhar</button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 border border-stone-300 rounded-md text-stone-700 font-medium hover:bg-stone-50 transition">
              Carregar mais comentários
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-teal-600 rounded" />
              <span className="text-xl font-bold text-white">Nova Saúde</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <a href="#" className="hover:text-white transition">Princípios Editoriais</a>
              <a href="#" className="hover:text-white transition">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition">Termos de Uso</a>
              <a href="#" className="hover:text-white transition">Fale Conosco</a>
            </nav>
          </div>

          <div className="border-t border-stone-800 pt-6 text-center text-xs md:text-sm leading-relaxed">
            <p className="mb-3">© Copyright 2026 — Nova Saúde. Todos os direitos reservados.</p>
            <p className="text-stone-500">
              <strong>AVISO MÉDICO:</strong> ESTE PRODUTO NÃO É UM MEDICAMENTO. Os resultados podem variar de pessoa para pessoa. O Vita Flux é um suplemento alimentar e não substitui o acompanhamento médico. Consulte seu médico antes de iniciar qualquer tratamento.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
