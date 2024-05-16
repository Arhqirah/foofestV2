import React from 'react';

const FormButton = ({ onClick, label, type }) => {
  const buttonClasses = type === 'prev'
    ? 'bg-green hover:bg-green-darker text-white font-bold py-2 px-4 rounded'
    : 'bg-orange hover:bg-orange-darker text-white font-bold py-2 px-4 rounded';

  return (
    <button onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};

export default FormButton;
