import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons as Icon } from '@expo/vector-icons';
import RegionStackNavigator from '../Regions/regionStackNavigator';
import PokedexStackNavigator from '../Pokedexs/pokedexStackNav';
import ProfileStackNavigator from '../Profile/profileStackNavigator';
import { RootTabParamList } from '../customTypes/rootTabParamlist';

const Tab = createBottomTabNavigator<RootTabParamList>();
// this is the main tab we see on the bottom of the app
export default function AppTab(): ReactElement {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // this returns all the icons images in the tab
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === 'Regions') {
            iconName = 'ios-map';
          }
          if (route.name === 'Pokedexs') {
            iconName = 'ios-list';
          }
          if (route.name === 'Profile') {
            iconName = 'ios-person';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Regions" component={RegionStackNavigator} />
      <Tab.Screen name="Pokedexs" component={PokedexStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}
