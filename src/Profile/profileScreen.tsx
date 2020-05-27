import React, { ReactElement } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList } from '../customTypes/profileStackParamList';
import { RootTabParamList } from '../customTypes/rootTabParamlist';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Profile'>,
  StackNavigationProp<ProfileStackParamList, 'AuthForm'>
>

type ProfileScreenRouteProp = RouteProp<ProfileStackParamList, 'Profile'>;

type Props = {
  navigation: ProfileScreenNavigationProp,
  route: ProfileScreenRouteProp
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    // marginTop:60
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    zIndex: -10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
});

export default function ProfileScreen({ navigation, route }: Props): ReactElement {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.headerText}>Profile</Text>
      <View style={styles.container}>
        <Text>{route.params.user.username}</Text>
        <Button
          title="Edit Profile"
          onPress={() => { navigation.push('EditProfile'); }}
        />
      </View>
    </SafeAreaView>
  );
}
