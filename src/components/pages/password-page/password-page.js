import React from 'react';
import { Redirect } from 'react-router-dom';
import Warning from '../../warning'

import './password-page.css';

const PasswordPage = ({
  inApp,
  isLoggedIn,
  handlePinSubmit,
  handlePinInput,
  smsCode,
  isWarning : {isWarning, text}
}) => {
  if (!inApp) {
    return <Redirect to='/login' />;
  }

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <div className='password-page'>
      <form onSubmit={handlePinSubmit}>
        <div className='container'>
        {isWarning ? <Warning text={text} /> : null}
          <h2>One more step:</h2>

          <input
            type='text'
            placeholder={smsCode}
            name='pin'
            required
            onKeyUp={(e) => handlePinInput(e)}
          />
          <button type='submit'>Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default PasswordPage;
