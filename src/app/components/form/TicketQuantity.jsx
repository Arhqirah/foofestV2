import React from 'react';

const TicketQuantity = ({ formData, setFormData, nextStage, prevStage, errors, incrementTicket, decrementTicket }) => {
  return (
    <div className="flex flex-row w-full max-w-4xl mx-auto mt-4">
      <div className="w-2/3 p-4">
        <button onClick={prevStage} className="mb-4">Tilbage</button>
        <h2 className="text-lg font-bold">Vælg antal billetter</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="font-semibold">VIKING Billetter</label>
            <div className="flex items-center">
              <button onClick={() => decrementTicket('viking')} className="px-2">-</button>
              <input
                type="number"
                name="viking"
                value={formData.quantities.viking}
                readOnly
                className="border px-2 py-1 text-center w-16"
              />
              <button onClick={() => incrementTicket('viking')} className="px-2">+</button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold">BONDE Billetter</label>
            <div className="flex items-center">
              <button onClick={() => decrementTicket('bonde')} className="px-2">-</button>
              <input
                type="number"
                name="bonde"
                value={formData.quantities.bonde}
                readOnly
                className="border px-2 py-1 text-center w-16"
              />
              <button onClick={() => incrementTicket('bonde')} className="px-2">+</button>
            </div>
          </div>
        </div>
        {errors.ticketQuantity && <p className="text-red-500">{errors.ticketQuantity}</p>}
        <button onClick={nextStage} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Videre
        </button>
      </div>
      <div className="w-1/3 p-4 border-l sticky top-0">
        <h2 className="text-lg font-bold">Din kurv</h2>
        <ul className="list-disc list-inside">
          {formData.quantities.viking > 0 && (
            <li>{formData.quantities.viking} x VIKING Billetter</li>
          )}
          {formData.quantities.bonde > 0 && (
            <li>{formData.quantities.bonde} x BONDE Billetter</li>
          )}
        </ul>
        <div className="mt-4">
          <h3 className="font-semibold">Total Pris:</h3>
          <p>
            {(formData.quantities.viking * 1299) + (formData.quantities.bonde * 799)} DKK
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketQuantity;
