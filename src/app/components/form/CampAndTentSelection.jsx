import React from 'react';
import CampButton from '@/app/components/form/CampButton';
import ShoppingCart from '@/app/components/form/ShoppingCart';

const CampAndTentSelection = ({ formData, setFormData, nextStage, prevStage, handleCampSelection, handleInputChange, errors, setErrors, calculateTotalPrice }) => {
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
    setFormData((prevData) => {
      if (prevData.tents[type] < 10) {
        return {
          ...prevData,
          tents: {
            ...prevData.tents,
            [type]: prevData.tents[type] + 1,
          },
        };
      }
      return prevData;
    });
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

  const handleInputChangeWithLimit = (e) => {
    const { name, value, type, checked } = e.target;
    let newErrors = { ...errors };

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        extras: {
          ...prevData.extras,
          [name]: checked,
        },
      }));
    } else if (name === 'twoMan' || name === 'threeMan') {
      let newValue = parseInt(value) || 0;
      if (newValue > 10) {
        newValue = 10;
      }

      const newTents = {
        ...formData.tents,
        [name]: newValue,
      };
      const totalTentCapacity = (newTents.twoMan * 2) + (newTents.threeMan * 3);

     

      setErrors(newErrors);
      setFormData((prevData) => ({
        ...prevData,
        tents: newTents,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="flex flex-wrap flex-col md:flex-row w-full max-w-4xl mx-auto mt-4">
      <div className="w-full md:w-2/3 p-4">
        <form>
          <h2 className="text-lg font-bold">Vælg en Camp</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col mb-4">
              <label className="sr-only">Camp</label>
              <div className="flex flex-wrap gap-4">
                <CampButton
                  selected={formData.camp === 'MIDGAARD'}
                  onClick={() => handleCampSelection('MIDGAARD')}
                  borderColor={formData.camp === 'MIDGAARD' ? 'border-green' : 'border-green-dark'}
                  icon="/assets/icons/Midgaard40.webp"
                  name="MIDGAARD"
                />
                <CampButton
                  selected={formData.camp === 'Vanaheim'}
                  onClick={() => handleCampSelection('Vanaheim')}
                  borderColor={formData.camp === 'Vanaheim' ? 'border-yellow' : 'border-yellow-dark'}
                  icon="/assets/icons/Vanaheim40.webp"
                  name="VANAHEIM"
                />
                <CampButton
                  selected={formData.camp === 'Alfheim'}
                  onClick={() => handleCampSelection('Alfheim')}
                  borderColor={formData.camp === 'Alfheim' ? 'border-blue' : 'border-blue-dark'}
                  icon="/assets/icons/Alfheim40.webp"
                  name="ALFHEIM"
                />
              </div>
              {errors.camp && <p className="text-red mt-2">{errors.camp}</p>}
            </div>

            <div className="flex flex-col mb-4">
              <h2 className="flex items-baseline text-lg font-bold">
                Vælg dit Telt 
                <img src="/assets/icons/Tent55.webp" alt="Tent Icon" className="inline-block ml-2 align-baseline" />
              </h2>
              <label className="font-semibold mb-2">Telt (2-mands og 3-mands)</label>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <label htmlFor="twoMan" className="mr-2">2-mands (299 DKK):</label>
                  <button type="button" onClick={() => decrementTent('twoMan')} className="px-2">-</button>
                  <input
                    id="twoMan"
                    type="number"
                    name="twoMan"
                    value={formData.tents.twoMan}
                    readOnly
                    className="border px-2 py-1 text-center w-16"
                  />
                  <button type="button" onClick={() => incrementTent('twoMan')} className="px-2">+</button>
                </div>
                <div className="flex items-center">
                  <label htmlFor="threeMan" className="mr-2">3-mands (399 DKK):</label>
                  <button type="button" onClick={() => decrementTent('threeMan')} className="px-2">-</button>
                  <input
                    id="threeMan"
                    type="number"
                    name="threeMan"
                    value={formData.tents.threeMan}
                    readOnly
                    className="border px-2 py-1 text-center w-16"
                  />
                  <button type="button" onClick={() => incrementTent('threeMan')} className="px-2">+</button>
                </div>
              </div>
              {errors.tents && <p className="text-red mt-2">{errors.tents}</p>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-2">Ekstra</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="item1"
                    name="item1"
                    checked={formData.extras.item1}
                    onChange={handleInputChangeWithLimit}
                    className="mr-2"
                  />
                  <label htmlFor="item1">Ekstra item 1 (249 DKK)</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="item2"
                    name="item2"
                    checked={formData.extras.item2}
                    onChange={handleInputChangeWithLimit}
                    className="mr-2"
                  />
                  <label htmlFor="item2">Ekstra item 2 (39 DKK)</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ShoppingCart formData={formData} prevStage={prevStage} nextStage={handleNextStage} calculateTotalPrice={calculateTotalPrice} />
    </div>
  );
};

export default CampAndTentSelection;
