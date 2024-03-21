import React from 'react';

const GiftCard = ({ card, openPopup }) => {
  return (
    <div className="gift-card">
      <img src={card.icon} alt={card.name} />
      <h3>{card.name}</h3>
      <button onClick={() => openPopup(card)}>Redeem</button>
    </div>
  );
};

export default GiftCard;
