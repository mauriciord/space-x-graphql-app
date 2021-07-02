import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, DetailsScreen } from '../screens';

const Stack = createStackNavigator();

const MainRoute: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route?.params?.name || 'Details',
        })}
      />
    </Stack.Navigator>
  );
};

export default MainRoute;
