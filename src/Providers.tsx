import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { ThemeProvider } from 'react-native-magnus';

import Environment from './services/relay/Environment';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <ThemeProvider>{children}</ThemeProvider>
    </RelayEnvironmentProvider>
  );
};

export default Providers;
