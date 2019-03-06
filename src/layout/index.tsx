import React from 'react';

import './App.css';
import ReactHeader from './AppHeader.React';
import CatsHeader from './AppHeader.Cats';
import Todos from '../todos';
import Cats from '../cats';

export default () => (
  <>
    <header className="App-header">
      <ReactHeader />
      <CatsHeader />
    </header>

    <Todos />

    <Cats />
  </>
);
