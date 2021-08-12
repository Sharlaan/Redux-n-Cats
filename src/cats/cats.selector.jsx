import { useStoreActions } from 'easy-peasy';
import React, { useEffect, useRef, useState } from 'react';

const TYPES = ['gif', 'jpg,png', 'jpg,png,gif'];

const MAX_IMAGES = 10;

export default function CatsSelector() {
  const changeType = useStoreActions(({ cats }) => cats.getByType);
  const [nbImg, setNbImg] = useState(4);
  const selectEl = useRef(TYPES[0]);

  useEffect(() => {
    changeType({ type: TYPES[0] });
  }, [changeType]); // called only on mount

  const handleChangeNbImg = ({ target }) => {
    const newNbImg = Math.min(target.value, MAX_IMAGES);
    setNbImg(newNbImg);
    changeType({ type: selectEl.current.value, nb: newNbImg });
  };

  const handleChangeImgType = ({ target }) => changeType({ type: target.value, nb: nbImg });

  const handleRefresh = () => changeType({ type: selectEl.current.value, nb: nbImg });

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
