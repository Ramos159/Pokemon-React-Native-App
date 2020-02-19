import React,{Component} from 'react'
import {
	SafeAreaView,
	ScrollView,
	Text,
	Button, 
	StyleSheet,
} from 'react-native'
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native'
import ProfileStackParamList from '../customTypes/profileStackParamList'
import RootTabParamList from '../customTypes/rootTabParamlist'

type ProfileScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList,'Profile'>,
StackNavigationProp<ProfileStackParamList,'AuthForm'>
>

type ProfileScreenRouteProp = RouteProp<ProfileStackParamList, 'Profile'>;

type Props = {
	navigation: ProfileScreenNavigationProp,
	route: ProfileScreenRouteProp
}

// interface State{
// }

export default class ProfileScreen extends Component<Props>{

	handleEmailText = ():string => {
		const email = this.props.route.params.user.email
		return email === undefined ? "Email was not used" : `You used email: ${email}`
	}

  	render() {
  		return(		
			<SafeAreaView style={{flex:1,backgroundColor:"white",}}>
				<Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",paddingTop:25,paddingBottom:25}}>Profile</Text>
        		<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center',backgroundColor:'white'}}>
		  		<Text>You used username: {this.props.route.params.user.username}</Text>
		  		<Text>You used password: {this.props.route.params.user.password}</Text>
		  		<Text>{this.handleEmailText()}</Text>
				<Button title="Edit Profile" onPress={(events)=>{this.props.navigation.push('EditProfile')}}/>
        		</ScrollView>
			</SafeAreaView>
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
