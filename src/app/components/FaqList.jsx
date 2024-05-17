// pages/index.js
import FAQItem from '@/app/components/Faq';

const FAQList = () => {
  const faqs = [
    { question: 'What are the festival dates?', answer: 'Infinity' },
    { question: 'What is the location of the festival?', answer: 'Valhalla' },
    { question: 'Are there any age restrictions?', answer: 'All are welcome, children should have a parent nearby' },
    { question: 'What items are prohibited at the festival?', answer: 'Weapons' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-xl font-bold mb-6">Det skal du vide om FooFest</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
