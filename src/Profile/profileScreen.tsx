import React,{Component} from 'react'
import {
	SafeAreaView,
	Text,
	StyleSheet,
	View,
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

export default class ProfileScreen extends Component<Props>{

  	render() {
  		return(		
			<SafeAreaView style={styles.mainContainer}>
				<Text style={styles.headerText}>Profile</Text>
        		<View style={styles.container}>
					<Text>{this.props.route.params.user.username}</Text>
				{/* <Button title="Edit Profile" onPress={(events)=>{this.props.navigation.push('EditProfile')}}/> */}
        		</View>
			</SafeAreaView>
  	  	)
  	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1, 
		alignItems: 'center',
		backgroundColor:"white",
		// marginTop:60
	},
	formContainer:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:300,
        zIndex:-10
	},
	mainContainer:{
		flex:1,
		backgroundColor:"white"
	},
	headerText:{
		fontWeight:"bold",
		fontSize:20,
		textAlign:"center",
		paddingTop:25,
		paddingBottom:25
	}
})
