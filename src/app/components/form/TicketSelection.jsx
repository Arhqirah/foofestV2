import React from 'react';
import Ticket from '@/app/components/form/Ticket';

const TicketSelection = ({ formData, setFormData, nextStage, toggleExpand, expandedTickets, errors }) => {
  return (
    <div>
      <h2 className="text-lg mb-4 sm:text-center text-center ">Vælg billettype</h2>
      <div className="sm:flex sm:flex-row sm:justify-items-center flex flex-col justify-evenly gap-4">
        <Ticket
          type="Bonde"
          name="BONDE"
          price="FRA 799.-"
          icon="/assets/icons/Bonde150.webp"
          benefits={['Stå pladser', 'Adgang til eventet']}
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
          benefits={['VIP Pladser', 'Gratis drikkevare', 'Mød Artisten']}
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
      {errors.ticketType && <p className="text-orange">{errors.ticketType}</p>}
    </div>
  );
};

export default TicketSelection;
