import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import MainRoute from './src/routes/MainRoute';
import Providers from './src/Providers';
import ErrorBoundaryRetry from './src/shared/common/ErrorBoundaryRetry';
import Loading from './src/shared/common/Loading';

const App: React.FC = () => {
  return (
    <Providers>
      <ErrorBoundaryRetry>
        <Suspense fallback={<Loading />}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <MainRoute />
          </NavigationContainer>
        </Suspense>
      </ErrorBoundaryRetry>
    </Providers>
  );
};

export default App;
