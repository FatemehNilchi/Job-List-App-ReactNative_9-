import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@pages/Home';
import JobPage from '@pages/JobPage';
import ApplyPage from '@pages/ApplyPage';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="JobPage" component={JobPage} />
      <Stack.Screen name="ApplyPage" component={ApplyPage} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
