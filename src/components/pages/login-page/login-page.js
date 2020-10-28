import React from 'react';
import { Redirect } from 'react-router-dom';
import Warning from '../../warning';

import './login-page.css';

const LoginPage = ({
  handleLoginInput,
  handleLoginSubmit,
  isLoggedIn,
  inApp,
  isWarning: { isWarning, text },
}) => {
  if (inApp) {
    return <Redirect to='/password' />;
  }

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-page'>
      <form onSubmit={handleLoginSubmit}>
        <div className='container'>
          {isWarning ? <Warning text={text} /> : null}
          <label htmlFor='uname'>
            <b>Username</b>
          </label>
          <input
            type='text'
            name='uname'
            required
            onKeyUp={(e) => handleLoginInput(e)}
          />

          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            type='password'
            name='psw'
            required
            onKeyUp={(e) => handleLoginInput(e)}
          />

          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
