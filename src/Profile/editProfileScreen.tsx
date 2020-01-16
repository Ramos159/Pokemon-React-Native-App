import React,{Component} from 'react'
import {
    SafeAreaView,
    Text
} from 'react-native'
import User from "../customInterfaces/user"

interface Props{
    user: User
}

interface State{
    newUsername: string,
    password: string,
    passwordConfirm: string
}

export default class EditProfileScreen extends Component<Props,State>{

    state: State = {
        newUsername:"",
        password: "",
        passwordConfirm:""
    }
    
    render() {
        return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:"white"}}>
            <Text>Edit Profile Screen</Text>
        </SafeAreaView>
        );
    }
}