import React from 'react'
import {
    SafeAreaView,
    Text} from 'react-native'

interface Props{
    user: object
}

interface State{
    newUsername: string,
    password: string,
    passwordConfirm: string
}

export default class EditProfileScreen extends React.Component<Props,State>{

    state = {
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