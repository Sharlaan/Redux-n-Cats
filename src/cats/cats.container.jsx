import React, { useContext } from 'react';
import { CatsStore } from './cats.provider';

export default function CatsContainer() {
  const { error, isFetching, urls } = useContext(CatsStore);

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
