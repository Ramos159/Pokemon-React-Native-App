import React,{ Component } from 'react'
import { View,TextInput } from 'react-native'
import { Input,Icon } from 'react-native-elements'
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

    state = {
        username: "",
        password: "",
        passwordConfirmation: "",
        email: "",
        login: true
    }

    handleTextChange = (event): void => {
        console.log(event)
    }

    loginOrRegister = (): JSX.Element => {
        // components for login and register
        // TextInput has no name prop, so i'll pass a string arguement to the event handler
        const login = () => {
            return(
                <>
                <Input
                    placeholder='Username'
                    onChange={(event)=>this.handleTextChange(event)}
                    leftIcon={
                        <Icon
                            name='user'
                            type='feather'
                        />
                    }
                    />
                <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    onChange={(event)=>this.handleTextChange(event)}
                    leftIcon={
                        <Icon
                            name='lock'
                            type='feather'
                        />
                    }
                />
            </>
            )
        }
        const register = <View style={{flex:1,backgroundColor:"white", alignContent:'center'}}><TextInput placeholder="Username" onChange={(event)=>this.handleTextChange(event)}/><TextInput placeholder="Password" onChange={(event)=>{this.handleTextChange(event)}}/><TextInput placeholder="Password Confirmation" onChange={(event)=>{this.handleTextChange(event)}}/><TextInput placeholder="Email" onChange={(event)=>this.handleTextChange(event)}/></View>
        return this.state.login ? login() : register
    }


    render(){
        return(
            <>
                <StatusBarHeader/>
                <View style={{flex:1,backgroundColor:"white", alignContent:'center'}}>
                {this.loginOrRegister()}
                </View>
            </>
        )
    }
}