import React from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LayoutScrollView: React.FC = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
      }}
    >
      {children}
    </ScrollView>
  );
};

export default LayoutScrollView;
