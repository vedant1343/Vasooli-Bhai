import React from 'react';

const Popup = ({ card, closePopup }) => {
  return (
    <div className="popup-background">
      <div className="popup">
        <img src={card.icon} alt={card.name} />
        <h3>{card.name}</h3>
        <p>{card.description}</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
