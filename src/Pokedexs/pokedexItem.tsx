import React, { ReactElement } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { CompositeNavigationProp, CommonActions } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { PokedexStackParamList } from '../customTypes/pokedexStackParamList';
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

// use Select Paramlist here because its getting passed down from select
type PokedexItemNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Pokedexs'>,
  StackNavigationProp<PokedexStackParamList, 'PokedexSelect'>
>

type PokedexItemObj = {
  name: string,
  entries: number,
}

type Props = {
  // key: number,
  pokedex: PokedexItemObj,
  navigation: PokedexItemNavigationProp
}

export function PokedexItem({ pokedex, navigation }: Props): ReactElement {
  // createGamesString = (gamesArray: Array<String>): String => {
  //  let string = "Games: "
  //  for(let i = 0;i < gamesArray.length;i++){
  //  if(i == gamesArray.length -1 ){
  //     string += `${gamesArray[i]}`
  //    } else {
  //      string += `${gamesArray[i]}, `
  //    }
  //  }
  //  return string
  // }

  // Stack navigator likes to pass params instead of props, they essentially work the same way
  function handleItemPress() {
    // navigation.dispatch(CommonActions.navigate({
    //   name: 'RegionDetail',
    //   params: {
    //     name: pokedex.name,
    //     games: pokedex.entries,

    //   },
    // }));
    alert('normally would go to pokedex page')
  }

  return (
    <TouchableOpacity style={styles.rowContainer} onPress={() => { handleItemPress(); }}>
      <View style={styles.rowText}>
        <Text style={styles.name}>{pokedex.name}</Text>
        <Text style={styles.games}>
          Entries:
          {pokedex.entries}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
