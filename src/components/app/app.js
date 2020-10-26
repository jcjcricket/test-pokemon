import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/login-page';
import CardsPage from '../pages/cards-page'

import './app.css';

function App() {
  return (
    <div className='app'>
      <CardsPage />
    </div>
  );
}

export default App;
