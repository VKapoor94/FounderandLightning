import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainNavigation from './MainNavigation';
import AddNewNavigation from './AddNewNavigation';
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../styles/COLORS';
const tabBarLabelStyle = {
  fontSize: 12,
  fontWeight: '900',
};
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'MainNavigation') {
            iconName = !focused ? 'home-outline' : 'home-sharp';
          } else if (route.name === 'AddNewNavigation') {
            iconName = !focused ? 'add-circle-outline' : 'add-circle';
          }
          return (
            <Ionicons size={24} color={COLORS.tabIconDefault} name={iconName} />
          );
        },
        tabBarActiveTintColor: COLORS.tabIconDefault,
        tabBarInactiveTintColor: COLORS.tabIconSelected,
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
          title: 'Home',
          tabBarLabelStyle: tabBarLabelStyle,
        }}
        name="MainNavigation"
        component={MainNavigation}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          title: 'Add New!',
          tabBarLabelStyle: tabBarLabelStyle,
        }}
        name="AddNewNavigation"
        component={AddNewNavigation}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
