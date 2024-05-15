import React from 'react';

const TicketInformation = ({ formData, setFormData, nextStage, prevStage, handlePersonalInfoChange, errors }) => {
  return (
    <div className="flex flex-row w-full max-w-4xl mx-auto mt-4">
      <div className="w-2/3 p-4">
        <h2 className="text-lg font-bold">Indtast Billetinformation</h2>
        <div className="flex flex-col gap-4">
          {formData.personalInfo.map((info, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <h3 className="font-semibold mb-2">{info.ticketType.toUpperCase()} Billet</h3>
              <div className="flex flex-col gap-2">
                <label htmlFor={`firstName-${index}`} className="font-semibold">Fornavn</label>
                <input
                  id={`firstName-${index}`}
                  type="text"
                  placeholder="Fornavn"
                  value={info.firstName}
                  onChange={(e) => handlePersonalInfoChange(index, 'firstName', e.target.value)}
                  className="border px-2 py-1"
                />
                <label htmlFor={`lastName-${index}`} className="font-semibold">Efternavn</label>
                <input
                  id={`lastName-${index}`}
                  type="text"
                  placeholder="Efternavn"
                  value={info.lastName}
                  onChange={(e) => handlePersonalInfoChange(index, 'lastName', e.target.value)}
                  className="border px-2 py-1"
                />
                <label htmlFor={`email-${index}`} className="font-semibold">Email</label>
                <input
                  id={`email-${index}`}
                  type="email"
                  placeholder="Email"
                  value={info.email}
                  onChange={(e) => handlePersonalInfoChange(index, 'email', e.target.value)}
                  className="border px-2 py-1"
                />
                <label htmlFor={`phone-${index}`} className="font-semibold">Telefonnummer</label>
                <input
                  id={`phone-${index}`}
                  type="tel"
                  placeholder="Telefonnummer"
                  value={info.phone}
                  onChange={(e) => handlePersonalInfoChange(index, 'phone', e.target.value)}
                  className="border px-2 py-1"
                  pattern="[0-9]*"
                />
              </div>
              {errors[`ticketInfo${index}`] && <p className="text-red-500">{errors[`ticketInfo${index}`]}</p>}
            </div>
          ))}
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
          <button onClick={nextStage} className="bg-orange hover:bg-orange-darker text-white font-bold py-2 px-4 rounded">Videre</button>
        </div>
      </div>
    </div>
  );
};

export default TicketInformation;
