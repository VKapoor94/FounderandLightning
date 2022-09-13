import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Details"
        options={{headerShown: false}}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
