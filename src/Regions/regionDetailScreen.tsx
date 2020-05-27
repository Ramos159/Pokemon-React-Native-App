import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RegionStackParamList } from '../customTypes/RegionStackParamList';
import { RootTabParamList } from '../customTypes/rootTabParamlist';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

// we use compositenavprop to combine both props type
type RegionDetailNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList, 'Regions'>,
StackNavigationProp<RegionStackParamList, 'RegionDetail'>
>


// type check route prop so we can get route params
type RegionDetailRouteProp = RouteProp<RegionStackParamList, 'RegionDetail'>

type Props = {
    navigation: RegionDetailNavigationProp,
    route: RegionDetailRouteProp
}
// will use navigation later
// eslint-disable-next-line
export default function RegionDetailScreen({ navigation,route }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>{route.params.region.name}</Text>
    </SafeAreaView>
  );
}
