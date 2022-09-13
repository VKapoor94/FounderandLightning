import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import BottomTabNavigator from './src/navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
