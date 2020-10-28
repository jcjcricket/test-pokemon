import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { LoginContext } from '../app/app';

import './navbar.css';

const NavBar = ({ handleLogout }) => {
  const isLoggedIn = useContext(LoginContext);
  const history = useHistory();
  const location = useLocation();

  return (
    <div className='navbar'>
      <ul>
        <li className='navbar-back'>
          {location.pathname !== '/' ?  <Link
            to=''
            onClick={() => {
              history.goBack();
            }}>
            Back
          </Link> : null}
         
        </li>

        <li className='navbar-logout'>
          <Link onClick={handleLogout} to='/'>
            {isLoggedIn ? 'Logout' : 'Login'}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
