import React from 'react';

import CardViewItem from '../card-view-item';

import './card-view.css';

const CardView = () => {
  return (
    <div className='card-view'>
      <div className='card-view-row'>
        <CardViewItem />
        <CardViewItem />
      </div>
      <div className='card-view-row'>
        <CardViewItem />
        <CardViewItem />
      </div>
    </div>
  );
};

export default CardView;
