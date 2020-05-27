import React, { ReactElement } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RegionStackParamList } from '../customTypes/regionStackParamList';
import RegionObject from '../customInterfaces/regionObject';
import { RootTabParamList } from '../customTypes/rootTabParamlist';

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1,
  },
  name: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  games: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777',
  },
  // thumbnail: {
  //   flex: 1,
  //   height: undefined,
  //   width: undefined
  // },
  rowText: {
    flex: 4,
    flexDirection: 'column',
  },
});

// we use compositenavprop to combine both props type
// this is indentical to the props of region select, couldnt find a way to seperate props
type RegionDetailScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList, 'Regions'>,
StackNavigationProp<RegionStackParamList, 'RegionSelect'>
>

type Props = {
  navigation: RegionDetailScreenNavigationProp,
  // key: number,
  region: RegionObject,
}

export default function RegionItem({ navigation, region }:Props): ReactElement {
  function createGamesString(gamesArray: Array<string>) {
    let string = 'Games: ';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < gamesArray.length; i++) {
      if (i === gamesArray.length - 1) {
        string += `${gamesArray[i]}`;
      } else {
        string += `${gamesArray[i]}, `;
      }
    }
    return string;
  }

  // Stack navigator likes to pass params instead of props, they essentially work the same way
  function handleItemPress() {
    navigation.navigate('RegionDetail', {
      region,
    });
  }

  return (
    <TouchableOpacity
      style={styles.rowContainer}
      onPress={() => handleItemPress()}
    >
      <View style={styles.rowText}>
        <Text style={styles.name}>{region.name}</Text>
        <Text style={styles.games}>{createGamesString(region.games)}</Text>
      </View>
    </TouchableOpacity>
  );
}
