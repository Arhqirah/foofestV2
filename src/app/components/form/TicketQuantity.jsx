import React from 'react';
import ShoppingCart from '@/app/components/form/ShoppingCart';

const TicketQuantity = ({ formData, setFormData, nextStage, prevStage, incrementTicket, decrementTicket, errors, calculateTotalPrice }) => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row w-full max-w-4xl mx-auto p-4">
      <div className="w-full md:w-2/3 p-4">
        <h2 className="text-lg font-bold mb-4">Vælg antal billetter</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label className="font-semibold">Viking Billetter (1299 DKK):</label>
            <div className="flex items-center gap-2">
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
            <label className="font-semibold">Bonde Billetter (799 DKK):</label>
            <div className="flex items-center gap-2">
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
          {errors.ticketQuantity && <p className="text-red-500 mt-2">{errors.ticketQuantity}</p>}
        </div>
      </div>
      <ShoppingCart formData={formData} prevStage={prevStage} nextStage={nextStage} calculateTotalPrice={calculateTotalPrice} />
    </div>
  );
};

export default TicketQuantity;
