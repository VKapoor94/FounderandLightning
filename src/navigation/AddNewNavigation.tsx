import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddNew from '../screens/AddNew/AddNew';
const Stack = createNativeStackNavigator();
const AddNewNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Add New"
        component={AddNew}
      />
    </Stack.Navigator>
  );
};

export default AddNewNavigation;
