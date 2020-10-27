import React, { useEffect, useState } from 'react';
import Spinner from '../../spinner';

import PokeApi from '../../../services/poke-api';

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
    <div className='card-page'>
      <div className='img-container'>
        <img src={data.imageUrlHiRes} alt='pokemon_card' />
        <div>
          {data.attacks
            ? data.attacks.map((i) => <p key={i.id}>{i.text} </p>)
            : '-'}
        </div>
      </div>

      <div className='pokemon-details'>
        <ul>
          <li>Pokemon name: {data.name ? data.name : '-'}</li>
          <li>Type: {data.types ? data.types : '-'}</li>
          <li>Subtype: {data.subtype ? data.subtype : '-'}</li>
          <hr />
          <ol>
            attack damage:{' '}
            {data.attacks
              ? data.attacks.map((i) => <li key={i.id}>{i.damage} </li>)
              : '-'}
          </ol>
          <ol>
            attack cost:{' '}
            {data.attacks
              ? data.attacks.map((i) => <li key={i.id}>{i.cost} </li>)
              : '-'}
          </ol>
          <li>
            resistances:{' '}
            {data.resistances ? data.resistances.map((i) => i.type) : '-'}
            {data.resistances ? data.resistances.map((i) => i.value) : '-'}
          </li>
          <li>evolves from: {data.evolvesFrom ? data.evolvesFrom : '-'}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardPage;
