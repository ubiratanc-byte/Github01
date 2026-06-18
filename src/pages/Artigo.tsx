import React from "react";

const Artigo: React.FC = () => {
  const CTA_URL = "https://dicasdoeduardo.com.br/";

  const CtaButton = (props: { children: React.ReactNode; className?: string }) => (
    <a
      href={CTA_URL}
      className={`inline-block rounded-md bg-green-600 px-6 py-3 text-center font-bold text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${props.className ?? ""}`}
    >
      {props.children}
    </a>
  );

  const ImagePlaceholder = (props: { label: string; className?: string }) => (
    <div
      className={`flex w-full items-center justify-center rounded-lg bg-blue-900 text-center font-semibold text-white ${props.className ?? ""}`}
    >
      {props.label}
    </div>
  );

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 1. ABERTURA */}
      <section className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <h1 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
          URGENTE: Cirurgião Quebra o Silêncio e Revela o "Solvente Biológico" Que Está Esvaziando Salas de Cirurgia de Próstata no Brasil
        </h1>

        <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
          10 segundos por dia. É o tempo que homens entre 40 e 75 anos estão usando para dissolver a "Gosma Tóxica" da próstata, voltar a urinar como aos 20, recuperar a ereção e cancelar cirurgias já agendadas. Sem remédio tarja preta. Sem efeitos colaterais.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <span className="font-semibold text-gray-900">Por Dr. Rafael Mendes</span>
          <span>— Rio de Janeiro</span>
        </div>

        <div className="mt-1 text-sm text-gray-500">
          18 de junho de 2026 04h02 · Atualizado há 23 min
        </div>

        <div className="mt-2 text-sm font-semibold text-gray-600">
          147.832 leituras · 8 min
        </div>

        <div className="mt-6">
          <ImagePlaceholder label="Imagem: Publicado também em — portais de notícias" className="h-24 text-sm" />
        </div>
      </section>

      {/* 2. SEÇÃO "Isso MATA sua Próstata em Silêncio" */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Isso MATA sua Próstata em Silêncio
          </h2>

          <div className="mt-6">
            <ImagePlaceholder label="Imagem: ilustração do problema na próstata" className="h-56" />
          </div>

          <p className="mt-4 text-2xl font-bold text-red-600 sm:text-3xl">
            76% dos homens acima de 50 anos sofrem com isso silenciosamente
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            Se você passou dos 40, vou te revelar algo que nenhum médico explica claramente e não tem absolutamente nada a ver com "idade".
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            A "Gosma Tóxica" se forma a partir de microplásticos que entram no corpo todos os dias — no copinho do café, na embalagem da comida, na garrafa pet, em utensílios plásticos. Essas partículas se acumulam na próstata, criam uma espécie de biofilme viscoso e bloqueiam a função normal da glândula. O resultado: jato fraco, vontade de urinar a toda hora, noites mal dormidas e, em casos avançados, dependência de sonda ou bolsa de coleta.
          </p>

          <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:underline">
            📄 Estudo científico
          </a>
        </div>
      </section>

      {/* 3. SEÇÃO "Afinal: É Bactéria? Genética? Idade? Estresse? Gosma Tóxica?" */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Afinal: É Bactéria? Genética? Idade? Estresse? Gosma Tóxica?
          </h2>

          <div className="mt-6">
            <ImagePlaceholder label="Imagem: comparação entre causas comuns da próstata" className="h-56" />
          </div>

          <p className="mt-4 font-semibold text-gray-900">
            Bactéria, genética, idade, estresse, hormônio: todas explicações que tratam o sintoma.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• É a bactéria prostática.</li>
            <li>• É genético, seu pai tinha.</li>
            <li>• É a idade.</li>
            <li>• É o estresse.</li>
            <li>• É hormônio.</li>
          </ul>

          <p className="mt-4 leading-relaxed text-gray-700">
            Nenhuma resolve. Você trata a bactéria com antibiótico, ela volta. Receita tarja preta alivia um mês e depois piora. A cirurgia remove parte do problema, mas não o ambiente que o criou. A genética você não escolhe. A idade não para. O estresse é impossível zerar.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            A verdade que ninguém conectou ainda: a Gosma Tóxica é o ambiente que permite que tudo isso aconteça. Ela alimenta a bactéria, protege a inflamação e força a próstata a inchar. Sem a Gosma Tóxica, a bactéria morre de fome. A inflamação some. O inchaço regride.
          </p>

          <p className="mt-4 font-bold text-gray-900">
            Tratar qualquer outra coisa sem dissolver a Gosma primeiro é enxugar gelo.
          </p>
        </div>
      </section>

      {/* 4. SEÇÃO "O 'Solvente' Biológico" */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            O "Solvente" Biológico
          </h2>

          <p className="mt-4 leading-relaxed text-gray-700">
            Uma equipe de bioquímicos e pesquisadores da área de inteligência artificial resolveu atacar o problema pela raiz. A IA analisou 4.500 compostos naturais conhecidos, rejeitou 4.490 deles por baixa biodisponibilidade, efeito isolado ou interação negativa e encontrou uma sinergia de 6 compostos capazes de dissolver a Gosma Tóxica sem agredir o tecido prostático.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            O resultado foi um "solvente biológico" — uma combinação ativa que penetra o biofilme, desagrega as partículas tóxicas e permite que o organismo as elimine de forma natural. Tudo em uma dose de 10 segundos por dia.
          </p>

          <div className="mt-6">
            <ImagePlaceholder label="Imagem: fórmula do solvente biológico" className="h-56" />
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO "O 'Solvente Biológico' Ganhou o nome de Vita Flux" */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            O "Solvente Biológico" Ganhou o nome de Vita Flux
          </h2>

          <div className="mt-6">
            <ImagePlaceholder label="Imagem: frasco e fórmula do Vita Flux" className="h-56" />
          </div>

          <p className="mt-4 leading-relaxed text-gray-700">
            O resultado final de meses de pesquisa: A fórmula estabilizada do Vita Flux pronta para o uso humano.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            Esta é a única fórmula no mundo que preserva fielmente a "Sinergia de 6 Compostos" na dosagem exata, com tecnologia de estabilização que mantém os ativos vivos até chegarem na próstata. Sem ela, os compostos se degradam no estômago e não funcionam.
          </p>
        </div>
      </section>

      {/* 6. DEPOIMENTO JOÃO */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            "Médico Me Disse que a Bolsa de Urina Seria pra Sempre"
          </h2>

          <div className="mt-6">
            <ImagePlaceholder label="Imagem: antes/depois — depoimento João" className="h-56" />
          </div>

          <p className="mt-4 text-sm font-semibold text-gray-600">
            João R., 63 anos, Ribeirão Preto/SP
          </p>

          <blockquote className="mt-4 rounded-lg border-l-4 border-gray-900 bg-white p-4 italic leading-relaxed text-gray-800 shadow-sm sm:p-6">
            <p className="mb-4">
              "Eu tava com 63 anos e já usava bolsa de coleta há 3 meses. Saía de casa escondendo debaixo da roupa. Parei de ir a churrascos, de ver os netos, de sair com minha mulher. Tinha vergonha até de mim mesmo."
            </p>
            <p className="mb-4">
              "Fui no urologista pela última vez esperando uma boa notícia. Ele olhou meus exames, suspirou e disse: 'O senhor precisa se acostumar. Isso é pra vida toda.'"
            </p>
            <p className="mb-4">
              "Saí do consultório no carro e chorei. Com 63 anos, chorei feito criança."
            </p>
            <p className="mb-4">
              "Dois dias depois meu filho me mandou uma matéria sobre o Vita Flux. Eu ri. Falei que era propaganda. Ele insistiu. Tomei por desespero, sem acreditar em nada."
            </p>
            <p className="mb-4">
              "Na segunda semana senti diferença no jato. Na quarta semana fui no médico. Ele olhou o exame e ficou em silêncio por um tempo. Depois disse: 'Não sei o que o senhor fez, mas continue.'"
            </p>
            <p>
              "Hoje não uso mais bolsa. Durmo a noite inteira. Saí no churrasco do meu neto no fim de semana passado."
            </p>
          </blockquote>

          <p className="mt-4 text-lg font-bold text-gray-900">
            "O médico disse que seria pra sempre. Não foi."
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-600">
            — João R., 63 anos, Ribeirão Preto/SP
          </p>
        </div>
      </section>

      {/* 7. DEPOIMENTO ANTÔNIO */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            "Próstata Reduziu 61%. Cirurgia Cancelada."
          </h2>

          <div className="mt-6">
            <ImagePlaceholder label="Imagem: ultrassom próstata depoimento Antônio" className="h-56" />
          </div>

          <p className="mt-4 text-sm font-semibold text-gray-600">
            Antônio S., 67 anos, BH/MG
          </p>

          <blockquote className="mt-4 rounded-lg border-l-4 border-gray-900 bg-white p-4 italic leading-relaxed text-gray-800 shadow-sm sm:p-6">
            <p className="mb-4">
              "Próstata com <span className="font-bold text-red-600">87 gramas</span>. Cirurgia marcada."
            </p>
            <p className="mb-4">
              "Tomei Vita Flux por 60 dias, sem meu médico saber."
            </p>
            <p className="mb-4">
              "Voltei pro médico. Ultrassom mostrou <span className="font-bold text-green-600">34 gramas</span>."
            </p>
            <p className="mb-4">
              "Ele cancelou a cirurgia e disse: 'Não sei o que fez. Mas continue.'"
            </p>
            <p>
              "Continue. Melhor palavra que já ouvi."
            </p>
          </blockquote>

          <p className="mt-4 text-sm font-semibold text-gray-600">
            — Antônio S., 67 anos, Belo Horizonte/MG
          </p>
        </div>
      </section>

      {/* 8. SEÇÃO ESPECIALISTAS */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            O que os Especialistas falam sobre o Tratamento?
          </h2>

          <div className="mt-6">
            <ImagePlaceholder label="Imagem: Dr. Antônio Silva — Urologia" className="h-56" />
          </div>

          <div className="mt-6 rounded-lg bg-white p-4 shadow-sm sm:p-6">
            <p className="font-bold text-gray-900">Dr. Antônio Silva — Urologia — CRM/SP</p>
            <p className="mt-3 italic leading-relaxed text-gray-700">
              "Em 30 anos de urologia nunca indiquei suplemento pra paciente nenhum. O Vita Flux foi o primeiro. Olhei os exames dos meus pacientes e não tinha como negar — a Gosma Tóxica estava regredindo. Não é o que eu queria ver como cirurgião. Mas é o que os exames mostraram."
            </p>
          </div>

          <div className="mt-4 rounded-lg bg-white p-4 shadow-sm sm:p-6">
            <p className="font-bold text-gray-900">Dr. Mario Santos — Urologista do Albert Einstein</p>
            <p className="mt-3 italic leading-relaxed text-gray-700">
              "Fui cético durante muito tempo. Quando um paciente me trouxe o exame mostrando redução de 61% no volume prostático após usar o Vita Flux — achei que era erro do laboratório. Pedi pra repetir. O resultado foi o mesmo. Hoje indico antes de qualquer procedimento invasivo. Não porque quero — porque os exames não me deixam escolha."
            </p>
          </div>
        </div>
      </section>

      {/* 9. SEÇÃO BENEFÍCIOS FLUX */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Benefícios Flux
          </h2>

          <p className="mt-2 text-gray-700">
            Veja o que o Vita Flux faz no seu corpo nos primeiros dias de uso:
          </p>

          <ul className="mt-6 space-y-3 leading-relaxed text-gray-800">
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Devolve o jato forte e constante, eliminando a vergonha de pingar após usar o banheiro.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Aumenta o desejo sexual e a potência, fazendo você se sentir viril como na adolescência.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Dissolve a gosma tóxica, reduzindo o inchaço da próstata e aliviando o desconforto constante.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Melhora a qualidade do sono drasticamente, eliminando as interrupções noturnas para urinar.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Restaura sua energia, confiança e vitalidade masculina de forma natural.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Fortalece o sistema urinário e protege contra novos aumentos e o risco de cirurgia.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 10. SEÇÃO GARANTIA */}
      <section className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-xl font-bold sm:text-2xl">
            Garantia para nossos Leitores de 180 Dias
          </h2>

          <div className="mt-6">
            <ImagePlaceholder label="Imagem: selo garantia 180 dias" className="mx-auto h-40 w-40" />
          </div>

          <p className="mt-6 leading-relaxed text-gray-300">
            Muitos homens já gastaram o seu rico dinheirinho com produtos ruins que não fazem o que prometem.
          </p>

          <p className="mt-4 leading-relaxed text-gray-300">
            Pensando nisso, criamos a Garantia Flux, que protege você por 180 dias completos.
          </p>

          <p className="mt-4 text-lg font-bold text-white">
            Por isso, você está BLINDADO pela Garantia Flux de 180 dias.
          </p>

          <p className="mt-4 leading-relaxed text-gray-300">
            Sem questionamentos, sem complicações. Ou o Vita Flux resolve, ou você recebe TODO o seu rico dinheirinho de volta.
          </p>
        </div>
      </section>

      {/* 11. SEÇÃO "Quanto Custa?" (SEM PREÇOS) */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Quanto Custa?
          </h2>

          <p className="mt-2 font-semibold text-gray-700">
            Oportunidade Especial Para Nossos Leitores
          </p>

          <div className="mt-6">
            <ImagePlaceholder label="Imagem: produto Vita Flux em destaque" className="h-64" />
          </div>

          <p className="mt-6 leading-relaxed text-gray-700">
            O Vita Flux é extremamente raro. A tecnologia necessária para estabilizar a Sinergia de 6 Componentes exige um processo laboratorial lento e de altíssima precisão.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            Devido à complexidade de extração dos ativos puros, o laboratório só consegue liberar lotes pequenos de 500 frascos a cada trimestre.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            Ainda restam apenas <span className="font-bold text-red-600">34 frascos</span>, que devem se esgotar nas próximas horas.
          </p>

          <p className="mt-6 rounded-lg bg-red-50 py-3 font-bold text-red-700">
            ÚLTIMAS 34 UNIDADES COM DESCONTO
          </p>

          <p className="mt-4 font-semibold text-gray-700">
            Desconto válido nesta quinta-feira, 18/06/2026
          </p>

          <div className="mt-6">
            <CtaButton className="w-full text-lg sm:w-auto">
              QUERO VITA FLUX AGORA!
            </CtaButton>
          </div>

          <p className="mt-4 font-bold text-gray-900">
            ESSA PROMOÇÃO SÓ É VÁLIDA PARA OS NOSSOS LEITORES!
          </p>

          <p className="mt-4 text-sm font-semibold text-gray-600">
            DEVIDO À COMPLEXIDADE DE PRODUÇÃO LABORATORIAL, NÃO SABEMOS ATÉ QUANDO TERÁ ESTOQUE.
          </p>
        </div>
      </section>

      {/* 12. COMENTÁRIOS */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h3 className="text-lg font-bold text-gray-900">108 Comentários</h3>

          <p className="mt-2 text-sm text-gray-500">
            Os comentários são de responsabilidade exclusiva de seus autores e não representam a opinião deste site.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">Roberto Ferreira</span>
                <span className="text-sm text-gray-500">Há 2 horas</span>
              </div>
              <p className="mt-2 text-gray-700">
                Tomei achando que era mais uma enganação. Na terceira semana acordei e percebi que não tinha levantado de madrugada. Fui pro banheiro e o jato voltou. Fiquei parado olhando pro espelho sem acreditar. 👏
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">Antônio Nascimento</span>
                <span className="text-sm text-gray-500">Há 1 dia</span>
              </div>
              <p className="mt-2 text-gray-700">
                21 dias de uso. Fui no médico esperando marcar a cirurgia. Ele olhou o ultrassom e perguntou o que eu tinha feito diferente. PSA normalizou. Próstata reduziu 67%. Cirurgia cancelada. 🔥
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">Sérgio Cavalcanti</span>
                <span className="text-sm text-gray-500">Há 1 dia</span>
              </div>
              <p className="mt-2 text-gray-700">
                Comprei desconfiado. Minha esposa que insistiu. Em 45 dias ela voltou a dormir no mesmo quarto — porque eu parei de levantar toda hora. Detalhe pequeno pra quem nunca passou por isso. Enorme pra quem passou. ❤️
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">Luiz Henrique Borges</span>
                <span className="text-sm text-gray-500">Há 3 dias</span>
              </div>
              <p className="mt-2 text-gray-700">
                5 anos tomando Tamsulosina. Gastei mais de R$4.000. Nada resolveu de verdade. Com Vita Flux em 30 dias o jato voltou. Se eu soubesse antes... 💪
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="border-t bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <nav className="flex flex-wrap justify-center gap-3 text-sm text-blue-600">
            <a href="#" className="hover:underline">Bem-Estar</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">Princípios Editoriais</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">Termos de Uso</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">Fale Conosco</a>
          </nav>

          <p className="mt-4 text-sm text-gray-600">
            © Copyright 2011-2025 — Todos os direitos reservados
          </p>

          <p className="mt-4 text-xs font-bold text-gray-500">
            ESTE PRODUTO NÃO É UM MEDICAMENTO.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Artigo;
