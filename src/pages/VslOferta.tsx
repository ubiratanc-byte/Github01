import { useEffect, useState } from "react";
import banner5 from "@/assets/vsl-banner-5.webp";
import banner3 from "@/assets/vsl-banner-3.webp";
import banner1 from "@/assets/vsl-banner-1.webp";
import { trackInitiateCheckout } from "../App";

const CTA_LINKS = [
  {
    alt: "5 Potes — Mais Popular — 12x R$39,86",
    image: banner5,
    href: "https://ev.braip.com/campanhas/cpa/camgmryo7",
    value: 397,
    label: "Kit 5 Frascos - VSL",
  },
  {
    alt: "3 Potes — 12x R$29,82",
    image: banner3,
    href: "https://ev.braip.com/campanhas/cpa/camm7ezj5",
    value: 297,
    label: "Kit 3 Frascos - VSL",
  },
  {
    alt: "1 Pote — 12x R$19,78",
    image: banner1,
    href: "https://ev.braip.com/campanhas/cpa/cam8md4n8",
    value: 197,
    label: "Kit 1 Frasco - VSL",
  },
];

const PLAYER_SRC =
  "https://scripts.converteai.net/d53e6d7c-4b74-4b0b-b0bd-5e106a0c2f1e/players/6a077776074dcc77c42ffaea/v4/player.js";

// Kick off the player script as soon as this module is parsed, before React mounts.
if (typeof document !== "undefined" && !document.querySelector(`script[src="${PLAYER_SRC}"]`)) {
  const s = document.createElement("script");
  s.src = PLAYER_SRC;
  s.async = true;
  document.head.appendChild(s);
}

