import React from 'react';

const CATS_LOGO = 'https://cdn2.thecatapi.com/logos/thecatapi_256xW.png';

export default function AppHeaderCats() {
  return (
    <section className="Cats-header">
      <a href="https://thecatapi.com/" target="_blank" rel="noopener noreferrer">
        <img src={CATS_LOGO} alt="cats-api.com logo" />
        <br />
        TheCatAPI - Cats as a Service, Everyday is Caturday.
      </a>
    </section>
  );
}
