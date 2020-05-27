import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppTab from './appTab';

export default function AppContainer(): ReactElement {
  return (
    <NavigationContainer>
      <AppTab />
    </NavigationContainer>
  );
}
