import React from 'react';

export default function Artigo(): React.JSX.Element {
  const ctaUrl = 'https://dicasdoeduardo.com.br/';

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-3xl px-4 py-6">
        {/* 1. ABERTURA */}
        <article className="space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-red-600">
            URGENTE
          </span>
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            URGENTE: Cirurgião Quebra o Silêncio e Revela o 'Solvente Biológico' Que Está Esvaziando Salas de Cirurgia de Próstata no Brasil
          </h1>
          <p className="text-lg text-gray-700">
            10 segundos por dia. É o tempo que homens entre 40 e 75 anos estão usando para dissolver a 'Gosma Tóxica' da próstata, voltar a urinar como aos 20, recuperar a ereção e cancelar cirurgias já agendadas. Sem remédio tarja preta. Sem efeitos colaterais.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Por Dr. Rafael Mendes</span>
            <span>—</span>
            <span>Rio de Janeiro</span>
          </div>
          <div className="text-sm text-gray-500">
            18 de junho de 2026 04h02 · Atualizado há 23 minutos
          </div>
          <div className="text-sm font-medium text-gray-700">
            147.832 leituras · 8 min
          </div>
        </article>

        <div className="mt-4">
          <img
            src="https://vita-flux.shop/detergente/adv-portais.webp"
            alt="Publicado também em"
            className="w-full rounded-lg"
          />
        </div>

        <a
          href={ctaUrl}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-green-700"
        >
          QUERO VITA FLUX AGORA!
        </a>

        <hr className="my-8 border-gray-200" />

        {/* 2. ISSO MATA SUA PRÓSTATA EM SILÊNCIO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Isso MATA sua Próstata em Silêncio
          </h2>
          <p className="text-lg font-semibold text-red-600">
            76% dos homens acima de 50 anos sofrem com isso silenciosamente
          </p>
          <img
            src="https://vita-flux.shop/detergente/isso-mata-prostata-v2.webp"
            alt="Isso mata sua próstata em silêncio"
            className="w-full rounded-lg"
          />
          <p className="text-gray-700">
            Todo dia, sem perceber, você coloca um copinho de café, embalagens plásticas e garrafas PET em contato com o seu corpo. O que parece inofensivo está liberando micropartículas invisíveis que atravessam a barreira intestinal e se acumulam na região pélvica.
          </p>
          <p className="text-gray-700">
            Esses microplásticos criam uma reação silenciosa: inflamação crônica, obstrução da passagem da urina, queda da libido e, ao longo dos anos, o crescimento descontrolado da próstata. Médicos chamam de hiperplasia prostática benigna. Mas o corpo sente como um estrangulamento lento e progressivo.
          </p>
          <p className="text-gray-700">
            O copinho de café da manhã. A embalagem do almoço. A garrafa PET no carro. Você nunca suspeitaria, mas são eles que estão sufocando sua próstata em silêncio.
          </p>
          <a href="#" className="inline-block text-sm font-semibold text-blue-700 underline hover:text-blue-900">
            📄 Estudo científico
          </a>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 3. AFINAL: É BACTÉRIA? GENÉTICA? IDADE? ESTRESSE? GOSMA TÓXICA? */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Afinal: É Bactéria? Genética? Idade? Estresse? Gosma Tóxica?
          </h2>
          <img
            src="https://vita-flux.shop/detergente/bacteria-ou-gosma-toxica-v2.webp"
            alt="Bactéria ou Gosma Tóxica"
            className="w-full rounded-lg"
          />
          <p className="text-gray-700">
            A lista de culpados é longa: bactérias da urina, predisposição genética, envelhecimento natural, estresse crônico, dieta rica em industrializados, sedentarismo e inflamação silenciosa. Cada um desses fatores contribui.
          </p>
          <p className="text-gray-700">
            Nenhuma resolve sozinha. Antibióticos matam a bactéria, mas não tiram a obstrução. Remédios para próstata aliviam a pressão, mas não limpam o tecido. Cirurgia remove parte do problema, mas não evita que ele volte.
          </p>
          <p className="text-gray-700">
            A verdade que ninguém conectou ainda: a Gosma Tóxica é o ambiente onde todos os outros problemas prosperam. É uma camada viscosa e inflamada que envolve a próstata, obstrui os canais urinários, sufoca os nervos da ereção e alimenta a inflamação crônica.
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Tratar qualquer outra coisa sem dissolver a Gosma primeiro é enxugar gelo.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 4. O SOLVENTE BIOLÓGICO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            O 'Solvente' Biológico
          </h2>
          <img
            src="https://vita-flux.shop/detergente/detergente-acao.webp"
            alt="O Solvente Biológico em ação"
            className="w-full rounded-lg"
          />
          <p className="text-gray-700">
            Uma equipe de bioquímicos e cientistas de dados treinou uma inteligência artificial para analisar 4.500 compostos naturais com potencial de dissolver a Gosma Tóxica e restaurar o ambiente prostático.
          </p>
          <p className="text-gray-700">
            A IA rejeitou 4.490 deles. Rejeitou por serem fracos. Rejeitou por agirem em apenas uma etapa do problema. Rejeitou por não atravessarem a membrana corretamente. Rejeitou por provocarem efeitos colaterais.
          </p>
          <p className="text-gray-700">
            Sobraaram 10 compostos. Depois de 18 meses de testes, apenas 6 demonstraram ação sinérgica perfeita: cada um dissolvia um tipo de depósito, enquanto outro reparava o tecido e outro bloqueava a reinflamação.
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Esse conjunto de 6 compostos foi apelidado internamente de 'Solvente Biológico'.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 5. O SOLVENTE BIOLÓGICO GANHOU O NOME DE VITA FLUX */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            O 'Solvente Biológico' Ganhou o nome de Vita Flux
          </h2>
          <img
            src="https://vita-flux.shop/detergente/vita-flux-formula.webp"
            alt="Fórmula Vita Flux"
            className="w-full rounded-lg"
          />
          <p className="text-gray-700">
            Esta é a única fórmula no mundo que preserva fielmente a 'Sinergia de 6 Compostos' identificada pela inteligência artificial. Cada cápsula de Vita Flux carrega a proporção exata que a IA encontrou como ideal para dissolver a Gosma Tóxica, sem desbalancear o organismo.
          </p>
          <p className="text-gray-700">
            Não é um remédio tarja preta. Não é uma mistura genérica de ervas. É um protocolo bioquímico que trabalha de dentro para fora, limpando a próstata, restaurando a passagem da urina, reativando a circulação da região e devolvendo a energia sexual.
          </p>
          <p className="text-gray-700">
            Bastam 10 segundos por dia. Uma cápsula pela manhã. O equivalente a um gole d'água.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 6. DEPOIMENTO JOÃO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            "Médico Me Disse que a Bolsa de Urina Seria pra Sempre"
          </h2>
          <img
            src="https://vita-flux.shop/detergente/joao-antes-depois-v2.webp"
            alt="João antes e depois"
            className="w-full rounded-lg"
          />
          <p className="font-semibold text-gray-900">João R., 63 anos, Ribeirão Preto/SP</p>
          <blockquote className="space-y-3 border-l-4 border-blue-600 bg-gray-50 p-4 italic text-gray-800">
            <p>"Eu acordava 5, 6 vezes por noite para ir ao banheiro. E quando chegava lá, pingava. Não tinha jato. Era humilhante."</p>
            <p>"O médico mostrou o ultrassom e disse que a próstata estava muito inchada. A cirurgia tinha risco de incontinência e impotência. Ele me entregou o cateter e disse que a bolsa de urina seria para sempre."</p>
            <p>"Eu recusei. Voltei para casa desesperado. Foi quando um amigo me falou do Vita Flux."</p>
            <p>"No terceiro dia já senti a bexiga esvaziando melhor. Na segunda semana, dormi a noite toda pela primeira vez em anos."</p>
            <p>"Em 60 dias voltei ao urologista. Ele olhou para o exame, depois para mim. Tirou o cateter. Disse que não precisava mais nem da bolsa, nem da cirurgia."</p>
            <p>"O médico disse que seria pra sempre. Não foi."</p>
          </blockquote>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 7. DEPOIMENTO ANTÔNIO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            "Próstata Reduziu 61%. Cirurgia Cancelada."
          </h2>
          <img
            src="https://vita-flux.shop/detergente/antonio-prostata-reducao.webp"
            alt="Antônio redução da próstata"
            className="w-full rounded-lg"
          />
          <p className="font-semibold text-gray-900">Antônio S., 67 anos, BH/MG</p>
          <blockquote className="space-y-3 border-l-4 border-blue-600 bg-gray-50 p-4 italic text-gray-800">
            <p>"Próstata com 87 gramas. Cirurgia marcada. É o que eu li no laudo."</p>
            <p>"Tomei Vita Flux por 60 dias. Fiz tudo direitinho, uma cápsula de manhã com água."</p>
            <p>"Ultrassom mostrou 34 gramas. O urologista ficou de boca aberta."</p>
            <p>"Ele cancelou a cirurgia na hora. Disse que não tinha mais indicação."</p>
            <p>"Continue. Melhor palavra que já ouvi."</p>
          </blockquote>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 8. ESPECIALISTAS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            O que os Especialistas falam sobre o Tratamento?
          </h2>
          <img
            src="https://vita-flux.shop/detergente/dr-antonio-silva.webp"
            alt="Dr. Antônio Silva"
            className="w-full rounded-lg"
          />
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="font-bold text-gray-900">Dr. Antônio Silva — Urologia — CRM/SP</p>
              <p className="mt-2 text-gray-700">
                "Em 20 anos de urologia, eu via homens chegarem com próstata inflamada e uma pilha de remédios que só mascaravam o sintoma. O que chamo de Gosma Tóxica é o fator comum que ninguém tratava. Quando o paciente consegue dissolver essa camada inflamada, a melhora é palpável: jato forte, sono reparador, retorno da libido. O protocolo do Vita Flux representa uma mudança real no cuidado prostático."
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="font-bold text-gray-900">Dr. Mario Santos — Urologista do Albert Einstein</p>
              <p className="mt-2 text-gray-700">
                "A abordagem sinérgica do Vita Flux é tecnicamente interessante porque não tenta suprimir um sintoma isolado. Ela restaura o ambiente prostático. Nos casos que acompanhei, observei redução do volume vesical residual, menos noctúria e melhora do índice de qualidade de vida. Para o homem que quer evitar uma cirurgia, é uma alternativa séria e baseada em ciência."
              </p>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 9. BENEFÍCIOS FLUX */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Benefícios Flux
          </h2>
          <p className="text-gray-700">
            Veja o que o Vita Flux faz no seu corpo nos primeiros dias de uso:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <span className="text-gray-800">Devolve o jato forte e constante, eliminando o famoso "pingar" e a sensação de bexiga cheia.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <span className="text-gray-800">Aumenta o desejo sexual e a potência, restaurando a confiança no quarto.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <span className="text-gray-800">Dissolve a gosma tóxica que sufoca a próstata, limpando o tecido de dentro para fora.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <span className="text-gray-800">Melhora a qualidade do sono drasticamente, reduzindo as idas ao banheiro durante a noite.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <span className="text-gray-800">Restaura sua energia, confiança e vitalidade masculina, o famoso "brilho nos olhos".</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <span className="text-gray-800">Fortalece o sistema urinário, diminuindo a urgência e a sensação de incontinência.</span>
            </li>
          </ul>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 10. GARANTIA */}
        <section className="space-y-4 rounded-xl bg-gray-900 p-6 text-white md:p-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Garantia para nossos Leitores de 180 Dias
          </h2>
          <img
            src="https://vita-flux.shop/detergente/vita-flux-garantia-180dias.webp"
            alt="Garantia Vita Flux 180 dias"
            className="w-full rounded-lg"
          />
          <p className="text-gray-300">
            Muitos homens já gastaram o seu rico dinheirinho com remédios, consultas e procedimentos que não resolveram. Entendemos o risco que você sente ao tentar mais uma vez.
          </p>
          <p className="text-gray-300">
            Por isso, ao adquirir o Vita Flux hoje, você fica protegido pela Garantia Flux, que protege você por 180 dias completos.
          </p>
          <p className="text-lg font-semibold text-white">
            Você está BLINDADO pela Garantia Flux de 180 dias.
          </p>
          <p className="text-gray-300">
            Use o produto. Teste por semanas. Sinta a diferença. Se por qualquer motivo você não ficar satisfeito, basta entrar em contato e receberá 100% do valor investido de volta, sem perguntas e sem burocracia.
          </p>
          <p className="text-xl font-bold text-white">
            Ou o Vita Flux resolve, ou você recebe TODO o seu rico dinheirinho de volta.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 11. QUANTO CUSTA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Quanto Custa?
          </h2>
          <p className="text-lg font-semibold text-red-600">Oportunidade Especial Para Nossos Leitores</p>
          <img
            src="https://vita-flux.shop/detergente/vita-flux-florest.png"
            alt="Vita Flux produto"
            className="w-full rounded-lg"
          />
          <p className="text-gray-700">
            O Vita Flux é produzido em lotes de 500 frascos a cada trimestre. A próxima remessa ainda não saiu da linha de produção.
          </p>
          <p className="text-gray-700">
            Neste momento, restam apenas 34 frascos do lote atual com condição especial para os leitores desta página.
          </p>
          <div className="rounded-lg border-2 border-red-600 bg-red-50 p-4 text-center">
            <p className="text-lg font-bold text-red-700">ÚLTIMAS 34 UNIDADES COM DESCONTO</p>
            <p className="mt-1 text-sm font-semibold text-red-700">Desconto válido nesta quinta-feira, 18/06/2026</p>
          </div>
          <a
            href={ctaUrl}
            className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-8 py-5 text-xl font-extrabold text-white shadow-lg transition hover:bg-green-700"
          >
            QUERO VITA FLUX AGORA!
          </a>
          <p className="text-center text-sm font-bold uppercase tracking-wide text-gray-900">
            ESSA PROMOÇÃO SÓ É VÁLIDA PARA OS NOSSOS LEITORES!
          </p>
          <p className="text-center text-xs font-semibold text-gray-600">
            DEVIDO À COMPLEXIDADE DE PRODUÇÃO LABORATORIAL, NÃO SABEMOS ATÉ QUANDO TERÁ ESTOQUE.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 12. COMENTÁRIOS */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">108 Comentários</h3>
          <p className="text-xs text-gray-500">
            Os comentários são de responsabilidade exclusiva de seus autores e não representam a opinião deste site.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900">Roberto Ferreira</p>
                <p className="text-xs text-gray-500">Há 2 horas</p>
              </div>
              <p className="mt-2 text-gray-800">
                Não acreditei no início, mas depois de 3 semanas minha noite mudou. Acordo apenas 1 vez agora. Recomendo demais! 👏
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900">Antônio Nascimento</p>
                <p className="text-xs text-gray-500">Há 5 horas</p>
              </div>
              <p className="mt-2 text-gray-800">
                Minha próstata era de 92 gramas. Em 90 dias caiu para 41. Médico nem acreditou. 🔥
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900">Sérgio Cavalcanti</p>
                <p className="text-xs text-gray-500">Há 1 dia</p>
              </div>
              <p className="mt-2 text-gray-800">
                A libido voltou com força total. Minha esposa notou a diferença. Gratidão por compartilhar essa descoberta. ❤️
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900">Luiz Henrique Borges</p>
                <p className="text-xs text-gray-500">Há 2 dias</p>
              </div>
              <p className="mt-2 text-gray-800">
                Eu tinha cirurgia marcada para o mês que vem. Hoje cancelamos. Resultado de verdade. 💪
              </p>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-200" />

        {/* 13. FOOTER */}
        <footer className="space-y-4 text-center text-sm text-gray-600">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="hover:text-gray-900 hover:underline">Bem-Estar</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-900 hover:underline">Princípios Editoriais</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-900 hover:underline">Política de Privacidade</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-900 hover:underline">Termos de Uso</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-900 hover:underline">Fale Conosco</a>
          </div>
          <p>© Copyright 2011-2025 — Todos os direitos reservados</p>
          <p className="text-xs font-semibold uppercase text-gray-500">
            ESTE PRODUTO NÃO É UM MEDICAMENTO.
          </p>
        </footer>
      </main>
    </div>
  );
}
