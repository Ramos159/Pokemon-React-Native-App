import React,{Component} from 'react'
import {
	SafeAreaView,
	Text,
	Button, 
	StyleSheet,
	View,
	ActivityIndicator,
	AsyncStorage
} from 'react-native'
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native'
import ProfileStackParamList from '../customTypes/profileStackParamList'
import RootTabParamList from '../customTypes/rootTabParamlist'
import UserInterface from '../customInterfaces/userInterface';

type ProfileScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList,'Profile'>,
StackNavigationProp<ProfileStackParamList,'AuthForm'>
>

type ProfileScreenRouteProp = RouteProp<ProfileStackParamList, 'Profile'>;

type Props = {
	navigation: ProfileScreenNavigationProp,
	route: ProfileScreenRouteProp
}

interface State{
	user:UserInterface | null,
	loading:boolean,
	needsLogin:boolean
}

export default class ProfileScreen extends Component<Props,State>{

	state = {
		user:null,
		loading:true,
		needsLogin:false
	}

	// handleEmailText = ():string => {
	// 	const email = this.props.route.params.user.email
	// 	return email === undefined ? "Email was not used" : `You used email: ${email}`
	// }

	userOrLogin = async() => {
		if(this.props.route.params.user){
			this.setState({
				user: this.props.route.params.user,
				loading:false
			},()=>{
				return null
			})
		} 
		// user did not come from login or register
		else {
			try{
				// attempt to get user from async
				await AsyncStorage.getItem('user',(error,result)=>{
					if(error){
						throw error
					}
					this.setState({
						user: JSON.parse(result),
						loading:false
					})
				})
			} 
			catch(err) {
				this.setState({
					loading:false,
					needsLogin:true
				})
			}
		}
	}

  	render() {
		{this.userOrLogin()}
  		return(		
			<SafeAreaView style={{flex:1,backgroundColor:"white",}}>
				<Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",paddingTop:25,paddingBottom:25}}>Profile</Text>
        		<View style={{ flexGrow: 1, alignItems: 'center',backgroundColor:'white'}}>
					{this.state.loading ? <ActivityIndicator style={styles.formContainer} size="large" color="black" /> : null}
					{this.state.needsLogin ? <Button title='Login in for profile info!'  onPress={()=>{this.props.navigation.push('AuthForm')}}/> : null}
		  			{this.state.user ? <Text>Username: {this.state.user.usename}</Text> : null}
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
})
