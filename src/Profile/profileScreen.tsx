import React from 'react'
import {
	SafeAreaView,
	Text,
	Button, 
	StyleSheet
} from 'react-native'
import User from '../customInterfaces/user'
import NavigationPropType from '../customTypes/navigationPropType'


interface Props{
	user: User,
	navigation: NavigationPropType
}

interface State{
  	user: User
}

export default class ProfileScreen extends React.Component<Props,State>{

	state: State ={
    	user:{
      	userName:null,
      	favorites:[]
    	}
  	}

  	render() {
  		return(
  	    	<SafeAreaView style={styles.container}>
  	    		<Text style={{fontWeight:"bold",fontSize:20}}>Profile</Text>
  	    		<Button title="Edit Profile" onPress={(events)=>{this.props.navigation.navigate('Edit')}}/>
  	    	</SafeAreaView>
  	  	)
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
