import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    { question: "O que é o Vita Flux?", answer: "Vita Flux é um suplemento natural desenvolvido especificamente para homens que desejam melhorar sua performance, energia e vitalidade. Formulado com ingredientes cientificamente comprovados." },
    { question: "Como devo tomar o Vita Flux?", answer: "Recomendamos tomar 12 gotas por dia, preferencialmente pela manhã com o estômago vazio ou conforme orientação médica. Para melhores resultados, use consistentemente por pelo menos 90 dias." },
    { question: "Quanto tempo leva para ver resultados?", answer: "Os primeiros resultados podem ser sentidos entre 7 a 15 dias de uso regular. Para resultados mais significativos e duradouros, recomendamos o uso por pelo menos 90 dias." },
    { question: "O produto tem efeitos colaterais?", answer: "Vita Flux é feito com ingredientes naturais e é seguro para a maioria dos homens. Porém, se você tem alguma condição médica ou toma medicamentos, consulte seu médico antes do uso." },
    { question: "Vocês oferecem garantia?", answer: "Sim! Oferecemos 90 dias de garantia incondicional. Se não ficar satisfeito com os resultados, devolvemos 100% do seu dinheiro, sem perguntas." },
    { question: "Como funciona a entrega?", answer: "Entregamos para todo o Brasil via Correios ou transportadoras. O prazo varia de 5 a 15 dias úteis dependendo da sua região. Você recebe o código de rastreamento por email." },
    { question: "É seguro comprar online?", answer: "Absolutamente! Nosso site possui certificado SSL e trabalhamos apenas com processadores de pagamento seguros. Seus dados estão totalmente protegidos." },
    { question: "Posso tomar junto com outros suplementos?", answer: "Geralmente sim, mas recomendamos consultar um profissional de saúde antes de combinar com outros suplementos ou medicamentos para evitar interações." }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-gold to-brand-blue bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Vita Flux
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline hover:text-brand-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
