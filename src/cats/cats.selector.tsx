import React, { useCallback, useState } from 'react';
import { useStoreActions } from '../store';
import { DEFAULT_NB_IMG, IMG_TYPES, MAX_IMAGES, MimeTypes } from './cats.constants';

export default function CatsSelector() {
  const changeType = useStoreActions(({ cats }) => cats.getByType);
  const [nbImg, setNbImg] = useState(DEFAULT_NB_IMG);
  const [imgType, setImgType] = useState(IMG_TYPES[0]);

  const handleChangeNbImg = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newNbImg = Math.min(+target.value, MAX_IMAGES);
    setNbImg(newNbImg);
  };

  const handleChangeImgType = ({ target }: React.ChangeEvent<HTMLSelectElement>) =>
    setImgType(target.value as MimeTypes);

  const handleRefresh = useCallback(() => changeType({ type: imgType, nb: nbImg }), [
    changeType,
    imgType,
    nbImg,
  ]);

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
