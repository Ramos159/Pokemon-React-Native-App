import React from 'react'
import {
	View,
	Text,
	Button, 
	StyleSheet} from 'react-native'
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState
  } from 'react-navigation'

interface Props{
	user: object,
	navigation: NavigationScreenProp<NavigationParams,NavigationState>
}

interface User{
	userName: string,
	favorites: Object
}

interface State{
  	user: User
}

export default class ProfileScreen extends React.Component<Props,State>{

	state ={
    	user:{
      	userName:null,
      	favorites:[]
    	}
  	}

  	render() {
  		return (
  	    	<View style={styles.container}>
  	    		<Text style={{fontWeight:"bold",fontSize:20}}>Profile</Text>
  	    		<Button title="Edit Profile" onPress={(events)=>{this.props.navigation.navigate('Edit')}}/>
  	    	</View>
  	  );
  	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1, 
		alignItems: 'center',
		backgroundColor:"white",
		paddingTop:60
	}
})
