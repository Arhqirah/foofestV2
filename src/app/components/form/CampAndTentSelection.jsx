import React from 'react';

const CampAndTentSelection = ({ formData, setFormData, nextStage, prevStage, handleCampSelection, handleInputChange, errors }) => {
  return (
    <div className="flex flex-row w-full max-w-4xl mx-auto mt-4">
      <div className="w-2/3 p-4">
        <button onClick={prevStage} className="mb-4">Tilbage</button>
        <h2 className="text-lg font-bold">Vælg Camp og Telt</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col mb-4">
            <label className="font-semibold mb-2">Camp</label>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded ${formData.camp === 'Camp A' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleCampSelection('Camp A')}
              >
                Camp A
              </button>
              <button
                className={`px-4 py-2 rounded ${formData.camp === 'Camp B' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleCampSelection('Camp B')}
              >
                Camp B
              </button>
              <button
                className={`px-4 py-2 rounded ${formData.camp === 'Camp C' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleCampSelection('Camp C')}
              >
                Camp C
              </button>
            </div>
          </div>
          {errors.camp && <p className="text-red-500">{errors.camp}</p>}
          <div className="flex flex-col mb-4">
            <label className="font-semibold mb-2">Telt (2-mands og 3-mands)</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <label className="mr-2">2-mands (299 DKK):</label>
                <input
                  type="number"
                  name="twoMan"
                  value={formData.tents.twoMan}
                  onChange={handleInputChange}
                  className="border px-2 py-1 w-16 text-center"
                />
              </div>
              <div className="flex items-center">
                <label className="mr-2">3-mands (399 DKK):</label>
                <input
                  type="number"
                  name="threeMan"
                  value={formData.tents.threeMan}
                  onChange={handleInputChange}
                  className="border px-2 py-1 w-16 text-center"
                />
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default CampAndTentSelection;
