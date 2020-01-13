import React from 'react'
import {View,Text,Button} from 'react-native'

export default class EditProfileScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:"white"}}>
          <Text>Edit Profile Screen</Text>
          {/* <Button title="Edit Profile" onPress={(events)=>{this.props.navigation.navigate('Edit')}}/> */}
        </View>
      );
    }
  }