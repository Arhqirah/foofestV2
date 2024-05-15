import React from 'react';

const ThankYou = ({ handleClick }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">TAK FOR DIT KØB</h2>
      <h3>
        DINE BILLETTER ER SENDT ELEKTRONISK TIL
        Simonmelbyeandersen@hotmail.com
      </h3>
      <p>DOWNLOAD DINE BILLETTER TIL FOOFEST 2024 HER</p>
      <h3>KONTAKT OS PÅ</h3>
      <p>FooFest@Valhala.odin</p>
      <p>Eller send os en ravn</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Tilbage til forsiden
      </button>
    </div>
  );
};

export default ThankYou;
