import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

const MainRoute: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Details" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainRoute;
