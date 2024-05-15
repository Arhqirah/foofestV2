import React from 'react';
import CampButton from '@/app/components/form/CampButton'; // Adjust the import path according to your project structure

const CampAndTentSelection = ({ formData, setFormData, nextStage, prevStage, handleCampSelection, handleInputChange, errors, setErrors }) => {
  const totalTickets = formData.quantities.viking + formData.quantities.bonde;
  const totalTentCapacity = (formData.tents.twoMan * 2) + (formData.tents.threeMan * 3);

  const validateSelection = () => {
    let newErrors = {};

    if (!formData.camp) {
      newErrors.camp = 'Vælg en camp';
    }

    if (totalTentCapacity < totalTickets) {
      newErrors.tents = 'Vælg nok teltpladser til alle personer';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStage = () => {
    if (validateSelection()) {
      nextStage();
    }
  };

  const incrementTent = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      tents: {
        ...prevData.tents,
        [type]: prevData.tents[type] + 1,
      },
    }));
  };

  const decrementTent = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      tents: {
        ...prevData.tents,
        [type]: Math.max(0, prevData.tents[type] - 1),
      },
    }));
  };

  return (
    <div className="flex flex-wrap flex-row w-full max-w-4xl mx-auto mt-4">
      <div className="w-2/3 p-4">
        <h2 className="text-lg font-bold">Vælg en Camp</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap flex-col mb-4">
            <label className="font-semibold mb-2">Camp</label>
            <div className="flex flex-wrap gap-4">
              <CampButton
                selected={formData.camp === 'MIDGAARD'}
                onClick={() => handleCampSelection('MIDGAARD')}
                borderColor="border-green"
                icon="/assets/icons/Midgaard40.webp"
                name="MIDGAARD"
              />
              <CampButton
                selected={formData.camp === 'Vanaheim'}
                onClick={() => handleCampSelection('Vanaheim')}
                borderColor="border-yellow"
                icon="/assets/icons/Vanaheim40.webp"
                name="Vanaheim"
              />
              <CampButton
                selected={formData.camp === 'Alfheim'}
                onClick={() => handleCampSelection('Alfheim')}
                borderColor="border-blue"
                icon="/assets/icons/Alfheim40.webp"
                name="Alfheim"
              />
            </div>
            {errors.camp && <p className="text-orange mt-2">{errors.camp}</p>}
          </div>

          <div className="flex flex-wrap flex-col mb-4">
            <h2 className="flex flex-wrap gap-4 items-baseline text-lg font-bold">Vælg dit Telt <img src="/assets/icons/Tent55.webp" alt="Tent Icon" className="inline-block ml-2 w-5 h-5 align-baseline" /></h2>
            <label className="font-semibold mb-2">Telt (2-mands og 3-mands)</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <label className="mr-2">2-mands (299 DKK):</label>
                <button onClick={() => decrementTent('twoMan')} className="px-2">-</button>
                <input
                  type="number"
                  name="twoMan"
                  value={formData.tents.twoMan}
                  readOnly
                  className="border px-2 py-1 text-center w-16"
                />
                <button onClick={() => incrementTent('twoMan')} className="px-2">+</button>
              </div>
              <div className="flex items-center">
                <label className="mr-2">3-mands (399 DKK):</label>
                <button onClick={() => decrementTent('threeMan')} className="px-2">-</button>
                <input
                  type="number"
                  name="threeMan"
                  value={formData.tents.threeMan}
                  readOnly
                  className="border px-2 py-1 text-center w-16"
                />
                <button onClick={() => incrementTent('threeMan')} className="px-2">+</button>
              </div>
            </div>
            {errors.tents && <p className="text-orange mt-2">{errors.tents}</p>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-semibold mb-2">Ekstra</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="item1"
                  checked={formData.extras.item1}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label>Ekstra item 1 (249 DKK)</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="item2"
                  checked={formData.extras.item2}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label>Ekstra item 2 (39 DKK)</label>
              </div>
            </div>
          </div>
        </div>
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
          <p>{(formData.quantities.viking * 1299) + (formData.quantities.bonde * 799) + (formData.tents.twoMan * 299) + (formData.tents.threeMan * 399) + (formData.extras.item1 ? 249 : 0) + (formData.extras.item2 ? 39 : 0)} DKK</p>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <button onClick={prevStage} className="bg-green hover:bg-green-darker text-white font-bold py-2 px-4 rounded">Tilbage</button>
          <button onClick={handleNextStage} className="bg-orange hover:bg-orange-darker text-white font-bold py-2 px-4 rounded">Videre</button>
        </div>
      </div>
    </div>
  );
};

export default CampAndTentSelection;
