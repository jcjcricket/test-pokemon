import React from 'react';
import { Redirect } from 'react-router-dom';

import './login-page.css';

const LoginPage = ({ handleLoginInput, handleLoginSubmit, isLoggedIn, inApp }) => {

  if (inApp) {
    return <Redirect to='/password' />
  }

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <div className='container'>
        <label htmlFor='uname'>
          <b>Username</b>
        </label>
        <input
          type='text'
          placeholder='Enter Username'
          name='uname'
          required
          onKeyUp={(e) => handleLoginInput(e)}
        />

        <label htmlFor='psw'>
          <b>Password</b>
        </label>
        <input
          type='password'
          placeholder='Enter Password'
          name='psw'
          required
          onKeyUp={(e) => handleLoginInput(e)}></input>

        <button type='submit'>Login</button>
      </div>
    </form>
  );
};

export default LoginPage;
