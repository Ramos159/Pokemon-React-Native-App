import React, { ReactElement } from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';

export function StatusBarHeader(): ReactElement {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <StatusBar barStyle="dark-content" />
    </>
  );
}
