import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import MainRoute from './src/routes/MainRoute';
import Providers from './src/Providers';
import ErrorBoundaryRetry from './src/shared/common/ErrorBoundaryRetry';
import Loading from './src/shared/common/Loading';

export default function App(): JSX.Element {
  return (
    <Providers>
      <ErrorBoundaryRetry>
        <Suspense fallback={<Loading />}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView
              style={{ flex: 1, marginTop: Constants.statusBarHeight }}
            >
              <MainRoute />
            </SafeAreaView>
          </NavigationContainer>
        </Suspense>
      </ErrorBoundaryRetry>
    </Providers>
  );
}
