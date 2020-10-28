import React, { useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import LoginPage from '../pages/login-page';
import PasswordPage from '../pages/password-page';
import CardsPage from '../pages/cards-page';
import CardPage from '../pages/card-page';

import { generateRandomNum } from '../../utils/randomNum';

import './app.css';

export const LoginContext = React.createContext();

function App() {
  const [inApp, setinApp] = useState(false);
  const [smsCode, setSmsCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const loginAndPassword = {
    trueLogin: 'kode@kode.ru',
    truePassword: 'Enk0deng',
    uname: '',
    psw: '',
  };

  const pin = {
    truePin: smsCode,
    pin: '',
  };

  const handleLoginInput = (e) => {
    loginAndPassword[e.target.name] = e.target.value;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (
      loginAndPassword.trueLogin === loginAndPassword.uname &&
      loginAndPassword.truePassword === loginAndPassword.psw
    ) {
      setinApp(true);
      setSmsCode(generateRandomNum());
    } else {
      console.log(loginAndPassword);
    }
  };

  const handlePinInput = (e) => {
    pin[e.target.name] = e.target.value;
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin.truePin === pin.pin) {
      setIsLoggedIn(true);
    } else {
      console.log(pin);
    }
  };

  return (
    <LoginContext.Provider value={isLoggedIn}>
      <Router>
        <div className='app'>
          <Switch>
            <Route
              path='/login'
              exact
              render={() => {
                return (
                  <LoginPage
                    handleLoginInput={handleLoginInput}
                    handleLoginSubmit={handleLoginSubmit}
                    isLoggedIn={isLoggedIn}
                    inApp={inApp}
                  />
                );
              }}
            />
            <Route
              path='/password'
              exact
              render={() => {
                return (
                  <PasswordPage
                    isLoggedIn={isLoggedIn}
                    inApp={inApp}
                    smsCode={smsCode}
                    handlePinInput={handlePinInput}
                    handlePinSubmit={handlePinSubmit}
                  />
                );
              }}
            />
            <Route
              path='/'
              exact
              isLoggedIn={isLoggedIn}
              render={() => {
                if (!isLoggedIn) {
                  return <Redirect to='/login' />;
                }
                return <CardsPage isLoggedIn={isLoggedIn} />;
              }}
            />
            <Route
              path='/cards/:id'
              exact
              render={({ match }) => {
                if (!isLoggedIn) {
                  return <Redirect to='/login' />;
                }
                let id = match.params.id;

                return <CardPage itemId={id} />;
              }}
            />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
