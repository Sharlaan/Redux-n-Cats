import React, { useContext, useEffect, useState } from 'react';
import { DEFAULT_NB_IMG, IMG_TYPES, MAX_IMAGES } from './cats.constants';
import { CatsStore } from './cats.provider';

export default function CatsSelector() {
  const { fetchByType } = useContext(CatsStore);
  const [nbImg, setNbImg] = useState(DEFAULT_NB_IMG);
  const [imgType, setImgType] = useState(IMG_TYPES[0]);

  useEffect(
    () => {
      fetchByType(imgType, nbImg);
    },
    [imgType, nbImg], // eslint-disable-line
  );

  const handleChangeImgType = ({ target }) => setImgType(target.value);

  const handleChangeNbImg = ({ target }) => {
    const newNbImg = Math.min(target.value, MAX_IMAGES);
    setNbImg(newNbImg);
  };

  const handleRefresh = () => fetchByType(imgType, nbImg);

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
