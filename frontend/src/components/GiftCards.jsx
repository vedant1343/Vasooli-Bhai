import React, { useState } from 'react';
import './GiftCards.css';
import GiftCard from './GiftCard';
import Header from './Header';
import Popup from './Popup';
import amazon_img from '../img/amazon.jpeg'
import starbucks_img from '../img/starbucks.jpeg'
import iTunes_img from '../img/iTunes.jpeg'
import home_depot_img from '../img/home_depot.jpeg'
import tata_img from '../img/tata.png'
import netflix_img from '../img/netflix.jpeg'
import uber_img from '../img/ubereats.png'
import hamleys_img from '../img/hamleys.jpeg'

const giftCards = [
  {
    "name": "Amazon Gift Card",
    "icon": amazon_img,
    "description": "Shop for a wide range of products on the world's largest online marketplace."
  },
  {
    "name": "Starbucks 20$ Gift Card",
    "icon": starbucks_img,
    "description": "Enjoy your favorite coffee and treats at Starbucks locations worldwide."
  },
  {
    "name": "iTunes Gift Card",
    "icon": iTunes_img,
    "description": "Download music, movies, apps, and more from the Apple ecosystem."
  },
  {
    "name": "Home Depot 25$ Gift Card",
    "icon": home_depot_img,
    "description": "Upgrade your home with tools, appliances, and home improvement essentials."
  },
  {
    "name": "Netflix 3 months Gift Card",
    "icon": netflix_img,
    "description": "Stream the latest movies and TV shows with a Netflix subscription."
  },
  {
    "name": "Tata Cliq Gift Card",
    "icon": tata_img,
    "description": "Pamper yourself with cosmetics, skincare, and beauty products."
  },
  {
    "name": "Uber Eats 20$ gift Card",
    "icon": uber_img,
    "description": "Get a ride or order food delivery with the convenience of Uber."
  },
  {
    "name": "Hamleys 20$ Gift Card",
    "icon": hamleys_img,
    "description": "Play with your favourite toys!"
  }
]


function GiftCards() {
  const [selectedCard, setSelectedCard] = useState(null);

  const openPopup = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className="GiftCards">
      <Header />
      {giftCards.map((card, index) => (
        <GiftCard key={index} card={card} openPopup={openPopup} />
      ))}
      {selectedCard && (
        <Popup card={selectedCard} closePopup={closePopup} />
      )}
    </div>
  );
}

export default GiftCards;
