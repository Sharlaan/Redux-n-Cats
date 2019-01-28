import React from 'react';
import { connect } from 'react-redux';

const CatsContainer = ({ error, isFetching, urls }) => {
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

const mapStateToProps = ({ cats: { error, isFetching, urls } }) => ({
  error,
  isFetching,
  urls,
});

export default connect(mapStateToProps)(CatsContainer);
