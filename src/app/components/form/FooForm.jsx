import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TicketSelection from '@/app/components/form/TicketSelection';
import TicketQuantity from '@/app/components/form/TicketQuantity';
import CampAndTentSelection from '@/app/components/form/CampAndTentSelection';
import TicketInformation from '@/app/components/form/TicketInformation';
import Confirmation from '@/app/components/form/Confirmation';
import ThankYou from '@/app/components/form/ThankYou';

function FooForm() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

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

    const totalTickets = formData.quantities.viking + formData.quantities.bonde;
    const totalTentCapacity = (formData.tents.twoMan * 2) + (formData.tents.threeMan * 3);

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
      if (totalTentCapacity < totalTickets) {
        newErrors.tents = 'Vælg nok teltpladser til alle personer';
        isValid = false;
      }
      if (totalTentCapacity > totalTickets + 2) {
        newErrors.tents = 'Vælg ikke flere teltpladser end nødvendigt (+2 er tilladt)';
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

  const incrementTicket = (type) => {
    const totalTickets = formData.quantities.viking + formData.quantities.bonde;
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
    const totalTickets = formData.quantities.viking + formData.quantities.bonde;
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
      const newTents = {
        ...formData.tents,
        [name]: Math.max(0, parseInt(value) || 0),
      };
      const totalTentCapacity = (newTents.twoMan * 2) + (newTents.threeMan * 3);

      if (totalTentCapacity < totalTickets) {
        newErrors.tents = 'Vælg nok teltpladser til alle personer';
      } else if (totalTentCapacity > totalTickets + 2) {
        newErrors.tents = 'Vælg ikke flere teltpladser end nødvendigt (+1 er tilladt)';
      } else {
        delete newErrors.tents;
      }

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

  const handlePayment = (paymentDetails) => {
    console.log('Payment details:', paymentDetails);
    nextStage();
  };

  const getAllEmails = () => {
    return formData.personalInfo.map(info => info.email);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      {stage === 1 && (
        <TicketSelection
          formData={formData}
          setFormData={setFormData}
          nextStage={nextStage}
          toggleExpand={toggleExpand}
          expandedTickets={expandedTickets}
          errors={errors}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}
      {stage === 2 && (
        <TicketQuantity
          formData={formData}
          setFormData={setFormData}
          nextStage={nextStage}
          prevStage={prevStage}
          errors={errors}
          incrementTicket={incrementTicket}
          decrementTicket={decrementTicket}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}
      {stage === 3 && (
        <CampAndTentSelection
          formData={formData}
          setFormData={setFormData}
          nextStage={nextStage}
          prevStage={prevStage}
          handleCampSelection={handleCampSelection}
          handleInputChange={handleInputChange}
          errors={errors}
          setErrors={setErrors}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}
      {stage === 4 && (
        <TicketInformation
          formData={formData}
          setFormData={setFormData}
          nextStage={nextStage}
          prevStage={prevStage}
          handlePersonalInfoChange={handlePersonalInfoChange}
          errors={errors}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}
      {stage === 5 && (
        <Confirmation
          formData={formData}
          prevStage={prevStage}
          handlePayment={handlePayment}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}
      {stage === 6 && (
        <ThankYou
          emails={getAllEmails()}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default FooForm;
