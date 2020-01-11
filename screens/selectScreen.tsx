import React from 'react'
import {View,Text,Button} from 'react-native'

export default class SelectScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Select Screen</Text>
          {/* <Button title="go to Detail Screen" onPress={()=>{this.props.navigation.navigate('Detail')}}/> */}
        </View>
      );
    }
  }