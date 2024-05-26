import { color } from 'framer-motion';
import React, { useState, useRef } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const PaymentForm = ({ handlePayment }) => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const numberRef = useRef(null);
  const expiryRef = useRef(null);
  const cvcRef = useRef(null);
  const nameRef = useRef(null);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    // Validation for different fields
    if (name === 'number' && !/^\d*$/.test(value)) return;
    if (name === 'expiry' && !/^\d*$/.test(value)) return;
    if (name === 'cvc' && !/^\d*$/.test(value)) return;
    if (name === 'name' && !/^[a-zA-Z\s]*$/.test(value)) return;

    setState((prev) => {
      const newState = { ...prev, [name]: value };

      if (name === 'number' && value.length === 16) {
        expiryRef.current.focus();
      } else if (name === 'expiry' && value.length === 4) {
        cvcRef.current.focus();
      } else if (name === 'cvc' && value.length === 3) {
        nameRef.current.focus();
      }

      return newState;
    });
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.number && state.expiry && state.cvc && state.name) {
      handlePayment(state);
    } else {
      alert('Udfyld betalingsoplysningerne');
    }
  };

  return (
    <div className="flex flex-wrap max-w-lg mx-auto p-4">
      <div className="mb-4">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="number" className="block mb-2">Kort Nummer</label>
          <input
            type="text"
            id="number"
            name="number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            ref={numberRef}
            className="border text-black px-4 py-2 rounded"
            maxLength="16"
            inputMode="numeric"
          />
        </div>
        <div>
          <label htmlFor="expiry" className="block mb-2">Udløbsdato (MMYY)</label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            ref={expiryRef}
            className="border text-black px-4 py-2 rounded"
            maxLength="4"
            inputMode="numeric"
          />
        </div>
        <div>
          <label htmlFor="cvc" className="block mb-2">Kort CVC</label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            ref={cvcRef}
            className="border text-black px-4 py-2 rounded"
            maxLength="3"
            inputMode="numeric"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2">Kortholder navn</label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            ref={nameRef}
            className="border text-black px-4 py-2 rounded"
            inputMode="text"
          />
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
