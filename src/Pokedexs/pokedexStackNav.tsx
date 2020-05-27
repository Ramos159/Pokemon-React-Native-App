import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokedexSelectScreen from './pokedexSelectScreen';
import { PokedexStackParamList } from '../customTypes/pokedexStackParamList';
// import RootTabParamList from '../customTypes/rootTabParamList'
// import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// creates stacknav checking for proper params against ProfileParamList
const Stack = createStackNavigator<PokedexStackParamList>();

// since this stack is child of a bottom tab, we should give it the bottom tab props

// we actually dont need this prop we never use it

// type Props = {
//     navigation:BottomTabNavigationProp<RootTabParamList,"Pokedexs">
// }

export default function ProfileStackNavigator(): ReactElement {
  return (
    <Stack.Navigator
      initialRouteName="PokedexSelect"
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="PokedexSelect" component={PokedexSelectScreen} />
    </Stack.Navigator>
  );
}
