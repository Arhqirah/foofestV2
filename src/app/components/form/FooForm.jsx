import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Ticket from '@/app/components/form/Ticket';

function FooForm() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  const vipBenefits = ['Priority seating', 'Free drinks', 'Meet and greet'];
  const regularBenefits = ['Standard seating', 'Access to event'];

  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    ticketType: '',
    quantities: { viking: 0, bonde: 0 },
    camp: '',
    tents: { twoMan: 0, threeMan: 0 },
    extras: { item1: false, item2: false },
    personalInfo: [],
  });

  const [expandedTickets, setExpandedTickets] = useState({
    Bonde: false,
    Viking: false,
  });

  const [errors, setErrors] = useState({});

  const validateStage = () => {
    let isValid = true;
    let newErrors = {};

  if (stage === 2) {
      if (totalTickets === 0) {
        newErrors.ticketQuantity = 'Vælg mindst én billet';
        isValid = false;
      }
    } else if (stage === 3) {
      if (!formData.camp) {
        newErrors.camp = 'Vælg en camp';
        isValid = false;
      }
    } else if (stage === 4) {
      formData.personalInfo.forEach((info, index) => {
        if (!info.firstName || !info.lastName || !info.email || !info.phone) {
          newErrors[`ticketInfo${index}`] = 'Udfyld alle felter for hver billet';
          isValid = false;
        } else {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(info.email)) {
            newErrors[`ticketInfo${index}`] = 'Udfyld en gyldig emailadresse';
            isValid = false;
          }
          const phonePattern = /^[0-9]+$/;
          if (!phonePattern.test(info.phone)) {
            newErrors[`ticketInfo${index}`] = 'Udfyld et gyldigt telefonnummer';
            isValid = false;
          }
        }
      });
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStage = () => {
    if (validateStage()) {
      setStage(stage + 1);
    }
  };

  const prevStage = () => setStage(stage - 1);

  const totalTickets = formData.quantities.viking + formData.quantities.bonde;

  const incrementTicket = (type) => {
    if (totalTickets < 10) {
      setFormData((prevData) => ({
        ...prevData,
        quantities: {
          ...prevData.quantities,
          [type]: prevData.quantities[type] + 1,
        },
        personalInfo: [...prevData.personalInfo, { ticketType: type, firstName: '', lastName: '', email: '', phone: '' }],
      }));
    }
  };

  const decrementTicket = (type) => {
    setFormData((prevData) => {
      const updatedPersonalInfo = [...prevData.personalInfo];
      let updatedQuantity = prevData.quantities[type];
      if (updatedQuantity > 0) {
        updatedPersonalInfo.splice(updatedPersonalInfo.findIndex(info => info.ticketType === type), 1);
        updatedQuantity -= 1;
      }
      return {
        ...prevData,
        quantities: {
          ...prevData.quantities,
          [type]: updatedQuantity,
        },
        personalInfo: updatedPersonalInfo,
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        extras: {
          ...prevData.extras,
          [name]: checked,
        },
      }));
    } else if (name === 'twoMan' || name === 'threeMan') {
      setFormData((prevData) => ({
        ...prevData,
        tents: {
          ...prevData.tents,
          [name]: parseInt(value),
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handlePersonalInfoChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedPersonalInfo = [...prevData.personalInfo];
      updatedPersonalInfo[index][field] = value;
      return {
        ...prevData,
        personalInfo: updatedPersonalInfo,
      };
    });
  };

  const toggleExpand = (type) => {
    setExpandedTickets((prevState) => ({
      Bonde: type === 'Bonde' ? !prevState.Bonde : false,
      Viking: type === 'Viking' ? !prevState.Viking : false,
    }));
  };

  const handleCampSelection = (camp) => {
    setFormData((prevData) => ({
      ...prevData,
      camp,
    }));
  };

  const calculateTotalPrice = () => {
    const ticketPrice = (formData.quantities.viking * 1299) + (formData.quantities.bonde * 799);
    const tentPrice = (formData.tents.twoMan * 299) + (formData.tents.threeMan * 399);
    const extrasPrice = (formData.extras.item1 ? 249 : 0) + (formData.extras.item2 ? 39 : 0);
    return ticketPrice + tentPrice + extrasPrice;
  };

  return (
    <div className="p-4 flex flex-col items-center">
      {stage === 1 && (
        <div>
          <h2 className="text-lg font-bold">Vælg billettype</h2>
          <div className="flex flex-row justify-evenly gap-4">
            <Ticket
              type="Bonde"
              name="BONDE"
              price="FRA 799.-"
              icon="/assets/icons/Bonde150.webp"
              benefits={regularBenefits}
              isExpanded={expandedTickets.Bonde}
              onClick={() => {
                setFormData({ ...formData, ticketType: 'Bonde' });
                nextStage();
              }}
              toggleExpand={() => toggleExpand('Bonde')}
              borderColor="border-brown"
            />
            <Ticket
              type="Viking"
              name="VIKING"
              price="FRA 1299.-"
              benefits={vipBenefits}
              icon="/assets/icons/Viking150.webp"
              isExpanded={expandedTickets.Viking}
              onClick={() => {
                setFormData({ ...formData, ticketType: 'Viking' });
                nextStage();
              }}
              toggleExpand={() => toggleExpand('Viking')}
              borderColor="border-gold"
            />
          </div>
          {errors.ticketType && <p className="text-blue">{errors.ticketType}</p>}
        </div>
      )}

      {stage === 2 && (
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
            {errors.ticketQuantity && <p className="text-blue">{errors.ticketQuantity}</p>}
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
      )}

      {stage === 3 && (
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
              {errors.camp && <p className="text-blue">{errors.camp}</p>}
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
              <p>{calculateTotalPrice()} DKK</p>
            </div>
          </div>
        </div>
      )}

      {stage === 4 && (
        <div className="flex flex-row w-full max-w-4xl mx-auto mt-4">
          <div className="w-2/3 p-4">
            <button onClick={prevStage} className="mb-4">Tilbage</button>
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
                  {errors[`ticketInfo${index}`] && <p className="text-blue">{errors[`ticketInfo${index}`]}</p>}
                </div>
              ))}
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
              <p>{calculateTotalPrice()} DKK</p>
            </div>
          </div>
        </div>
      )}

      {stage === 5 && (
        <div>
          <button onClick={prevStage}>Tilbage</button>
          <button onClick={nextStage}>Confirm and Pay</button>
        </div>
      )}

      {stage === 6 && (
        <div>
          <h2 className="text-lg font-bold">TAK FOR DIT KØB</h2>
          <h3>
            DINE BILLETTER ER SENDT ELEKTRONISK TIL
            Simonmelbyeandersen@hotmail.com
          </h3>
          <p>DOWNLOAD DINE BILLETTER TIL FOOFEST 2024 HER</p>
          <h3>KONTAKT OS PÅ</h3>
          <p>FooFest@Valhala.odin</p>
          <p>Eller send os en ravn</p>
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Tilbage til forsiden
          </button>
        </div>
      )}
    </div>
  );
}

export default FooForm;
