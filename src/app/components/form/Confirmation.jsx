import React from 'react';
import ShoppingCart from '@/app/components/form/ShoppingCart';
import PaymentForm from '@/app/components/form/PaymentForm';

const Confirmation = ({ formData, prevStage, handlePayment, calculateTotalPrice }) => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row w-full max-w-4xl mx-auto p-4">
      <div className="w-full md:w-3/5 p-4">
        <h2 className="text-lg font-bold mb-4">Bekræftelse</h2>
      <PaymentForm></PaymentForm>
      </div>
      <ShoppingCart formData={formData} prevStage={prevStage} nextStage={handlePayment} calculateTotalPrice={calculateTotalPrice} />
    </div>
  );
};

export default Confirmation;
