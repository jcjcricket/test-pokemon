import React from 'react';


import CardViewItem from '../card-view-item';

import './card-view.css';

const CardView = ({ cards: { cards } }) => {
  let data = cards.map((i) => {
    return <CardViewItem info={i} key={i.id} />;
  });

  return (
    <div className='card-view'>
        <div className='card-view-row'>{data}</div>
    </div>
  );
};

export default CardView;
