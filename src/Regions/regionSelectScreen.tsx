import React, { ReactElement } from 'react';
import {
  ScrollView,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import RegionObject from '../customInterfaces/regionObject';
import RegionItem from './regionItem';
import { RegionStackParamList } from '../customTypes/RegionStackParamList';
import { RootTabParamList } from '../customTypes/rootTabParamlist';

// dummy data
const regions = [
  { id: 1,
    name: 'Kanto',
    games: ['Red', 'Blue', 'Yellow', 'Fire Red', 'Leaf Green'],
  },
  { id: 2,
    name: 'Johto',
    games: ['Gold', 'Silver', 'Crystal', 'Heart Gold', 'Soul Silver'],
  },
  { id: 3,
    name: 'Hoenn',
    games: ['Sapphire', 'Ruby', 'Emerald', 'Omega Ruby', 'Alpha Sapphire'],
  },
  { id: 4,
    name: 'Sinnoh',
    games: ['Diamond,Pearl'],
  },
  { id: 5,
    name: 'Unova',
    games: ['Black', 'White', 'Black 2', 'White 2'],
  },
  { id: 6,
    name: 'Kalos',
    games: ['X', 'Y'],
  },
  // these regions are on the pokemon api yet for some reason

  // {
  //  name:"Alola",
  //  games:["Sun","Moon","Ultra Sun","Ultra Moon"]
  // },
  // {
  //  name:"Galar",
  //  games:["Sword","Shield"]
  // }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
});

// we use compositenavprop to combine both props type from bottom nav and stack nav
type RegionSelectScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList, 'Regions'>,
StackNavigationProp<RegionStackParamList, 'RegionSelect'>
>

interface Props{
  navigation: RegionSelectScreenNavigationProp,
}

export default function RegionSelectScreen({ navigation }: Props): ReactElement {
  function renderRegions(regionsArray) {
    return regionsArray.map((region) => <RegionItem key ={region.id} navigation={navigation} region={region} />);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Regions</Text>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: 'white' }}>
        {renderRegions(regions)}
      </ScrollView>
    </SafeAreaView>
  );
}
