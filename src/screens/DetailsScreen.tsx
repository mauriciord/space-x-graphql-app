import React from 'react';

import { LaunchDetails } from '../features/launches';

import LayoutScrollView from './LayoutScrollView';

const DetailsScreen: React.FC = () => {
  return (
    <LayoutScrollView>
      <LaunchDetails />
    </LayoutScrollView>
  );
};

export default DetailsScreen;
