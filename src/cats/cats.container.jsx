import React from 'react';
import { useStore } from 'easy-peasy';

export default function CatsContainer() {
  const { error, isFetching, urls } = useStore(({ cats }) => ({
    error: cats.error,
    isFetching: cats.isFetching,
    urls: cats.urls,
  }));

  if (error)
    return (
      <p>
        {error}
        <span role="img" aria-label="Crying cat face">
          😿
        </span>
      </p>
    );

  if (isFetching) return <p>Fetching images ...</p>;

  return (
    <section>
      {urls.map((u, i) => (
        <img key={i} src={u} alt="some cat" />
      ))}
    </section>
  );
}
