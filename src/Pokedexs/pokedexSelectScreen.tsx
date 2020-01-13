import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

export default class DetailScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center',paddingTop:60 }}>
          <Text style={{height:650,fontSize:20,fontWeight:"bold"}}>Pokedexs</Text>
          {/* <Button title="Go to back to the top of the app" onPress={(events)=>{this.props.navigation.popToTop()}}/> */}
        </View>
      );
    }
  }