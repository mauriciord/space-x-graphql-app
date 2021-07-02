import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';

import Environment from './services/relay/Environment';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      {children}
    </RelayEnvironmentProvider>
  );
};

export default Providers;
