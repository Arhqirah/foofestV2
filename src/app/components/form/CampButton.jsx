import React from 'react';

const CampButton = ({ selected, onClick, borderColor, icon, name }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded border-4 ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200'} ${borderColor}`}
    >
      <img src={icon} alt={`${name} Icon`} className="w-6 h-6" />
      <span>{name}</span>
    </button>
  );
};

export default CampButton;
