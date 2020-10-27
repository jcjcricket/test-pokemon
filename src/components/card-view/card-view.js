import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import CardViewItem from '../card-view-item';

import './card-view.css';

const CardView = ({ cards: { cards } }) => {
  let data = cards.map((i) => {
    return <CardViewItem info={i} key={i.id} />;
  });

  return (
    <div className='card-view'>
      <div className='card-view-column'>
        <div className='card-view-row'>{data}</div>
      </div>
    </div>
  );
};

export default CardView;
