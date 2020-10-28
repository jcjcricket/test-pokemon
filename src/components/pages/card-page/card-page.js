import React, { useEffect, useState } from 'react';

import PokeApi from '../../../services/poke-api';

import Navbar from '../../navbar';

import './card-page.css';

const pokeApi = new PokeApi();

const CardPage = ({ itemId }) => {
  const [cardItem, setCardItem] = useState({ card: {} });


  useEffect(() => {
    async function fetchData() {
      const data = await pokeApi.getCard(itemId);
      setCardItem(data);
    }
    fetchData();
  }, [itemId]);

  let data = cardItem.card;

  return (
    <div>
      <Navbar />
      <div className='page'>
        <div className='card-page-container'>
          <div className='img-container'>
            <img src={data.imageUrlHiRes} alt='pokemon_card' />
            <div>
              {data.attacks
                ? data.attacks.map((i) => <p key={data.id}>{i.text} </p>)
                : '-'}
            </div>
          </div>

          <div className='pokemon-details'>
            <ul>
              <li>Pokemon name: {data.name ? data.name : '-'}</li>
              <li>Type: {data.types ? data.types : '-'}</li>
              <li>Subtype: {data.subtype ? data.subtype : '-'}</li>
              <hr />
              <ul>
                Attack Damage:{' '}
                {data.attacks
                  ? data.attacks.map((i) => <li key={data.id}>{i.damage} </li>)
                  : '-'}
              </ul>
              <ul>
                Attack Cost:{' '}
                {data.attacks
                  ? data.attacks.map((i) => <li key={data.id}>{i.cost} </li>)
                  : '-'}
              </ul>
              <li>
                Resistances:{' '}
                {data.resistances ? data.resistances.map((i) => i.type) : '-'}
                {data.resistances ? data.resistances.map((i) => i.value) : '-'}
              </li>
              <li>Evolves From: {data.evolvesFrom ? data.evolvesFrom : '-'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
