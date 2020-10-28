import React, { useState, useEffect } from 'react';
import CardView from '../../card-view';
import SideBar from '../../sidebar';
import Spinner from '../../spinner';
import Navbar from '../../navbar';

import './cards-page.css';

import PokeApi from '../../../services/poke-api';

const pokeApi = new PokeApi();

const CardsPage = ({ handleLogout }) => {
  const [cards, setCards] = useState({ cards: [] });
  const [types, setTypes] = useState({ types: [] });
  const [subtypes, setSubTypes] = useState({ subtypes: [] });
  const [selectedType, setselectedType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      const dataTypes = await pokeApi.getTypesList();
      const dataSubTypes = await pokeApi.getSubtypesList();
      setTypes(dataTypes);
      setSubTypes(dataSubTypes);
      if (types.types.includes(selectedType)) {
        const data = await pokeApi.getTypeOf(selectedType);
        setCards(data);
        setIsLoading(false);
      } else if (subtypes.subtypes.includes(selectedType)) {
        const data = await pokeApi.getSubtypeOf(selectedType);
        setCards(data);
        setIsLoading(false);
      } else {
        const data = await pokeApi.getAllCards();
        setCards(data);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [selectedType]);

  const handleSelect = (e) => {
    setselectedType(e.target.value);
    console.log(e.target.value);
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className='page'>
        <div className='cards-page-container'>
          <SideBar
            types={types}
            subtypes={subtypes}
            handleSelect={handleSelect}
          />
          <CardView cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
