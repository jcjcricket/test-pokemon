import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import CardView from '../../card-view';
import SideBar from '../../sidebar';
import Spinner from '../../spinner';

import './cards-page.css';

import PokeApi from '../../../services/poke-api';

const pokeApi = new PokeApi();

const CardsPage = ({ isLoggedIn }) => {
  const [cards, setCards] = useState({ cards: [] });
  const [types, setTypes] = useState([]);
  const [subTypes, setSubTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      const data = await pokeApi.getAllCards();
      setCards(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (!isLoggedIn) {
    return <Redirect to='login' />;
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className='cards-page'>
      <SideBar />
      <CardView cards={cards} />
    </div>
  );
};

export default CardsPage;
