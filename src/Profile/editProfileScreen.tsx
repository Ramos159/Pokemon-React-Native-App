import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
// import User from "../customInterfaces/userInterface";
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList } from '../customTypes/profileStackParamList';
import { RootTabParamList } from '../customTypes/rootTabParamlist';

// combine both prop types from tab and stack
type ProfileScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, 'Profile'>,
    StackNavigationProp<ProfileStackParamList, 'EditProfile'>
>

// get proper route props for this screen
type ProfileScreenRouteProp = RouteProp<ProfileStackParamList, 'EditProfile'>;

type Props = {
  navigation: ProfileScreenNavigationProp,
  route: ProfileScreenRouteProp
}

const styles = StyleSheet.create({
  container: {
    lex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

// eslint-disable-next-line
export default function EditProfileScreen({navigation, route}:Props){
  // we're going to use these hooks later, just dont want eslint to yell
  /* eslint-disable */
  const [newUsername,setNewUsername] = useState('');
  const [password,setPassword] = useState('');
  const [passwordConfirm,setPasswordConfirm] = useState('');
  const [emailConfirm,setEmailConfirm] = useState('');
  /* eslint-enable */

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Edit Profile Screen</Text>
    </SafeAreaView>
  );
}
