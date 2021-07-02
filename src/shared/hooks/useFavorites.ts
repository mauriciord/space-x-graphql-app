import { useContext } from 'react';

import {
  FavoritesContext,
  FavoritesContextData,
  FavoritesProvider,
} from '../../contexts/FavoritesContext';

function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  // useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       'create table if not exists favorites (id integer primary key not null, link text);'
  //     );
  //   });
  // }, []);

  if (!context) {
    throw new Error('useFavorites must be used within an FavoritesProvider');
  }

  return context;
}

export { FavoritesProvider, useFavorites };