const VslOferta = () => {
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") === "1") setPreviewMode(true);
  }, []);

  // Dispara o InitiateCheckout do Meta Pixel ANTES de abrir o link da Braip
  const handleCheckoutClick = (cta: typeof CTA_LINKS[number]) => {
    trackInitiateCheckout(cta.value, cta.label);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      {/* Top divider */}
      <hr className="border-0 border-t border-white/10 m-0" />

      {/* Player */}
      <div className="w-full px-4 py-8 flex justify-center">
        <div
          className="w-full"
          style={{ maxWidth: "400px" }}
          dangerouslySetInnerHTML={{
            __html:
              '<vturb-smartplayer id="vid-6a077776074dcc77c42ffaea" style="display:block;margin:0 auto;width:100%;max-width:400px;"></vturb-smartplayer>',
          }}
        />
      </div>

      {/* Preview-only CTA banners (revealed at pitch in production) */}
      {previewMode && (
        <section className="w-full px-4 pb-10">
          <div className="max-w-[400px] mx-auto space-y-4">
            <p className="text-center text-xs uppercase tracking-widest text-yellow-400">
              ▼ Pré-visualização dos botões do pitch ▼
            </p>
            {CTA_LINKS.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full hover:opacity-95 transition-opacity"
                onClick={() => handleCheckoutClick(cta)}
              >
                <img
                  src={cta.image}
                  alt={cta.alt}
                  loading="lazy"
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Banners section — 3 ofertas (hidden by default, revealed via video) */}
      <section className="delay hidden w-full px-4 py-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CTA_LINKS.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="initiate block w-full hover:opacity-95 transition-opacity"
              onClick={() => handleCheckoutClick(cta)}
            >
              <img
                src={cta.image}
                alt={cta.alt}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Bottom divider */}
      <hr className="border-0 border-t border-white/10 m-0" />

      {/* References */}
      <section className="w-full px-4 py-10 bg-white">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-black text-xl md:text-2xl font-semibold mb-6">
            Referências Científicas:
          </p>

          <div className="flex justify-center mb-6">
            <img
              loading="lazy"
              src="https://media.atomicatmedia.net/u/iN60V5Xymyd4566uFH2zqQr7TlI3/Pictures/oFYRlG5835731.jpeg"
              alt=""
              className="max-w-full h-auto"
            />
          </div>

          <p className="text-left text-black/85 text-sm md:text-base leading-relaxed whitespace-pre-line">
{`1. Meunier PJ, Roux C, Seeman E, Ortolani S, Badurski JE, Spector TD, Cannata J, Balogh A, Lemmel EM, Pors-Nielsen S, Rizzoli R. The effects of strontium ranelate on the risk of vertebral fracture in women with postmenopausal osteoporosis. New England Journal of Medicine. 2004 Jan 29;350(5):459-468. doi:10.1056/NEJMoa022436.

2. Naghii MR, Mofid M, Asgari AR, Hedayati M, Daneshpour MS. Comparative effects of daily and weekly boron supplementation on plasma steroid hormones and proinflammatory cytokines. Journal of Trace Elements in Medicine and Biology. 2011 Jan;25(1):54-58. doi: 10.1016/j.jtemb.2010.10.001.

3. Blech MF, Martin C, Borrelly J, Hartemann P. Traitement des plates profondes avec perte de substance; Interet d'une solution d'acide borique 3%. Presse Medicale. 1990;19:1050-1052.

4. Blech MF, Martin C, Borrelly J, Hartemann P. Traitement des plaies profondes avec perte de substance. Intérêt d'une solution d'acide borique à 3 p. 100 [Treatment of deep wounds with loss of tissue. Value of a 3 percent boric acid solution]. Presse Medicale. 1990 Jun 2;19(22):1050-1052.

5. Cebeci E, Yüksel B, Şahin F. Anti-cancer effect of boron derivatives on small-cell lung cancer. Journal of Trace Elements in Medicine and Biology. 2022 Mar;70:126923. doi:10.1016/j.jtemb.2022.126923.

6. Sayin Z, Ucan US, Sakmanoglu A. Antibacterial and Antibiofilm Effects of Boron on Different Bacteria. Biological Trace Element Research. 2016 Sep;173(1):241-246. doi: 10.1007/s12011-016-0637-z.

7. Khan A, Patthi B, Singla A, Malhi R, Goel D, Kumari M. The role of copper and zinc in the prevention of dental caries-A systematic review. Journal of Indian Association of Public Health Dentistry. 2020 Jan 1;18(1):4-12. doi:10.4103/jiaphd.jiaphd_75_19.

8. Wang YL, Chang HH, Chiang YC, Lin CH, Lin CP. Strontium ion can significantly decrease enamel demineralization and prevent the enamel surface hardness loss in acidic environment. Journal of the Formosan Medical Association. 2019 Jan;118(1 Pt 1):39-49. doi: 10.1016/j.jfma.2018.01.001.

9. Kirschneck C, Wolf M, Reicheneder C, Wahlmann U, Proff P, Roemer P. Strontium ranelate improved tooth anchorage and reduced root resorption in orthodontic treatment of rats. European Journal of Pharmacology. 2014 Dec 5;744:67-75. doi:10.1016/j.ejphar.2014.09.039.

10. Klimuszko E, Orywal K, Sierpinska T, Sidun J, Golebiewska M. The evaluation of zinc and copper content in tooth enamel without any pathological changes - an in vitro study. International Journal of Nanomedicine. 2018 Mar 2;13:1257-1264. doi:10.2147/IJN.S155228.

11. Meena H, Pandey HK, Arya MC, Ahmed Z. Shilajit: A panacea for high-altitude problems. International Journal of Ayurveda Research. 2010 Jan;1(1):37-40. doi:10.4103/0974-7788.59942.

12. Wang YL, Chang HH, Chiang YC, Lin CH, Lin CP. Strontium ion can significantly decrease enamel demineralization and prevent the enamel surface hardness loss in acidic environment. Journal of the Formosan Medical Association. 2019 Jan;118(1 Pt 1):39-49. doi: 10.1016/j.jfma.2018.01.001.

13. Nielsen FH, Meacham SL. Growing evidence for human health benefits of boron. Journal of Evidence-Based Complementary & Alternative Medicine. 2011 Oct;16(3):169-180. doi:10.1177/2156587211407638.

14. Naghii MR, Mofid M, Asgari AR, Hedayati M, Daneshpour MS. Comparative effects of daily and weekly boron supplementation on plasma steroid hormones and proinflammatory cytokines. Journal of Trace Elements in Medicine and Biology. 2011 Jan;25(1):54-58. doi: 10.1016/j.jtemb.2010.10.001.

15. Zempo-Miyaki A, Maeda S, Otsuki T. Effect of Chlorella-derived multicomponent supplementation on maximal oxygen uptake and serum vitamin B2 concentration in young men. Journal of Clinical Biochemistry and Nutrition. 2017 Sep;61(2):135-139. doi:10.3164/jcbn.17-36.`}
          </p>
        </div>
      </section>

      {/* Footer disclaimer */}
      <footer className="w-full px-4 py-8 border-t border-white/10">
        <p className="max-w-[720px] mx-auto text-center text-xs md:text-sm text-white/60 leading-relaxed">
          Não pretendemos diagnosticar, tratar, curar ou prevenir qualquer
          doença ou enfermidade. As informações são compartilhadas apenas para
          fins educacionais. Você deve sempre consultar seu médico antes de
          agir em qualquer conteúdo deste site, especialmente se estiver
          grávida, amamentando, tomando medicação ou tiver uma condição
          médica. O produto apresentado não é um medicamento.
        </p>
      </footer>
    </div>
  );
};

export default VslOferta;
