import React,{Component} from 'react'
import {
    TextInput,
    View,
    Text,
    ViewProps
} from 'react-native'
import StatusBarHeader from '../Components/statusBarHeader'
import NavigationPropType from '../customTypes/navigationPropType'

interface Props{
    navigation: NavigationPropType
}

interface State{
    username: string,
    password: string,
    passwordConfirmation: string,
    email: string,
    login: boolean 
}

export default class AuthFormScreen extends Component<Props,State>{

    state: State = {
        username: "",
        password: "",
        passwordConfirmation: "",
        email: "",
        login: true
    }

    handleTextChange = (text: string,name: string): void => {
        this.setState({
            [name]:text
        })
    }

    loginOrRegister = (): JSX.Element => {
        // components for login and register
        // TextInput has no name prop, so i'll pass a string arguement to the event handler
        const login = <View><TextInput placeholder="Username" onChangeText={(text)=>this.handleTextChange(text,"username")}/><TextInput secureTextEntry={true} placeholder="Password" onChangeText={(text)=>this.handleTextChange(text,"password")}/></View>
        const register = <View><TextInput placeholder="Username" onChangeText={(text)=>this.handleTextChange(text,"username")}/><TextInput placeholder="Password" onChangeText={(text)=>{this.handleTextChange(text,"password")}}/><TextInput placeholder="Password Confirmation" onChangeText={(text)=>{this.handleTextChange(text,"passwordConfirmation")}}/><TextInput placeholder="Email" onChangeText={(text)=>this.handleTextChange(text,"email")}/></View>
        return this.state.login ? login : register
    }


    render(){
        return(
            <>
                <StatusBarHeader/>
                {this.loginOrRegister()}
            </>
        )
    }
}