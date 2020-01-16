import React from 'react'
import {
  SafeAreaView,
  Text,
  Button
} from 'react-native'

export default class PokedexSelectScreen extends React.Component {
    render(){
      return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center',paddingTop:60 }}>
          <Text style={{height:650,fontSize:20,fontWeight:"bold"}}>Pokedexs</Text>
        </SafeAreaView>
      );
    }
  }