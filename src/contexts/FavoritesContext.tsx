import React, { createContext, useState } from 'react';

export interface FavoritesContextData {
  data: {
    favoritesList: string[];
  };
  helpers: {
    pushNewFavorite(entry: string): void;
    resetFavoriteList(arrayEntry: string[]): void;
    removeFromFavoriteList(entry: string): void;
  };
}

// const db = openDatabase();

export const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState<string[]>([]);
  // const [forceUpdate, forceUpdateId] = useForceUpdate();

  function pushNewFavorite(entry: string) {
    setFavoritesList((prevState) => [...prevState, entry]);
  }

  function resetFavoriteList(arrayEntry: string[]) {
    setFavoritesList(arrayEntry);
  }

  function removeFromFavoriteList(entry: string) {
    setFavoritesList((prevState) => [
      ...prevState.filter((value) => value !== entry),
    ]);
  }

  return (
    <FavoritesContext.Provider
      value={{
        data: {
          favoritesList,
        },
        helpers: {
          pushNewFavorite,
          resetFavoriteList,
          removeFromFavoriteList,
        },
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
