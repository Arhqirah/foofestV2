// pages/index.js
import FAQItem from '@/app/components/Faq';

const FAQList = () => {
  const faqs = [
    { question: 'Hvor lang tid er festivalen? Nogen datoer?', answer: 'Nej. FooFest spiller altid. 24 timer per dag, alle dager året rundt!' },
    { question: 'Hvorhen kan jeg finde festivalen?', answer: 'Du finder den i Valhalla, selvfølgelig.' },
    { question: 'Er der nogen restriktioner?', answer: 'Alle kan komme, individer under 15 år skal have forældre med sig.' },
    { question: 'Hvad må jeg ikke medbringe til festivalen?', answer: 'Våbn, stoffer og dårligt humør!' },
    { question: 'Fylder i op med mere ting her?', answer: 'Ja, lige om lidt når der er budget til det!' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-xl font-bold mb-6">Det skal du vide om <strong className='text-3xl'>FooFest</strong></h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
