import { useEffect, useState, memo } from "react";
import { useTikTokPixel } from "@/hooks/useTikTokPixel";
import { useBackRedirect } from "@/hooks/useBackRedirect";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Eye, MessageSquare, Share2, Facebook, Twitter, Linkedin, Link2, Menu } from "lucide-react";

const GHDdU8LIZI5waXBDJPbTzw = () => {
  useTikTokPixel();
  useBackRedirect("https://dicasdoeduardo.com.br");
  const [currentDate, setCurrentDate] = useState("");
  const [formattedHeaderDate, setFormattedHeaderDate] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "URGENTE: Cirurgião Quebra o Silêncio e Revela o \"Solvente Biológico\" Que Está Esvaziando Salas de Cirurgia de Próstata no Brasil";
    
    const today = new Date();
    const dayNames = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const dayName = dayNames[today.getDay()];
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    setCurrentDate(`${dayName}, ${day}/${month}/${year}`);
    setFormattedHeaderDate(`${today.getDate()} de ${monthNames[today.getMonth()]} de ${year}`);
  }, []);

  const handleCTAClick = () => {
    window.location.href = "https://dicasdoeduardo.com.br";
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* ====== HERO RED BAR — Bem-Estar ====== */}
      <header className="bg-[hsl(4,88%,41%)] text-white">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[80px]">
          <button
            className="flex items-center gap-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="w-7 h-7" />
            <span className="text-sm font-bold uppercase tracking-wider hidden sm:inline">Menu</span>
          </button>

          <div className="flex-1 text-center">
            <span className="text-white font-black text-2xl md:text-3xl uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Bem-Estar
            </span>
          </div>

          {/* Spacer to keep title centered */}
          <div className="w-7" />
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-[hsl(0,0%,15%)] border-t border-[hsl(0,0%,90%)]">
            {["Início", "Saúde Masculina", "Urologia", "Pesquisas", "Opinião"].map((item, i) => (
              <span
                key={i}
                className={`block px-5 py-3 text-sm font-bold cursor-pointer border-b border-[hsl(0,0%,93%)] ${
                  item === "Urologia" ? "text-[hsl(4,88%,41%)]" : ""
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* ====== MAIN CONTENT ====== */}
      <main className="max-w-[1200px] mx-auto px-4 pt-10 pb-12">
        <div className="max-w-[760px] mx-auto">

          {/* ====== ARTICLE ====== */}
          <article className="min-w-0">

            {/* ====== HEADLINE AREA — g1 style ====== */}
            <header className="mb-8">
              <h1 className="text-[2rem] md:text-[2.75rem] lg:text-[3rem] font-black text-[hsl(0,0%,7%)] leading-[1.08] mb-6 tracking-[-0.015em]" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <span className="text-red-600">URGENTE:</span> Cirurgião Quebra o Silêncio e Revela o "Solvente Biológico" Que Está Esvaziando Salas de Cirurgia de Próstata no Brasil
              </h1>

              <p className="text-lg md:text-xl text-[hsl(0,0%,30%)] leading-[1.45] mb-8">
                10 segundos por dia. É o tempo que homens entre 40 e 75 anos estão usando para dissolver a "Gosma Tóxica" da próstata, voltar a urinar como aos 20, recuperar a ereção e cancelar cirurgias já agendadas. Sem remédio tarja preta. Sem efeitos colaterais.
              </p>

              {/* Author + Date — plain g1 style */}
              <div className="text-[hsl(0,0%,15%)] mb-1">
                <span className="font-bold text-[15px]">Por Dr. Rafael Mendes</span>
                <span className="text-[hsl(0,0%,45%)] text-[15px]"> — Rio de Janeiro</span>
              </div>
              <div className="text-[hsl(0,0%,45%)] text-[13px] mb-6">
                <span className="capitalize">{formattedHeaderDate}</span> 04h02 · Atualizado há 23 minutos
              </div>

              {/* g1-style big share chips: Facebook + WhatsApp */}
              <div className="grid grid-cols-2 gap-3 mb-2">
                <button className="flex items-center justify-center gap-2 bg-[hsl(0,0%,96%)] hover:bg-[hsl(0,0%,92%)] text-[hsl(220,46%,48%)] py-3 rounded-md transition-colors">
                  <Facebook className="w-5 h-5 fill-current" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-[hsl(0,0%,96%)] hover:bg-[hsl(0,0%,92%)] text-[hsl(142,70%,40%)] py-3 rounded-md transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center justify-end gap-3 text-xs text-[hsl(0,0%,50%)] pt-3">
                <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> 147.832 leituras</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 8 min</span>
              </div>
            </header>
            <div className="border border-[hsl(0,0%,90%)] bg-[hsl(0,0%,98%)] p-4 mb-8 rounded-sm">
              <p className="text-xs text-[hsl(0,0%,50%)] mb-3 uppercase tracking-[0.12em] font-semibold">Publicado também em:</p>
              <img 
                src="/detergente/adv-portais.webp" 
                alt="Portais de notícias" 
                className="mx-auto max-w-full h-auto"
                loading="eager"
                decoding="async"
                width="760"
                height="80"
              />
            </div>

            {/* ====== ARTICLE BODY ====== */}
            <div className="article-body" style={{ color: 'hsl(0,0%,15%)', lineHeight: '1.8em' }}>

              {/* Section 1 */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-[hsl(0,82%,43%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  Isso MATA sua Próstata em Silêncio
                </h2>
              </div>

              <figure className="mb-6">
                <img src="/detergente/isso-mata-prostata-v2.webp" alt="Isso MATA sua Próstata em Silencio - Gosma Tóxica" className="w-full md:rounded-sm" loading="lazy" decoding="async" width="800" height="450" />
                <figcaption className="text-sm text-[hsl(0,0%,50%)] mt-2 px-4 md:px-0">76% dos homens acima de 50 anos sofrem com isso silenciosamente</figcaption>
              </figure>

              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-6">
                Se você <strong>passou dos 40</strong>, vou te revelar algo que nenhum médico explica claramente e <strong>não tem absolutamente nada a ver com 'idade'</strong>.
              </p>

              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-6">
                A verdadeira causa dos seus problemas urinários, do jato fraco e até da queda na potência é uma <strong>ameaça invisível</strong> que vem se acumulando dentro do seu corpo há décadas.
              </p>

              <div className="bg-[hsl(200,20%,96%)] border-l-[4px] border-[hsl(200,60%,45%)] px-4 sm:px-5 py-5 my-8 rounded-r-sm">
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] break-words">
                  Aquele <strong>copinho plástico</strong> do café que você tomou hoje de manhã. A <strong>embalagem</strong> do almoço. A <strong>garrafa pet</strong> de água. Cada um deles libera dentro do seu corpo partículas microscópicas chamadas <strong>microplásticos</strong>, e o seu corpo simplesmente não consegue <strong>eliminar</strong>.
                </p>
              </div>

              <aside className="bg-[hsl(45,40%,96%)] border border-[hsl(45,50%,80%)] rounded-md px-4 py-3 my-6 text-sm md:text-base leading-relaxed text-[hsl(0,0%,30%)]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[hsl(0,0%,45%)]">📄 Estudo científico</span>
                </div>
                <p className="break-words">
                  Estudo publicado no <strong>PubMed</strong> confirma a presença de microplásticos diretamente no <strong>tecido prostático humano</strong>.{' '}
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11092166/" target="_blank" rel="noopener noreferrer" className="text-[hsl(200,60%,40%)] underline break-all">
                    Ver estudo →
                  </a>
                </p>
              </aside>

              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-6">
                Esse acúmulo se transforma numa substância densa e pegajosa que os cientistas estão chamando de <strong>'Gosma Tóxica'</strong>.
              </p>

              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-6">
                Imagine um <strong>cano velho entupido</strong> de gordura dura. <strong>É exatamente isso que está grudado na sua próstata neste momento.</strong>
              </p>

              <figure className="mb-6">
                <img src="/detergente/ameaca-invisivel-prostata.webp" alt="Próstata saudável vs Gosma Tóxica acumulada - A ameaça invisível" className="w-full md:rounded-sm" loading="lazy" />
                <figcaption className="text-sm text-[hsl(0,0%,50%)] mt-2 px-4 md:px-0">Representação microscópica do 'Gosma Tóxica': o cimento biológico que endurece a próstata e esmaga a uretra.</figcaption>
              </figure>

              {/* Callout box - CNN style quote block */}
              <div className="bg-[hsl(0,0%,96%)] border-l-[3px] border-[hsl(0,82%,43%)] px-5 py-5 my-8 text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9]">
                <p className="mb-3">Essa gosma age como <strong>cimento fresco</strong>. Ela entope os microcanais, a pressão interna sobe e a próstata <strong>incha descontroladamente</strong>, apertando a uretra como um alicate.</p>
                <p>O resultado? O <strong>jato trava</strong> e força sua bexiga a virar um <strong>reservatório perigoso</strong> de líquido parado.</p>
              </div>

              {/* Symptoms */}
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Os primeiros sinais são fáceis de reconhecer:</p>
              <ul className="space-y-4 mb-8 pl-0 list-none">
                {[
                  "Acordar <strong>2, 3 ou mais vezes</strong> por noite;",
                  "Sentir o jato falhando ou saindo em <strong>gotas</strong>;",
                  "Sofrer com o <strong>pinga-pinga na cueca</strong>;",
                  "Perceber a <strong>potência sexual caindo</strong> sem explicação."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9]">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[hsl(0,82%,43%)] text-white flex items-center justify-center text-sm font-bold mt-0.5">{i+1}</span>
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                  </li>
                ))}
              </ul>

              {/* Alert - CNN Breaking style */}
              <div className="relative bg-[hsl(0,100%,98%)] border border-[hsl(0,82%,43%)] rounded-sm p-6 my-8">
                <div className="absolute -top-3 left-5 bg-[hsl(0,82%,43%)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  Alerta Médico
                </div>
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-3 mt-2">
                  E o pior: quando o Gosma Tóxica toma conta, sua próstata inflamada e desesperada começa a <strong>roubar sua testosterona</strong> para tentar controlar o dano.
                </p>
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-3">
                  É uma <strong>castração silenciosa</strong> que derruba o desejo, mata a ereção e rouba sua energia dia após dia.
                </p>
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] font-bold">
                  Ignorar isso agora não é "esperar melhorar". É correr risco real de <strong>impotência permanente</strong> e até encarar uma <strong>cirurgia</strong> que muitos homens preferem nem imaginar.
                </p>
              </div>

              {/* Section 2 */}
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-1 h-8 bg-[hsl(0,82%,43%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  Afinal: É Bactéria? Genética? Idade? Estresse? Gosma Tóxica?
                </h2>
              </div>

              <figure className="mb-6">
                <img src="/detergente/bacteria-ou-gosma-toxica-v2.webp" alt="Bactéria, Genética, Idade, Estresse ou Gosma Tóxica?" className="w-full md:rounded-sm" loading="lazy" />
                <figcaption className="text-sm text-[hsl(0,0%,50%)] mt-2 px-4 md:px-0">Bactéria, genética, idade, estresse, hormônio: todas explicações que tratam o sintoma. A verdadeira causa por trás de tudo é a Gosma Tóxica acumulada na próstata.</figcaption>
              </figure>

              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Nos últimos anos você provavelmente já ouviu de tudo:</p>
              <div className="space-y-3 mb-6 ml-2 md:ml-4">
                <p className="text-[hsl(0,0%,25%)] text-lg md:text-xl leading-[1.8] pl-4 border-l-2 border-[hsl(0,0%,75%)] italic">
                  “É a bactéria prostática.”
                </p>
                <p className="text-[hsl(0,0%,25%)] text-lg md:text-xl leading-[1.8] pl-4 border-l-2 border-[hsl(0,0%,75%)] italic">
                  “É genético, seu pai tinha.”
                </p>
                <p className="text-[hsl(0,0%,25%)] text-lg md:text-xl leading-[1.8] pl-4 border-l-2 border-[hsl(0,0%,75%)] italic">
                  “É a idade, normal depois dos 50.”
                </p>
                <p className="text-[hsl(0,0%,25%)] text-lg md:text-xl leading-[1.8] pl-4 border-l-2 border-[hsl(0,0%,75%)] italic">
                  “É o estresse.”
                </p>
                <p className="text-[hsl(0,0%,25%)] text-lg md:text-xl leading-[1.8] pl-4 border-l-2 border-[hsl(0,0%,75%)] italic">
                  “É hormônio.”
                </p>
              </div>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">E sabe o que todas essas explicações têm em comum?</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5"><strong>Nenhuma resolve.</strong> Você trata a bactéria com antibiótico, ela volta. Aceita que é idade, piora. Toma remédio pra hormônio, efeito colateral.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Porque todas estão atacando o <strong>sintoma</strong>. Nenhuma está atacando a <strong>causa real</strong>.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">A verdade que ninguém conectou ainda: a <strong>Gosma Tóxica</strong> é o ambiente que permite que tudo isso aconteça. A bactéria não sobrevive sem ela. A inflamação não se instala sem ela. Até a genética só se manifesta quando esse ambiente tóxico está presente.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Sem a <strong>Gosma Tóxica</strong>, a bactéria <strong>morre de fome</strong>. A inflamação <strong>some</strong>. O inchaço <strong>regride</strong>.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-8">Tratar qualquer outra coisa sem dissolver a Gosma primeiro é <strong>enxugar gelo</strong>.</p>

              {/* Section 3 */}
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-1 h-8 bg-[hsl(0,82%,43%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  O "Solvente" Biológico
                </h2>
              </div>

              <figure className="mb-6">
                <img src="/detergente/detergente-acao.webp" alt="Detergente biológico em ação" className="w-full md:rounded-sm" loading="lazy" />
                <figcaption className="text-sm text-[hsl(0,0%,50%)] mt-2 px-4 md:px-0">O 'Solvente Biológico' em ação: dissolvendo o gosma tóxica e liberando o caminho para um fluxo urinário forte.</figcaption>
              </figure>

              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Uma vez que os cientistas entenderam que o inimigo não era a idade, mas sim esse <strong>Gosma Tóxica</strong> endurecendo a próstata, a missão mudou.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Eles perceberam que <strong>não precisavam de mais "remédios para encolher"</strong> o órgão. Eles precisavam de algo capaz de <strong>dissolver a sujeira</strong>.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Foi aí que entrou a <strong>Inteligência Artificial</strong>.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Em 2024, pesquisadores alimentaram um supercomputador com dados de mais de 4.500 compostos naturais, buscando algo que agisse especificamente contra a estrutura molecular desse lodo prostático.</p>

              <div className="bg-[hsl(140,30%,96%)] border-l-[3px] border-[hsl(140,50%,35%)] px-5 py-5 my-8 text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] font-semibold">
                A IA rejeitou 4.490 opções. O sistema identificou que nenhum ingrediente sozinho era forte o suficiente. Porém, uma <strong>Sinergia Exata de 6 Compostos Raros</strong> acendeu a luz verde.
              </div>

              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-8">Os dados mostraram que, quando esses <strong>6 nutrientes atuam em conjunto</strong>, eles criam uma reação bioquímica massiva, agindo exatamente como um <strong>"Solvente Biológico"</strong> de alta potência.</p>

              {/* Section 4 */}
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-1 h-8 bg-[hsl(0,82%,43%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  Muitos Chamam de Cura, Mas a Medicina Explica
                </h2>
              </div>

              <figure className="mb-6">
                <img src="/detergente/antes-depois-ultrassom.webp" alt="Antes e depois ultrassom da próstata" className="w-full md:rounded-sm" loading="lazy" />
                <figcaption className="text-sm text-[hsl(0,0%,50%)] mt-2 px-4 md:px-0">Fig 3. Prova Clínica: Próstata estava com 178 mililitros e reduziu para 22 mililitros — uma redução de 87% em 90 dias após o protocolo de varredura do lodo.</figcaption>
              </figure>

              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Levada ao laboratório, essa <strong>Sinergia de 6 Componentes</strong> foi totalmente dissecada. Os testes revelaram que não é mágica, é <strong>bioquímica pura</strong>.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Esses compostos, quando <strong>combinados na proporção exata</strong> e absorvidos pelo organismo, ativam o que os cientistas chamam de <strong>"varredura celular"</strong>.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-8">Ao limpar a próstata, a fórmula destrava a produção hormonal, <strong>liberando naturalmente a testosterona</strong> que estava bloqueada. O resultado? O retorno da energia física, <strong>ereções firmes como rocha</strong> e a potência sexual de anos atrás.</p>

              {/* Section 5 - Vita Flux */}
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-1 h-8 bg-[hsl(0,82%,43%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  O "Solvente Biológico" Ganhou o nome de Vita Flux
                </h2>
              </div>

              <figure className="mb-6">
                <img src="/detergente/vita-flux-formula.webp" alt="Fórmula do Vita Flux" className="w-full md:rounded-sm" loading="lazy" />
                <figcaption className="text-sm text-[hsl(0,0%,50%)] mt-2 px-4 md:px-0">O resultado final de meses de pesquisa: A fórmula estabilizada do Vita Flux pronta para o uso humano.</figcaption>
              </figure>

              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">O que antes era apenas um algoritmo em uma tela de computador, agora se tornou a <strong>arma mais potente</strong> contra os problemas de próstata já vista pela ciência moderna.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Nascia assim o <strong>Vita Flux</strong>.</p>
              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-8">Esta é a única fórmula no mundo que preserva fielmente a <strong>"Sinergia de 6 Compostos"</strong> descoberta pela Inteligência Artificial, garantindo que o seu corpo receba a dosagem exata para <strong>derreter o lodo</strong>, aliviar a pressão na glândula e devolver o jato forte da juventude.</p>

              {/* Testimonial - João R. */}
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-1 h-8 bg-[hsl(0,0%,35%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  "Médico Me Disse que a Bolsa de Urina Seria pra Sempre"
                </h2>
              </div>

              <figure className="mb-6">
                <img src="/detergente/joao-antes-depois-v2.webp" alt="Antes e depois de João R., 63 anos — da bolsa de urina ao churrasco com os netos após o Vita Flux" className="w-full md:rounded-sm" loading="lazy" />
                <figcaption className="text-sm text-[hsl(0,0%,50%)] mt-2 px-4 md:px-0">João R., 63 anos: o antes e depois após o uso do Vita Flux</figcaption>
              </figure>

              <blockquote className="border-l-[3px] border-[hsl(0,0%,70%)] bg-[hsl(0,0%,97%)] px-5 py-5 my-8 italic text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9]">
                <p className="mb-3">"Eu tava com <strong>63 anos</strong> e já usava <strong>bolsa de coleta há 3 meses</strong>. Saía de casa escondendo debaixo da roupa. Parei de ir a churrascos, de ver os netos, de sair com minha mulher. <strong>Tinha vergonha até de mim mesmo.</strong>"</p>
                <p className="mb-3">"Fui no urologista pela última vez esperando uma boa notícia. Ele olhou meus exames, suspirou e disse: <strong>'O senhor precisa se acostumar. Isso é pra vida toda.'</strong>"</p>
                <p className="mb-3">"Saí do consultório no carro e chorei. <strong>Com 63 anos, chorei feito criança.</strong>"</p>
                <p className="mb-3">"Dois dias depois meu filho me mandou uma matéria sobre o <strong>Vita Flux</strong>. Eu ri. Falei que era propaganda. Ele insistiu. <strong>Tomei por desespero</strong>, sem acreditar em nada."</p>
                <p className="mb-3">"Na <strong>segunda semana</strong> senti diferença no jato. Na <strong>quarta semana</strong> fui no médico. Ele olhou o exame e ficou em silêncio por um tempo. Depois disse: <strong>'Não sei o que o senhor fez, mas continue.'</strong>"</p>
                <p className="mb-3">"Hoje <strong>não uso mais bolsa</strong>. <strong>Durmo a noite inteira</strong>. Saí no <strong>churrasco do meu neto</strong> no fim de semana passado."</p>
                <p className="mb-3"><strong>"O médico disse que seria pra sempre. Não foi."</strong></p>
                <p className="not-italic text-sm text-[hsl(0,0%,50%)] mt-4">— João R., 63 anos, Ribeirão Preto/SP</p>
              </blockquote>


              {/* Testimonial - Dr Rey */}
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-1 h-8 bg-[hsl(0,0%,35%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  "Próstata Reduziu 61%. Cirurgia Cancelada."
                </h2>
              </div>

              <figure className="mb-6">
                <img src="/detergente/antonio-prostata-reducao.webp" alt="Antônio S. mostrando ultrassom da próstata antes (87g) e depois (34g) do Vita Flux" className="w-full md:rounded-sm" loading="eager" />
                <figcaption className="text-sm text-[hsl(0,0%,50%)] mt-2 px-4 md:px-0">Antônio S., 67 anos: ultrassom comprova redução de 87g para 34g após 60 dias de Vita Flux</figcaption>
              </figure>

              <blockquote className="border-l-[3px] border-[hsl(0,0%,70%)] bg-[hsl(0,0%,97%)] px-5 py-5 my-8 italic text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9]">
                <p className="mb-3">"Próstata com <strong>87 gramas</strong>. <strong>Cirurgia marcada</strong>."</p>
                <p className="mb-3">"Tomei <strong>Vita Flux por 60 dias</strong>, sem meu médico saber."</p>
                <p className="mb-3">"Voltei pro médico. Ultrassom mostrou <strong>34 gramas</strong>."</p>
                <p className="mb-3">"Ele <strong>cancelou a cirurgia</strong> e disse: <strong>'Não sei o que fez. Mas continue.'</strong>"</p>
                <p className="mb-3">"Continue. <strong>Melhor palavra que já ouvi.</strong>"</p>
                <p className="not-italic text-sm text-[hsl(0,0%,50%)] mt-4">— Antônio S., 67 anos, Belo Horizonte/MG</p>
              </blockquote>

              {/* Especialistas */}
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-1 h-8 bg-[hsl(210,70%,45%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  O que os Especialistas falam sobre o Tratamento?
                </h2>
              </div>

              <figure className="mb-6">
                <img src="/detergente/dr-antonio-silva.webp" alt="Dr. Antônio Silva — Urologista — CRM/SP segurando o Vita Flux" className="w-full md:rounded-sm" loading="lazy" />
                <figcaption className="text-sm text-[hsl(0,0%,50%)] mt-2 px-4 md:px-0">Dr. Antônio Silva, urologista, comenta sobre a eficácia do Vita Flux (Fonte: G1)</figcaption>
              </figure>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-[hsl(0,0%,90%)] rounded-sm overflow-hidden">
                  <div className="bg-[hsl(210,70%,45%)] text-white text-xs font-bold uppercase tracking-wider px-4 py-2">
                    Dr. Antônio Silva — Urologia — CRM/SP
                  </div>
                  <div className="p-5">
                    <p className="text-[hsl(0,0%,15%)] leading-[1.85] italic text-xl">
                      "Em <strong>30 anos de urologia nunca indiquei suplemento</strong> pra paciente nenhum. <strong>O Vita Flux foi o primeiro.</strong> Olhei os exames dos meus pacientes e não tinha como negar — <strong>a Gosma Tóxica estava regredindo</strong>. Não é o que eu queria ver como cirurgião. <strong>Mas é o que os exames mostraram.</strong>"
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-[hsl(0,0%,90%)] rounded-sm overflow-hidden">
                  <div className="bg-[hsl(210,70%,45%)] text-white text-xs font-bold uppercase tracking-wider px-4 py-2">
                    Dr. Mario Santos — Urologista do Albert Einstein
                  </div>
                  <div className="p-5">
                    <p className="text-[hsl(0,0%,15%)] leading-[1.85] italic text-xl">
                      "Fui cético durante muito tempo. Quando um paciente me trouxe o exame mostrando <strong>redução de 61% no volume prostático</strong> após usar o Vita Flux — achei que era erro do laboratório. <strong>Pedi pra repetir. O resultado foi o mesmo.</strong> Hoje indico <strong>antes de qualquer procedimento invasivo</strong>. Não porque quero — <strong>porque os exames não me deixam escolha.</strong>"
                    </p>
                  </div>
                </div>
              </div>


              {/* Benefits */}
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-1 h-8 bg-[hsl(140,50%,35%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  Benefícios Flux
                </h2>
              </div>

              <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-5">Veja o que o Vita Flux faz no seu corpo <strong>nos primeiros dias de uso:</strong></p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Devolve o **jato forte e constante**, eliminando a vergonha de pingar após usar o banheiro.",
                  "Aumenta o **desejo sexual** e a **potência**, fazendo você se sentir **viril** como na adolescência.",
                  "Dissolve o **gosma tóxica**, reduzindo o **inchaço da próstata** e aliviando o desconforto constante.",
                  "Melhora a **qualidade do sono** drasticamente, eliminando as interrupções noturnas para urinar.",
                  "Restaura sua **energia**, **confiança** e **vitalidade masculina** de forma natural.",
                  "Fortalece o **sistema urinário** e protege contra **novos aumentos e o risco de cirurgia**."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[hsl(140,25%,96%)] border border-[hsl(140,30%,88%)] rounded-sm p-4">
                    <CheckCircle2 className="text-[hsl(140,50%,35%)] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-[hsl(0,0%,15%)] text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-1 h-8 bg-[hsl(45,80%,45%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  Garantia para nossos Leitores de 180 Dias
                </h2>
              </div>

              <figure className="mb-6">
                <img src="/detergente/vita-flux-garantia-180dias.webp" alt="Vita Flux Garantia 180 dias" className="w-full max-w-sm mx-auto rounded-sm" loading="lazy" />
                <figcaption className="text-sm text-[hsl(0,0%,50%)] mt-2 text-center">O Vita Flux lhe dá garantia total do seu investimento por 180 dias de uso.</figcaption>
              </figure>

              <div className="bg-[hsl(0,0%,97%)] border border-[hsl(0,0%,90%)] rounded-sm p-6 my-6">
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-3">Muitos homens já gastaram o seu <strong>rico dinheirinho</strong> com produtos ruins que não fazem o que prometem.</p>
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-3">Pensando nisso, criamos a <strong>Garantia Flux</strong>, que protege você por <strong>180 dias completos</strong>.</p>
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-3">Por isso, você está <strong>BLINDADO pela Garantia Flux de 180 dias</strong>.</p>
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] font-bold">Sem questionamentos, sem complicações. Ou o <strong>Vita Flux resolve</strong>, ou você recebe <strong>TODO o seu rico dinheirinho de volta</strong>.</p>
              </div>

              {/* Pricing Section */}
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-1 h-8 bg-[hsl(0,82%,43%)] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-black text-[hsl(0,82%,43%)] leading-tight">
                  Quanto Custa?
                </h2>
              </div>

              <h3 className="text-lg font-bold text-[hsl(0,0%,10%)] mb-5">
                Oportunidade Especial Para Nossos Leitores do nosso Blog
              </h3>

              <div className="relative bg-[hsl(0,100%,98%)] border border-[hsl(0,82%,43%)] rounded-sm p-6 my-6">
                <div className="absolute -top-3 left-5 bg-[hsl(0,82%,43%)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  Exclusivo
                </div>
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-3 mt-2">O <strong>Vita Flux</strong> é extremamente raro. A tecnologia necessária para <strong>estabilizar a Sinergia de 6 Componentes</strong> exige um processo laboratorial lento e de altíssima precisão.</p>
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] mb-3">Devido à complexidade de extração dos ativos puros, o laboratório só consegue liberar <strong>lotes pequenos de 500 frascos</strong> a cada trimestre.</p>
                <p className="text-[hsl(0,0%,15%)] text-xl md:text-2xl leading-[1.9] font-bold">Ainda restam apenas <strong>34 frascos</strong>, que devem se esgotar nas próximas horas.</p>
              </div>

              <figure className="mb-6">
                <a href="https://vita-flux.shop">
                  <img src="/detergente/vita-flux-florest.png" alt="Vita Flux Suplemento Natural" className="w-full md:rounded-sm cursor-pointer" loading="lazy" />
                </a>
              </figure>

              {/* CTA - CNN-inspired clean card */}
              <div className="text-center my-10 bg-[hsl(0,0%,7%)] rounded-sm p-8 md:p-10">
                <p className="text-[hsl(0,82%,53%)] text-xs font-bold uppercase tracking-[0.2em] mb-3">Oferta por tempo limitado</p>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  ÚLTIMAS 34 UNIDADES COM DESCONTO
                </h3>
                <p className="text-[hsl(0,0%,55%)] mb-6 text-base">
                  Desconto válido nesta {currentDate}
                </p>
                <Button 
                  onClick={handleCTAClick}
                  className="add-desejo bg-[hsl(142,70%,35%)] hover:bg-[hsl(142,70%,30%)] text-white text-lg md:text-2xl font-black py-5 md:py-7 px-8 md:px-14 rounded-sm shadow-lg animate-[subtlePulse_3s_ease-in-out_infinite] w-full md:w-auto uppercase tracking-wide"
                >
                  QUERO VITA FLUX AGORA!
                </Button>
              </div>

              <div className="bg-[hsl(0,82%,43%)] text-white text-center py-3 rounded-sm my-6">
                <p className="font-bold text-base md:text-lg uppercase tracking-wide">ESSA PROMOÇÃO SÓ É VÁLIDA PARA OS NOSSOS LEITORES!</p>
              </div>

              <div className="bg-[hsl(45,80%,95%)] border border-[hsl(45,80%,70%)] rounded-sm p-5 my-6">
                <p className="text-xs font-bold text-[hsl(0,0%,35%)] uppercase tracking-wider mb-1">Importante</p>
                <p className="text-[hsl(0,0%,15%)] font-semibold text-lg">DEVIDO À COMPLEXIDADE DE PRODUÇÃO LABORATORIAL, NÃO SABEMOS ATÉ QUANDO TERÁ ESTOQUE.</p>
              </div>
            </div>

            {/* ====== COMMENTS ====== */}
            <div className="border-t border-[hsl(0,0%,88%)] pt-8 mt-12">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-5 h-5 text-[hsl(0,82%,43%)]" />
                <h3 className="text-lg font-black text-[hsl(0,0%,7%)]"><strong>108</strong> Comentários</h3>
              </div>
              <p className="text-xs text-[hsl(0,0%,55%)] mb-8">Os comentários são de responsabilidade exclusiva de seus autores e não representam a opinião deste site.</p>

              <div className="space-y-0">
                {[
                  { name: "Roberto Ferreira", img: "/detergente/fb-depo1.jpg", commentImg: "/detergente/vita-flux-mao-comentario.png", text: "Tomei achando que era mais uma enganação. Na terceira semana acordei e percebi que não tinha levantado de madrugada. Fui pro banheiro e o jato voltou. Fiquei parado olhando pro espelho sem acreditar. 👏", time: "Há 2 horas" },
                  { name: "Antônio Nascimento", img: "/detergente/fb-depo2.jpg", text: "21 dias de uso. Fui no médico esperando marcar a cirurgia. Ele olhou o ultrassom e perguntou o que eu tinha feito diferente. PSA normalizou. Próstata reduziu 67%. Cirurgia cancelada. 🔥", time: "Há 1 dia" },
                  { name: "Sérgio Cavalcanti", img: "/detergente/fb-depo3.jpg", text: "Comprei desconfiado. Minha esposa que insistiu. Em 45 dias ela voltou a dormir no mesmo quarto — porque eu parei de levantar toda hora. Detalhe pequeno pra quem nunca passou por isso. Enorme pra quem passou. ❤️", time: "Há 1 dia" },
                  { name: "Luiz Henrique Borges", img: "/detergente/fb-depo4.jpg", text: "5 anos tomando Tamsulosina. Gastei mais de R$4.000. Nada resolveu de verdade. Com Vita Flux em 30 dias o jato voltou. Se eu soubesse antes... 💪", time: "Há 3 dias" },
                ].map((c, i) => (
                  <div key={i} className={`flex gap-4 py-5 ${i < 3 ? 'border-b border-[hsl(0,0%,92%)]' : ''}`}>
                    <img src={c.img} alt={c.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" loading="lazy" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h4 className="font-bold text-[hsl(0,0%,7%)] text-sm">{c.name}</h4>
                        <span className="text-xs text-[hsl(0,0%,55%)]">{c.time}</span>
                      </div>
                      {c.commentImg && <img src={c.commentImg} alt="Comentário" className="w-full max-w-xs rounded-sm mb-2" loading="lazy" />}
                      <p className="text-[hsl(0,0%,20%)] text-lg leading-relaxed">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-[hsl(0,0%,50%)] text-sm mt-6 pt-5 border-t border-[hsl(0,0%,92%)]">
                Este conteúdo não recebe mais comentários
              </p>
            </div>
          </article>
        </div>
      </main>

      {/* ====== FOOTER ====== */}
      <footer className="bg-[hsl(4,88%,41%)] text-white/90 mt-12">
        <div className="max-w-[1200px] mx-auto px-4 py-10">
          <div className="flex flex-col items-center gap-5 text-center">
            <span className="text-white font-black text-lg uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Bem-Estar
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
              <span className="hover:text-white cursor-pointer">Princípios Editoriais</span>
              <span className="hover:text-white cursor-pointer">Política de Privacidade</span>
              <span className="hover:text-white cursor-pointer">Termos de Uso</span>
              <span className="hover:text-white cursor-pointer">Fale Conosco</span>
            </div>
            <div className="border-t border-white/20 w-full pt-5 text-xs">
              © Copyright 2011-2025 — Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GHDdU8LIZI5waXBDJPbTzw;
