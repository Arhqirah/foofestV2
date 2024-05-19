import React from 'react';

const CampButton = ({ selected, onClick, borderColor, icon, name, availableSpots }) => {
  return (
    <div className="camp-button-container">
      <button
        type="button"
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 rounded border-4 ${selected ? 'bg-black-light text-white' : 'bg-black'} ${borderColor}`}
      >
        <img src={icon} alt={`${name} Icon`} className="w-6 h-6" />
        <span>{name}</span>
      </button>
      {availableSpots !== undefined && (
        <p className="available-spots text-sm text-gray-500 mt-1">{availableSpots} spots available</p>
      )}
    </div>
  );
};

export default CampButton;
