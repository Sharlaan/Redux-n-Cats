import React from 'react';
import Cats from '../cats';
import Todos from '../todos';
import './App.css';
import CatsHeader from './AppHeaderCats';
import ReactHeader from './AppHeaderReact';

export default function Layouyt() {
  return (
    <>
      <header className="App-header">
        <ReactHeader />
        <CatsHeader />
      </header>

      <Todos />

      <Cats />
    </>
  );
}
