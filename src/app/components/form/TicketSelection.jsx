import React from 'react';
import Ticket from '@/app/components/form/Ticket';

const TicketSelection = ({ formData, setFormData, nextStage, toggleExpand, expandedTickets, errors }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">Vælg billettype</h2>
      <div className="flex flex-row justify-evenly gap-4">
        <Ticket
          type="Bonde"
          name="BONDE"
          price="FRA 799.-"
          icon="/assets/icons/Bonde150.webp"
          benefits={['Standard seating', 'Access to event']}
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
          benefits={['Priority seating', 'Free drinks', 'Meet and greet']}
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
