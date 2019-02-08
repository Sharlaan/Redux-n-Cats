import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

const TYPES = ['gif', 'jpg,png', 'jpg,png,gif'];

const DEFAULT_NB_IMAGES = 4;
const MAX_IMAGES = 10;

function CatsSelector({ changeType }) {
  const [nbImg, setNbImg] = useState(DEFAULT_NB_IMAGES);
  const selectEl = useRef(TYPES[0]);

  useEffect(() => {
    changeType(TYPES[0], DEFAULT_NB_IMAGES);
  }, []); // Called only on mount

  const handleChangeNbImg = ({ target }) => {
    const newNbImg = Math.min(target.value, MAX_IMAGES);
    setNbImg(newNbImg);
    changeType(selectEl.current.value, newNbImg);
  };

  const handleChangeImgType = ({ target }) => changeType(target.value, nbImg);

  const handleRefresh = () => changeType(selectEl.current.value, nbImg);

  return (
    <section>
      <input type="number" value={nbImg} onChange={handleChangeNbImg} />

      <select ref={selectEl} onChange={handleChangeImgType}>
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

const mapDispatch = ({ cats: { fetchByType } }) => ({
  changeType: (type, nb) => fetchByType({ type, nb }),
});

export default connect(
  null,
  mapDispatch,
)(CatsSelector);
