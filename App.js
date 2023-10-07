import React from "react";
import LoginProvider from "./src/context/LoginProvider"
import MainNavigator from "./MainNavigator"
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <LoginProvider>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  </LoginProvider>
  )
}



