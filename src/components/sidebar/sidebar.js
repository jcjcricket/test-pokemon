import React from 'react';

import './sidebar.css';

const SideBar = ({ types, subtypes, handleSelect }) => {
  return (
    <div>
      <div className='sidebar'>
        <div>
          <select
            className='select'
            name='type'
            onChange={(e) => handleSelect(e)}>
            <option value="0" hidden>Select Type:</option>
            {types.types.map((i, index) => {
              return (
                <option value={i} key={index}>
                  {i}
                </option>
              );
            })}
          </select>
          <select
            className='select'
            name='type'
            onChange={(e) => handleSelect(e)}>
            {subtypes.subtypes.map((i) => {
              return (
                <option value={i} key={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
