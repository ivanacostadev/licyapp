import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import { useLogin } from './src/context/LoginProvider';
import DrawerNavigator from './DrawerNavigator';
import Home from "./src/components/Home"
const Stack = createNativeStackNavigatorx();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
   <Stack.Screen component={Home} name='Home' />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
};
export default MainNavigator;
