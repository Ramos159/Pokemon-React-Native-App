import React, { ReactElement } from 'react';
import {
  SafeAreaView,
  Text,
  // Button,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { PokedexStackParamList } from '../customTypes/pokedexStackParamList';
import { RootTabParamList } from '../customTypes/rootTabParamlist';
import PokedexItem from './pokedexItem';

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

type PokedexSelectNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList, 'Pokedexs'>,
StackNavigationProp<PokedexStackParamList, 'PokedexSelect'>
>

type Props = {
  navigation: PokedexSelectNavigationProp
}

export default function PokedexSelectScreen(props: Props): ReactElement {
  const { navigation } = props;
  const pokedexes = [
    {
      name: 'Kanto Pokedex',
      entries: 151,
    },
    {
      name: 'Johto Pokedex',
      entries: 100,
    },
    {
      name: 'Hoenn Pokedex',
      entries: 135,
    },
    {
      name: 'Sinnoh Pokedex',
      entries: 107,
    },
    {
      name: 'Unova Pokedex',
      entries: 153,
    },
    {
      name: 'Kalos Pokedex',
      entries: 153,
    },
    {
      name: 'Special Forms',
      entries: 90,
    },
  ];

  function renderPokedexes() {
    // char max hit 103, usually is 100
    // eslint-disable-next-line
    return pokedexes.map((pokedexObj) => <PokedexItem pokedex={pokedexObj} navigation={navigation} />);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Pokedexs</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {renderPokedexes()}
      </ScrollView>
    </SafeAreaView>
  );
}
