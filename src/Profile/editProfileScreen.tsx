import React,{Component} from 'react'
import {
    SafeAreaView,
    Text,
    StatusBar
} from 'react-native'
import User from "../customInterfaces/user"
import StatusBarHeader from '../Components/statusBarHeader'

interface Props{
    user: User
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