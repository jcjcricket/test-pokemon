import React from 'react';

import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className='card-view-row'>
        {left} 
        {right}
    </div>
  );
};


export default Row;
