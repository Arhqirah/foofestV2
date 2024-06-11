import React, { useState, useEffect } from 'react';
import { rootUrl } from '@/app/lib/apiCall';
import CampButton from '@/app/components/form/CampButton';
import ShoppingCart from '@/app/components/form/ShoppingCart';
import supabase from '@/app/lib/supabaseClient';

const CampAndTentSelection = ({ formData, setFormData, nextStage, prevStage, handleCampSelection, handleInputChange, errors, setErrors, calculateTotalPrice }) => {
  const [reservationMessage, setReservationMessage] = useState('');
  const [availableSpots, setAvailableSpots] = useState({});
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [reservationError, setReservationError] = useState('');

  useEffect(() => {
    fetchAvailableSpots();
  }, []);

  const fetchAvailableSpots = async () => {
    try {
      const response = await fetch(`${rootUrl}/available-spots`);
      const data = await response.json();
      const spots = data.reduce((acc, area) => {
        acc[area.area] = area.available;
        return acc;
      }, {});
      setAvailableSpots(spots);
    } catch (error) {
      console.error('Error fetching available spots:', error);
    }
  };

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

  const handleNextStage = async () => {
    if (!validateSelection()) {
      return;
    }

    try {
      console.log('Attempting to reserve spot with backend');
      const response = await fetch(`${rootUrl}/reserve-spot`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          area: formData.camp,
          amount: totalTickets,
        }),
      });
      const data = await response.json();

      console.log('Response from backend:', data);

      if (data.message) {
        setReservationMessage(data.message);
        setReservationSuccess(true);
        setReservationError('');

        const expirationTime = new Date();
        expirationTime.setMinutes(expirationTime.getMinutes() + 5);

        const formattedExpirationTime = expirationTime.toISOString();

        const { data: supabaseData, error } = await supabase
          .from('reservations')
          .insert([
            {
              area: formData.camp,
              amount: totalTickets,
              expires_at: formattedExpirationTime,
            },
          ]);

        if (error) {
          console.error('Error saving reservation to Supabase:', error);
          setReservationMessage('Error saving reservation to database');
        } else {
          console.log('Reservation saved to Supabase:', supabaseData);
          nextStage();
        }
      } else {
        console.error('Reservation error:', data);
        setReservationMessage(data.error || 'An error occurred while reserving a spot.');
      }
      await fetchAvailableSpots();
    } catch (error) {
      console.error('An error occurred while reserving a spot:', error);
      setReservationMessage('An error occurred while reserving a spot.');
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
      <div className="w-full md:w-3/5 p-4">
        <form>
          <h2 className="text-lg font-bold pb-4">Vælg en Camp</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col mb-4">
              <label className="sr-only">Camp</label>
              <div className="flex flex-wrap gap-4">
                <CampButton
                  selected={formData.camp === 'Midgard'}
                  onClick={() => handleCampSelection('Midgard')}
                  borderColor={formData.camp === 'Midgard' ? 'border-green' : 'border-green-dark'}
                  icon="/assets/icons/Midgaard40.webp"
                  name="MIDGARD"
                  availableSpots={availableSpots['Midgard']}
                />
                <CampButton
                  selected={formData.camp === 'Vanaheim'}
                  onClick={() => handleCampSelection('Vanaheim')}
                  borderColor={formData.camp === 'Vanaheim' ? 'border-yellow' : 'border-yellow-dark'}
                  icon="/assets/icons/Vanaheim40.webp"
                  name="VANAHEIM"
                  availableSpots={availableSpots['Vanaheim']}
                />
                <CampButton
                  selected={formData.camp === 'Alfheim'}
                  onClick={() => handleCampSelection('Alfheim')}
                  borderColor={formData.camp === 'Alfheim' ? 'border-blue' : 'border-blue-dark'}
                  icon="/assets/icons/Alfheim40.webp"
                  name="ALFHEIM"
                  availableSpots={availableSpots['Alfheim']}
                />
              </div>
              
              {errors.camp && <p className="text-red mt-2">{errors.camp}</p>}
            </div>

            <div className="flex flex-col mb-4">
              {reservationMessage && <p className="text-green-light mt-2">{reservationMessage}</p>}
              {errors.reservation && <p className="text-red mt-2">{errors.reservation}</p>}
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
                  <button type="button" onClick={() => decrementTent('twoMan')} className="px-2 bg-black border-white border-2 m-2 rounded-full text-white">-</button>
                  <input
                    id="twoMan"
                    type="number"
                    name="twoMan"
                    value={formData.tents.twoMan}
                    readOnly
                    className="border px-2 py-1 pl-2 md:pl-6 text-center w-16 text-black"
                  />
                  <button type="button" onClick={() => incrementTent('twoMan')} className="px-2 bg-black border-white border-2 m-2 rounded-full text-white">+</button>
                </div>
                <div className="flex items-center">
                  <label htmlFor="threeMan" className="mr-2">3-mands (399 DKK):</label>
                  <button type="button" onClick={() => decrementTent('threeMan')} className="px-2 bg-black border-white border-2 m-2 rounded-full text-white">-</button>
                  <input
                    id="threeMan"
                    type="number"
                    name="threeMan"
                    value={formData.tents.threeMan}
                    readOnly
                    className="border px-2 py-1 pl-2 md:pl-6 text-center w-16 text-black"
                  />
                  <button type="button" onClick={() => incrementTent('threeMan')} className="px-2 bg-black border-white border-2 m-2 rounded-full text-white">+</button>
                </div>
              </div>
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
                  <label htmlFor="item1">Grøn Camping (249 DKK)</label>
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
                  <label htmlFor="item2">Vikinge Hat (39 DKK)</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ShoppingCart formData={formData} prevStage={prevStage} nextStage={handleNextStage} calculateTotalPrice={calculateTotalPrice} />
      {errors.tents && <p className="text-red mt-2">{errors.tents}</p>}
    </div>
  );
};

export default CampAndTentSelection;
