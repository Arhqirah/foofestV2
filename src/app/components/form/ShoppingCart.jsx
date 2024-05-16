import React from 'react';
import FormButton from '@/app/components/form/FormButton';

const ShoppingCart = ({ formData, prevStage, nextStage, calculateTotalPrice }) => {
  return (
    <div className="w-full md:w-1/3 p-4 border-l md:sticky top-0">
      <h2 className="text-lg font-bold">Din kurv</h2>
      <ul className="list-disc list-inside">
        {formData.quantities.viking > 0 && (
          <li>{formData.quantities.viking} x VIKING Billetter</li>
        )}
        {formData.quantities.bonde > 0 && (
          <li>{formData.quantities.bonde} x BONDE Billetter</li>
        )}
        {formData.camp && (
          <li>Camp: {formData.camp}</li>
        )}
        {formData.tents.twoMan > 0 && (
          <li>{formData.tents.twoMan} x 2-mands telt (299 DKK)</li>
        )}
        {formData.tents.threeMan > 0 && (
          <li>{formData.tents.threeMan} x 3-mands telt (399 DKK)</li>
        )}
        {formData.extras.item1 && (
          <li>Ekstra item 1 (249 DKK)</li>
        )}
        {formData.extras.item2 && (
          <li>Ekstra item 2 (39 DKK)</li>
        )}
      </ul>
      <div className="mt-4">
        <h3 className="font-semibold">Total Pris:</h3>
        <p>{calculateTotalPrice()} DKK</p>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {nextStage && (
          <FormButton onClick={nextStage} label="Videre" type="next" />
        )}
        {prevStage && (
          <FormButton onClick={prevStage} label="Tilbage" type="prev" />
          
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
