import React from 'react';
import {
  Link,
 
} from 'react-router-dom';

import './card-view-item.css';

const CardViewItem = ({ info }) => {

  return (
    <Link style={{textDecoration: 'none', wordWrap: 'break-word'}} to={`/cards/${info.id}`}>
        <div className='card-view-item' id={info.id}>
          <img src={info.imageUrl} alt='' />
          <p>Name: {info.name} </p>
          <p>Artist: {info.artist} </p>
        </div>
      </Link>
  );
};

export default CardViewItem;
