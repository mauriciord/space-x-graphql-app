import React from 'react';

import LaunchesList from '../features/launches/LaunchesList';

import LayoutScreen from './LayoutScreen';

const HomeScreen: React.FC = () => {
  return (
    <LayoutScreen>
      <LaunchesList />
    </LayoutScreen>
  );
};

export default HomeScreen;
