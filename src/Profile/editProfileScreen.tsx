import React,{Component} from 'react'
import {
    SafeAreaView,
    Text,
    StatusBar
} from 'react-native'
import User from "../customInterfaces/userInterface"
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native'
import ProfileStackParamList from '../customTypes/profileStackParamList'
import RootTabParamList from '../customTypes/rootTabParamlist'

// combine both prop types from tab and stack
type ProfileScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList,'Profile'>,
    StackNavigationProp<ProfileStackParamList,'EditProfile'>
>

// get proper route props for this screen
type ProfileScreenRouteProp = RouteProp<ProfileStackParamList, 'EditProfile'>;

type Props = {
	navigation: ProfileScreenNavigationProp,
	route: ProfileScreenRouteProp
}

interface State{
    newUsername: string,
    password: string,
    passwordConfirm: string,
    emailConfirm: string
}

export default class EditProfileScreen extends Component<Props,State>{

    state = {
        newUsername:"",
        password: "",
        passwordConfirm:"",
        emailConfirm: ""
    }
    
    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:"white"}}>
                <StatusBar barStyle='dark-content'/>
                <Text>Edit Profile Screen</Text>
            </SafeAreaView>
        );
    }
}