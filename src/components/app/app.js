import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isWarning, setWarning] = useState({ isWarning: false, text: '' });

  const loginAndPassword = {
    trueLogin: 'kode@kode.ru',
    truePassword: 'Enk0deng',
  };

  const u = {};

  const pin = {
    truePin: smsCode,
    pin: '',
  };

  const handleLoginInput = (e) => {
    u[e.target.name] = e.target.value;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (
      loginAndPassword.trueLogin === u.uname &&
      loginAndPassword.truePassword === u.psw
    ) {
      setinApp(true);
      setSmsCode(generateRandomNum());
    } else {
      setWarning({
        isWarning: true,
        text: 'Invalid password or username. Try again.',
      });
      setTimeout(() => {
        setWarning({
          isWarning: false,
          text: '',
        });
      }, 3000);
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
      setWarning({
        isWarning: true,
        text: 'Invalid PIN. Try again',
      });
      setTimeout(() => {
        setWarning({
          isWarning: false,
          text: '',
        });
      }, 3000);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setinApp(false);
  };

  return (
    <ErrorBoundry>
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
                      isWarning={isWarning}
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
                      isWarning={isWarning}
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
                  return (
                    <CardsPage
                      isLoggedIn={isLoggedIn}
                      handleLogout={handleLogout}
                    />
                  );
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
    </ErrorBoundry>
  );
}

export default App;
