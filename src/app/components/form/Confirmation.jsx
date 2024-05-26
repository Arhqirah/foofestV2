import React from 'react';
import ShoppingCart from '@/app/components/form/ShoppingCart';
import PaymentForm from '@/app/components/form/PaymentForm';

const Confirmation = ({ formData, prevStage, handlePayment, calculateTotalPrice, errors }) => {
  const handlePaymentSubmission = (paymentDetails) => {
    handlePayment(paymentDetails);
  };

  return (
    <div className="flex flex-wrap flex-col md:flex-row w-full max-w-4xl mx-auto p-4">
      <div className="w-full md:w-3/5 p-4">
        <h2 className="text-lg font-bold mb-4">Bekræftelse</h2>
        <PaymentForm handlePayment={handlePaymentSubmission} />
        {errors.payment && <p className="text-red">{errors.payment}</p>}
      </div>
      <ShoppingCart
        formData={formData}
        prevStage={prevStage}
        nextStage={handlePaymentSubmission}
        calculateTotalPrice={calculateTotalPrice}
      />
    </div>
  );
};

export default Confirmation;
