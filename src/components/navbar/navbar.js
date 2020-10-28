import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { LoginContext } from '../app/app';

import './navbar.css';

const NavBar = () => {
  const isLoggedIn = useContext(LoginContext);
  let history = useHistory();

  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link
            class='nav-link active'
            to=''
            onClick={() => {
              history.goBack();
            }}>
            Back
          </Link>
        </li>
        <li>
          <Link to=''>{isLoggedIn ? 'Logout123' : 'Login'}</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
