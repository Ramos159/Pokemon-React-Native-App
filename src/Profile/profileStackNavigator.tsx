import React,{Component} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from './profileScreen'
import EditProfileScreen  from './editProfileScreen'
import AuthFormScreen from './authFormScreen'
import ProfileStackParamList from '../customTypes/profileStackParamList'
import RootTabParamList from '../customTypes/rootTabParamList'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator<ProfileStackParamList>()

export default class  ProfileStackNavigator extends Component{
    render(){
        return(
            <Stack.Navigator
            initialRouteName="AuthForm"
            headerMode="none"
        >
            <Stack.Screen name="AuthForm" component={AuthFormScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
        )
    }
}
