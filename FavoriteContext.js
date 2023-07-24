import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFromFavorites = (item) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favItem) => favItem !== item));
  };

  const isFavorite = (item) => {
    return favorites.includes(item);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites, 
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
