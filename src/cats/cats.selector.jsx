import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchByType } from './cats.actions';
import { DEFAULT_NB_IMG, IMG_TYPES, MAX_IMAGES } from './cats.constants';

export default function CatsSelector() {
  const dispatch = useDispatch();
  const [nbImg, setNbImg] = useState(DEFAULT_NB_IMG);
  const [imgType, setImgType] = useState(IMG_TYPES[0]);

  const handleChangeImgType = ({ target }) => setImgType(target.value);

  const handleChangeNbImg = ({ target }) => {
    const newNbImg = Math.min(target.value, MAX_IMAGES);
    setNbImg(newNbImg);
  };

  const handleRefresh = () => dispatch(fetchByType(imgType, nbImg));

  return (
    <section>
      <input type="number" value={nbImg} onChange={handleChangeNbImg} />

      <select value={imgType} onChange={handleChangeImgType}>
        {IMG_TYPES.map((o) => (
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
