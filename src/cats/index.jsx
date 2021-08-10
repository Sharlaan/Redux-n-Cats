import React from 'react';
import Cats from './cats.container';
import CatsSelector from './cats.selector';
import './cats.styles.css';

export default function CatsSection() {
  return (
    <article className="Cats">
      <CatsSelector />
      <Cats />
    </article>
  );
}
