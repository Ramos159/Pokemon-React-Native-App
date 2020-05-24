import React from 'react';
// @ts-ignore
// typescript says this import below doesnt exist but it does 🤷‍♂️
import { NavigationContainer } from '@react-navigation/native';
import AppTab from './appTab';

export default function AppContainer() {
  return (
    <NavigationContainer>
      <AppTab />
    </NavigationContainer>
  );
}
