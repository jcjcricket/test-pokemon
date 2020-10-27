import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './card-view-item.css';

const CardViewItem = ({ info }) => {

  return (
      <Link to={`/cards/${info.id}`}>
        <div className='card-view-item' id={info.id}>
          <img src={info.imageUrl} alt='' />
          <p>Name: {info.name} </p>
          <p>Artist: {info.artist} </p>
        </div>
      </Link>
  );
};

export default CardViewItem;
