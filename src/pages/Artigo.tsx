import React from 'react';

const Artigo: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">Nova Saúde</span>
          <span className="text-xs text-slate-500 hidden sm:inline">Reportagem Especial</span>
        </div>
      </header>

      <main className="pt-20 pb-12">
        {/* SEÇÃO 1 - TÍTULO PRINCIPAL */}
        <section className="max-w-4xl mx-auto px-4 py-8 border-b border-slate-100">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-600 mb-3">
            Reportagem Especial
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
            URGENTE: Cirurgião Quebra o Silêncio e Revela o 'Solvente Biológico' Que Está Esvaziando Salas de Cirurgia de Próstata no Brasil
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-slate-700 mb-4">
            Muitos Chamam de Cura, Mas a Medicina Explica
          </h2>
          <p className="text-base leading-relaxed text-slate-700">
            Uma descoberta recente vinda de um centro de pesquisa no Brasil está chamando a atenção de urologistas de todo o país. Um cirurgião experiente decidiu quebrar o silêncio sobre uma substância que ele apelidou de "solvente biológico" — e os resultados clínicos estão fazendo com que pacientes reavaliam a necessidade de procedimentos invasivos.
          </p>
        </section>

        {/* SEÇÃO 2 - O SOLVENTE BIOLÓGICO */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            O 'Solvente Biológico' Ganhou o Nome de Vita Flux
          </h2>
          <p className="text-base leading-relaxed text-slate-700 mb-4">
            De acordo com o relatório técnico, uma inteligência artificial foi utilizada para analisar 4.500 compostos naturais com potencial de ação sobre a próstata. Após 72 horas de processamento, 4.490 compostos foram descartados por falta de sinergia comprovada. Restaram apenas 10. Desses, 6 foram aprovados por critérios de biodisponibilidade, segurança e tolerância em estudos pré-clínicos.
          </p>
          <p className="text-base leading-relaxed text-slate-700 mb-6">
            A combinação desses 6 ingredientes — na proporção exata — recebeu o nome de <strong>Vita Flux</strong>. O termo "solvente biológico" faz referência à ação de inibição enzimática 5-alfa redutase e ao relaxamento do tecido muscular liso da próstata, algo relatado em bancos de dados científicos como PubMed e Embase.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              'Beta-sitosterol',
              'Extrato de Pygeum',
              'Babosa',
              'Zinco',
              'Licopeno',
              'Selênio',
            ].map((ingrediente, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <span className="block text-sm font-bold text-slate-900">
                  {ingrediente}
                </span>
                <span className="block text-xs text-slate-500 mt-1">
                  Composto ativo da fórmula
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://dicasdoeduardo.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold text-center text-lg px-8 py-4 rounded-lg shadow-md transition"
          >
            QUERO VITA FLUX AGORA!
          </a>
        </section>

        {/* SEÇÃO 3 - DEPOIMENTO JOÃO */}
        <section className="bg-slate-50 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              "Médico Me Disse que a Bolsa de Urina Seria pra Sempre"
            </h2>
            <p className="text-base leading-relaxed text-slate-700 mb-4">
              João R., 63 anos, morador de Ribeirão Preto/SP, conta que passou 11 meses com uma bolsa de urina após uma complicação pós-cirúrgica. A perspectiva dos médicos era de que a condição seria permanente.
            </p>
            <blockquote className="border-l-4 border-green-600 pl-4 italic text-lg text-slate-800 mb-4">
              "O médico disse que seria pra sempre. Não foi."
            </blockquote>
            <p className="text-base leading-relaxed text-slate-700">
              Segundo João, após adotar o tratamento com Vita Flux, ele notou uma melhora significativa na força do jato urinário e na frequência noturna. Hoje, não depende mais da bolsa.
            </p>
          </div>
        </section>

        {/* SEÇÃO 4 - DEPOIMENTO ANTÔNIO */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            "Próstata Reduziu 61%. Cirurgia Cancelada."
          </h2>
          <p className="text-base leading-relaxed text-slate-700 mb-4">
            Antônio S., 67 anos, de Belo Horizonte/MG, tinha a cirurgia de próstata marcada para o início de 2024. Após 60 dias de uso do Vita Flux, um novo exame de ultrassom revelou uma redução expressiva no volume prostático.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="rounded-lg bg-red-50 border border-red-100 p-4 text-center">
              <span className="block text-xs uppercase text-red-600 font-bold">Antes</span>
              <span className="block text-2xl font-extrabold text-red-700">87g</span>
            </div>
            <div className="rounded-lg bg-green-50 border border-green-100 p-4 text-center">
              <span className="block text-xs uppercase text-green-600 font-bold">Depois</span>
              <span className="block text-2xl font-extrabold text-green-700">34g</span>
            </div>
            <div className="rounded-lg bg-blue-50 border border-blue-100 p-4 text-center">
              <span className="block text-xs uppercase text-blue-600 font-bold">Redução</span>
              <span className="block text-2xl font-extrabold text-blue-700">-61%</span>
            </div>
          </div>
          <p className="text-base leading-relaxed text-slate-700">
            Com o resultado, o médico de Antônio cancelou a cirurgia e recomendou a manutenção do tratamento. O caso é um dos vários relatados por usuários do produto.
          </p>
        </section>

        {/* SEÇÃO 5 - ESPECIALISTAS */}
        <section className="bg-slate-50 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              O que os Especialistas Falam sobre o Tratamento?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-white border border-slate-200 p-5">
                <span className="block font-bold text-slate-900">Dr. Antônio Silva</span>
                <span className="block text-sm text-slate-600">Urologia — CRM/SP</span>
                <p className="text-sm text-slate-700 mt-2">
                  "A sinergia entre beta-sitosterol e extrato de pygeum apresenta dados promissores em estudos sobre hiperplasia prostática benigna."
                </p>
              </div>
              <div className="rounded-lg bg-white border border-slate-200 p-5">
                <span className="block font-bold text-slate-900">Dr. Mário Santos</span>
                <span className="block text-sm text-slate-600">Urologista — Hospital Albert Einstein</span>
                <p className="text-sm text-slate-700 mt-2">
                  "Acompanhamos de perto as evidências que associam zinco e licopeno à saúde prostática. O uso combinado pode potencializar o efeito."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6 - GARANTIA */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Garantia para Nossos Leitores de 180 Dias
          </h2>
          <p className="text-base leading-relaxed text-slate-700 mb-4">
            O programa de garantia Flux cobre todos os pedidos realizados pelo site oficial:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
            <li>Teste o produto por 6 meses.</li>
            <li>Não gostou dos resultados?</li>
            <li>Entre em contato e receba seu dinheiro de volta.</li>
          </ol>
          <p className="text-base leading-relaxed text-slate-700">
            A garantia é válida para o uso contínuo e conforme a recomendação do fabricante. Nenhuma burocracia é exigida para solicitar o reembolso.
          </p>
        </section>

        {/* SEÇÃO 7 - PREÇO E CTA */}
        <section className="bg-slate-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Quanto Custa?</h2>
            <p className="text-base leading-relaxed text-slate-300 mb-4">
              O Vita Flux é produzido em lotes pequenos de 500 frascos. Segundo a fabricante, devido à alta demanda, restam apenas 34 frascos disponíveis no estoque atual.
            </p>

            <div className="w-full max-w-xs mx-auto mb-6 rounded-lg bg-white/10 p-4 border border-white/10">
              <div className="h-48 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-sm text-slate-300">Imagem do produto</span>
              </div>
            </div>

            <div className="inline-block rounded-lg bg-red-600 text-white text-sm font-bold px-4 py-2 mb-6">
              Últimas 34 unidades com desconto
            </div>

            <a
              href="https://dicasdoeduardo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto mx-auto bg-green-500 hover:bg-green-600 text-slate-900 font-extrabold text-center text-xl px-10 py-5 rounded-xl shadow-lg transition"
            >
              QUERO VITA FLUX AGORA!
            </a>

            <p className="text-sm text-slate-400 mt-6">
              Devido à complexidade de produção laboratorial, não sabemos até quando terá estoque.
            </p>
          </div>
        </section>

        {/* SEÇÃO 8 - COMENTÁRIOS */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">108 Comentários</h2>
          <div className="space-y-4">
            {[
              {
                nome: 'Roberto Ferreira',
                texto:
                  'Comprei para meu pai. Em 3 semanas ele já notou diferença na noite. Antia acordava 4 vezes, agora acorda 1.',
              },
              {
                nome: 'Antônio Nascimento',
                texto:
                  'Estava na fila da cirurgia. Depois que vi a reportagem, resolvi testar. O médico disse que meu volume melhorou.',
              },
              {
                nome: 'Sérgio Cavalcanti',
                texto:
                  'Tomei por 2 meses e o jato urinário voltou a ser forte. Recomendo para quem está indeciso.',
              },
              {
                nome: 'Luiz Henrique Borges',
                texto:
                  'Garantia de 180 dias me deu segurança. Usei, gostei e peço todo mês agora.',
              },
            ].map((comentario, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-700">
                    {comentario.nome[0]}
                  </div>
                  <span className="font-bold text-slate-900 text-sm">
                    {comentario.nome}
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {comentario.texto}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-700 mb-4">
            <a href="#" className="hover:underline">
              Princípios Editoriais
            </a>
            <a href="#" className="hover:underline">
              Política de Privacidade
            </a>
            <a href="#" className="hover:underline">
              Termos de Uso
            </a>
            <a href="#" className="hover:underline">
              Fale Conosco
            </a>
          </div>
          <p className="text-sm text-slate-500 mb-2">
            Copyright 2026 Nova Saúde. Todos os direitos reservados.
          </p>
          <p className="text-xs font-bold text-slate-700 uppercase">
            Este produto não é um medicamento.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Artigo;
