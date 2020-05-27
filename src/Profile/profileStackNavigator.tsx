import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from './profileScreen';
import { EditProfileScreen } from './editProfileScreen';
import { AuthFormScreen } from './authFormScreen';
import { ProfileStackParamList } from '../customTypes/profileStackParamList';
// import RootTabParamList from '../customTypes/rootTabParamList';

// creates stacknav checking for proper params against ProfileParamList
const Stack = createStackNavigator<ProfileStackParamList>();

// since this stack is child of a bottom tab, we should give it the bottom tab props
// UPDATE: we dont need this prop anymore
// type Props = {
//     navigation:BottomTabNavigationProp<RootTabParamList,"Profile">
// }

export function ProfileStackNavigator(): ReactElement {
  return (
    <Stack.Navigator
      initialRouteName="AuthForm"
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="AuthForm" component={AuthFormScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
