import React,{Component} from 'react'
import {
	SafeAreaView,
	ScrollView,
	Text,
	Button, 
	StyleSheet,
} from 'react-native'
// import UserInterface from '../customInterfaces/user'
import NavigationPropType from '../customTypes/navigationPropType'
import StatusBarHeader from '../Components/statusBarHeader'


interface Props{
	navigation: NavigationPropType
}

// interface State{
// }

export default class ProfileScreen extends Component<Props>{

	handleEmailText = ():string => {
		const email = this.props.navigation.getParam("email")
		return email === undefined ? "Email was not used" : `You used email: ${email}`
	}

  	render() {
  		return(		
		<>	
			<StatusBarHeader/>
			<SafeAreaView style={{flex:1,backgroundColor:"white",}}>
				<Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",paddingTop:25,paddingBottom:25}}>Profile</Text>
        		<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center',backgroundColor:'white'}}>
		  		<Text>You used username: {this.props.navigation.getParam('username')}</Text>
		  		<Text>You used password: {this.props.navigation.getParam('password')}</Text>
		  		<Text>{this.handleEmailText()}</Text>
				<Button title="Edit Profile" onPress={(events)=>{this.props.navigation.navigate('Edit')}}/>
        		</ScrollView>
			</SafeAreaView>
		</>
  	  	)
  	}
}

// const styles = StyleSheet.create({
// 	container:{
// 		flex: 1, 
// 		alignItems: 'center',
// 		backgroundColor:"white",
// 		// marginTop:60
// 	}
// })
