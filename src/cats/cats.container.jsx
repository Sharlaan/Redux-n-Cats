import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const { error, isFetching, urls } = useSelector(({ cats: { error, isFetching, urls } }) => ({
    error,
    isFetching,
    urls,
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
};
