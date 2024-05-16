import React from 'react';
import ShoppingCart from '@/app/components/form/ShoppingCart';

const TicketInformation = ({ formData, setFormData, nextStage, prevStage, handlePersonalInfoChange, errors, calculateTotalPrice }) => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row w-full max-w-4xl mx-auto p-4">
      <div className="w-full md:w-3/5 p-4">
        <h2 className="text-lg font-bold mb-4">Indtast billetinformation</h2>
        <form>
          {formData.personalInfo.map((info, index) => (
            <div key={index} className="flex flex-col mb-4">
              <h3 className="font-semibold mb-2">{info.ticketType} Billet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                <div>
                  <label htmlFor={`firstName-${index}`} className="block mb-1">Fornavn</label>
                  <input
                    id={`firstName-${index}`}
                    type="text"
                    placeholder="Fornavn"
                    value={info.firstName}
                    onChange={(e) => handlePersonalInfoChange(index, 'firstName', e.target.value)}
                    className="border px-2 py-1 w-full"
                  />
                </div>
                <div>
                  <label htmlFor={`lastName-${index}`} className="block mb-1">Efternavn</label>
                  <input
                    id={`lastName-${index}`}
                    type="text"
                    placeholder="Efternavn"
                    value={info.lastName}
                    onChange={(e) => handlePersonalInfoChange(index, 'lastName', e.target.value)}
                    className="border px-2 py-1 w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                <div>
                  <label htmlFor={`email-${index}`} className="block mb-1">Email</label>
                  <input
                    id={`email-${index}`}
                    type="email"
                    placeholder="Email"
                    value={info.email}
                    onChange={(e) => handlePersonalInfoChange(index, 'email', e.target.value)}
                    className="border px-2 py-1 w-full"
                  />
                </div>
                <div>
                  <label htmlFor={`phone-${index}`} className="block mb-1">Telefon</label>
                  <input
                    id={`phone-${index}`}
                    type="tel"
                    placeholder="Telefon"
                    value={info.phone}
                    onChange={(e) => handlePersonalInfoChange(index, 'phone', e.target.value)}
                    className="border px-2 py-1 w-full"
                  />
                </div>
              </div>
              {errors[`ticketInfo${index}`] && <p className="text-red">{errors[`ticketInfo${index}`]}</p>}
            </div>
          ))}
        </form>
      </div>
      <ShoppingCart formData={formData} prevStage={prevStage} nextStage={nextStage} calculateTotalPrice={calculateTotalPrice} />
    </div>
  );
};

export default TicketInformation;
