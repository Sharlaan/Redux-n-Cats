import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import { fetchByType } from './cats.actions';

const TYPES = ['gif', 'jpg,png', 'jpg,png,gif'];

const MAX_IMAGES = 10;

function CatsSelector({ changeType }) {
  const [nbImg, setNbImg] = useState(4);
  // const [imgType, setImgType] = useState(TYPES[0]);
  const selectEl = useRef(TYPES[0]);

  useEffect(() => {
    changeType(TYPES[0]);
  }, []); // called only on mount

  const handleChangeImgType = ({ target }) => {
    // setImgType(target.value);
    changeType(target.value, nbImg);
  };

  const handleChangeNbImg = ({ target }) => {
    const newNbImg = Math.min(target.value, MAX_IMAGES);
    setNbImg(newNbImg);
    // changeType(imgType, newNbImg);
    changeType(selectEl.current.value, newNbImg);
  };

  const handleRefresh = () => {
    // changeType(imgType, nbImg);
    changeType(selectEl.current.value, nbImg);
  };

  return (
    <section>
      <input type="number" value={nbImg} onChange={handleChangeNbImg} />

      <select
        ref={selectEl}
        /* value={imgType} */
        onChange={handleChangeImgType}
      >
        {TYPES.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <button type="button" onClick={handleRefresh}>
        Refresh
      </button>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeType: (type, nb) => dispatch(fetchByType(type, nb)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CatsSelector);
