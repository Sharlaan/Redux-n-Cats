import React, { createContext, useState } from 'react';
import { getImages } from './cats.service';

export const CatsStore = createContext();

export default function CatsProvider({ children }) {
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [urls, setUrls] = useState([]);

  const fetchByType = async (type, nb) => {
    setIsFetching(true); // dispatch({ type: CATS_REQUESTING });

    try {
      const urls = await getImages(type, nb);
      if (urls) {
        // dispatch({ type: CATS_SUCCEEDED, payload: urls });
        setIsFetching(false);
        setUrls(urls);
      }
    } catch (error) {
      // dispatch({ type: CATS_FAILED, payload: error.message });
      setIsFetching(false);
      setError(error.message);
    }
  };

  return (
    <CatsStore.Provider value={{ error, isFetching, urls, fetchByType }}>
      {children}
    </CatsStore.Provider>
  );
}
