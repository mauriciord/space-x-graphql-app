import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { ThemeProvider } from 'react-native-magnus';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Environment from './services/relay/Environment';
import { FavoritesProvider } from './contexts/FavoritesContext';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <SafeAreaProvider>
      <RelayEnvironmentProvider environment={Environment}>
        <ThemeProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </ThemeProvider>
      </RelayEnvironmentProvider>
    </SafeAreaProvider>
  );
};

export default Providers;
