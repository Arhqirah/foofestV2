import React from 'react';

const ThankYou = ({ emails, handleClick }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-center">
      <h2 className="text-lg font-bold mb-4">TAK FOR DIT KØB</h2>
      <h3 className="mb-2">DINE BILLETTER ER SENDT ELEKTRONISK TIL</h3>
      {emails.map((email, index) => (
        <p className='text-orange' key={index}>{email}</p>
      ))}
      <p className="mb-4">DOWNLOAD DINE BILLETTER TIL FOOFEST 2024 HER</p>
      <h3 className="mb-2">KONTAKT OS PÅ</h3>
      <p>FooFest@Valhala.odin</p>
      <p>Eller send os en ravn</p>
      <button
        onClick={handleClick}
        className="bg-orange hover:bg-orange-darker text-white font-bold py-2 mt-4 px-4 rounded"
      >
        Tilbage til forsiden
      </button>
    </div>
  );
};

export default ThankYou;
