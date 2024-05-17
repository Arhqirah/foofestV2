import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Ticket = ({ type, name, price, benefits, icon, onClick, isExpanded, toggleExpand, borderColor }) => {
  const detailsRef = useRef(null);
  const [detailsWidth, setDetailsWidth] = useState(0);

  useEffect(() => {
    if (isExpanded && detailsRef.current) {
      setDetailsWidth(detailsRef.current.scrollWidth);
    } else {
      setDetailsWidth(0);
    }
  }, [isExpanded]);

  return (
    <div className="w-full max-w-4xl mx-auto mb-4 flex items-center">
      <div
        className={`p-8 rounded-md shadow-md border-4 transition-all duration-300 ${
          isExpanded ? 'border-transparent' : `border-3 ${borderColor}`
        } flex items-center relative`}
      >
        <div className="flex flex-col items-center transition-all duration-300">
          <div className="flex-shrink-0 w-auto h-50 flex items-center justify-center">
            <img src={icon} alt={`${type} Icon`} className="w-full h-full" />
          </div>
          <div className="flex flex-col items-center ml-4">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-grey-dark mb-4">{price}</p>
            </div>
          </div>
        </div>
        <button
          onClick={toggleExpand}
          className="absolute  right-4 bottom-4 flex items-center justify-center rounded-full"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div
        ref={detailsRef}
        className={`overflow-hidden transition-all duration-300 flex-grow ml-4`}
        style={{
          maxWidth: isExpanded ? '300px' : '0px',
          opacity: isExpanded ? '1' : '0',
        }}
      >
        <div className="p-4 h-full w-52">
          <h4 className="font-semibold">Benefits:</h4>
          <ul className="list-disc list-inside">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <button
            onClick={onClick}
            className="mt-4 bg-orange hover:bg-orange-darker text-white font-bold py-2 px-4 rounded"
          >
            Select {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
