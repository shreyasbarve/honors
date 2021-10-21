import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Home, Payment, Review } from './components';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Review" component={Review} />
    </Stack.Navigator>
  );
};

export default Routes;
