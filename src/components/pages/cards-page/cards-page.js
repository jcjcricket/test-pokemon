import React, { useState, useEffect } from 'react';
import CardView from '../../card-view';
import SideBar from '../../sidebar';
import NavBar from '../../navbar';

import './cards-page.css';

const _apiBase = `https://api.pokemontcg.io/v1/cards`;

const CardsPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(_apiBase);
      const data = await response.json();
      setCards(data);
    };

    fetchCards();
  }, []);

  console.log(cards);

  return (
    <div className='cards-page'>
      <NavBar />
      <SideBar />
      <CardView />
    </div>
  );
};

export default CardsPage;
