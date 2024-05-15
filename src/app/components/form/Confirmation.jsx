import React from 'react';

const Confirmation = ({ prevStage, nextStage, handleClick }) => {
  return (
    <div>
      <button onClick={prevStage}>Tilbage</button>
      <button onClick={nextStage}>Confirm and Pay</button>
    </div>
  );
};

export default Confirmation;
