import React from 'react';
import { Redirect } from 'react-router-dom';

import './password-page.css';

const PasswordPage = ({ inApp, isLoggedIn, handlePinSubmit, handlePinInput, smsCode }) => {
  
  if (!inApp) {
    return <Redirect to='/login'/>
  }

  if (isLoggedIn) {
    return <Redirect to='/'/>
  }

  return (
    <form onSubmit={handlePinSubmit}>
      <div className='container'>
        
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
  );
};

export default PasswordPage;
