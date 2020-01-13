import React from 'react'
import {View,Text,Button} from 'react-native'

export default class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' ,backgroundColor:"white",paddingTop:60}}>
          <Text style={{fontWeight:"bold",fontSize:20}}>Profile</Text>
          <Button title="Edit Profile" onPress={(events)=>{this.props.navigation.navigate('Edit')}}/>
        </View>
      );
    }
  }