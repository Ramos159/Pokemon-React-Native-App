import React,{ Component } from 'react'
import { View,Text } from 'react-native'
import { Input,Icon,Button } from 'react-native-elements'
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

    handleTextChange = (event,stringParam): void => {
        // this is the literally text from the event
        const text = event.nativeEvent.text

        console.log(text)
        console.log(stringParam)
    }

    loginOrRegister = (): JSX.Element => {
        // login form as a function called login
        const login = () => {
            return(
                <>
                <Input
                    placeholder='Username'
                    onChange={(event)=>this.handleTextChange(event,"username")}
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
                    onChange={(event)=>this.handleTextChange(event,"password")}
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
        // same as above but for register form
        const register = () =>{
            return(
                <>
                <Input
                    placeholder='Username'
                    onChange={(event)=>this.handleTextChange(event,"username")}
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
                    onChange={(event)=>this.handleTextChange(event,"password")}
                    leftIcon={
                        <Icon
                            name='lock'
                            type='feather'
                        />
                    }
                />
                <Input
                    placeholder='Email'
                    onChange={(event)=>this.handleTextChange(event,"email")}
                    leftIcon={
                        <Icon
                            name='mail'
                            type='feather'
                        />
                    }
                />
            </>
            )
        }
        return this.state.login ? login() : register()
    }

    handleButtonTitle = ():string => {
        return this.state.login ? "Log in" : "Register"
    }

    handleFormChange = ():void => {
        // change a bit of state to trigger rerender and show other form
        this.setState((prevState)=>{
            return{
                login: !prevState.login
            }
        })
    }

    handleChangeFormText = (): string => {
        // change text depending on form thats present
        return this.state.login ? "New User? Register here!" : "Have an Account? Log in here!"
    }

    render(){
        return(
            <>
                <StatusBarHeader/>
                <View style={{flex:1,backgroundColor:"white", alignItems:'center',justifyContent:'center'}}>
                    <View style={{flex:1,backgroundColor:"white", alignItems:'center',justifyContent:'center',width:300}}>
                        {this.loginOrRegister()}
                        <Button title={this.handleButtonTitle()}/>
                        <Text onPress={()=>{this.handleFormChange()}}>{this.handleChangeFormText()}</Text>
                    </View>
                </View>
            </>
        )
    }
}