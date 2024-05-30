// components/FAQItem.js
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="faq" className="border-b border-orange py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span className="transition-transform duration-300">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 text-grey-dark">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
