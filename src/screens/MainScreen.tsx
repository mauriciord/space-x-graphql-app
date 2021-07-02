import React from 'react';
import { Div } from 'react-native-magnus';

import LaunchesList from '../features/launches/LaunchesList';

const MainScreen: React.FC = () => {
  return (
    <Div flex={1} mt="2xl">
      <LaunchesList />
    </Div>
  );
};

export default MainScreen;
