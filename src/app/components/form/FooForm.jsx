import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
    tents: 0,
    personalInfo: {},
    paymentDetails: { creditCardNumber: '' },
  });

  const nextStage = () => setStage(stage + 1);
  const prevStage = () => setStage(stage - 1);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 flex flex-col items-center">
      {stage === 1 && (
        <div>
          <h2 className="text-lg font-bold">Vælg billettype</h2>
          <div className="flex justify-evenly">
            <button
              onClick={() => {
                setFormData({ ...formData, ticketType: 'bonde' });
                nextStage();
              }}
            >
              Bonde
            </button>
            <button
              onClick={() => {
                setFormData({ ...formData, ticketType: 'viking' });
                nextStage();
              }}
            >
              Viking
            </button>
          </div>
        </div>
      )}

      {stage === 2 && (
        <div>
          <button onClick={prevStage}>Tilbage</button>
          <h2 className="text-lg font-bold">Vælg antal billetter</h2>
          <input
            type="number"
            name="viking"
            onChange={handleInputChange}
            placeholder="VIKING Billetter"
            className="border px-2 py-1"
          />
          <input
            type="number"
            name="bonde"
            onChange={handleInputChange}
            placeholder="BONDE Billetter"
            className="border px-2 py-1"
          />
          <button onClick={nextStage}>Videre</button>
        </div>
      )}

      {stage === 3 && (
        <div>
          <button onClick={prevStage}>Tilbage</button>
          <button onClick={nextStage}>Videre</button>
        </div>
      )}

      {stage === 4 && (
        <div>
          <button onClick={prevStage}>Tilbage</button>
          <button onClick={nextStage}>Videre</button>
        </div>
      )}

      {stage === 5 && (
        <div>
          <button onClick={prevStage}>Tilbage</button>
          <button onClick={nextStage}>Videre</button>
        </div>
      )}

      {stage === 6 && (
        <div>
          <button onClick={prevStage}>Tilbage</button>
          <button onClick={nextStage}>Confirm and Pay</button>
        </div>
      )}

      {stage === 7 && (
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
