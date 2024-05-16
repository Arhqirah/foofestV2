import React from 'react';

const ThankYou = ({ handleClick }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-center">
      <h2 className="text-lg font-bold mb-4">TAK FOR DIT KØB</h2>
      <h3 className="mb-2">DINE BILLETTER ER SENDT ELEKTRONISK TIL</h3>
      <p>Simonmelbyeandersen@hotmail.com</p>
      <p className="mb-4">DOWNLOAD DINE BILLETTER TIL FOOFEST 2024 HER</p>
      <h3 className="mb-2">KONTAKT OS PÅ</h3>
      <p>FooFest@Valhala.odin</p>
      <p>Eller send os en ravn</p>
      <button
        onClick={handleClick}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Tilbage til forsiden
      </button>
    </div>
  );
};

export default ThankYou;
