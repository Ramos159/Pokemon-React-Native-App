import React,{ Component } from 'react'
import { View,Text,ActivityIndicator } from 'react-native'
import { Input,Icon,Button } from 'react-native-elements'
import StatusBarHeader from '../Components/statusBarHeader'
import NavigationPropType from '../customTypes/navigationPropType'

interface Props{
    navigation: NavigationPropType
}

interface State{
    username: string,
    password: string,
    email: string,
    login: boolean,
    loading: boolean
}

export default class AuthFormScreen extends Component<Props,State>{

    state = {
        username: "",
        password: "",
        email: "",
        login: true,
        loading: false
    }

    // form inputs dont have something like a name attribute in regular html so seperate form change functions will have to do for now

    handleUsernameChange = (event): void => {

        const text = event.nativeEvent.text

        this.setState({
            username:text
        })
    }

    handlePasswordChange = (event):void => {

        const text = event.nativeEvent.text

        this.setState({
            password:text
        })
    }

    handleEmailChange = (event):void => {

        const text = event.nativeEvent.text

        this.setState({
            email:text
        })
    }

    loginOrRegister = (): JSX.Element => {
        // login form as a function called login
        const login = () => {
            return(
                <>
                <Input
                    placeholder='Username'
                    onChange={(event)=>this.handleUsernameChange(event)}
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
                    onChange={(event)=>this.handlePasswordChange(event)}
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
                    onChange={(event)=>this.handleUsernameChange(event)}
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
                    onChange={(event)=>this.handlePasswordChange(event)}
                    leftIcon={
                        <Icon
                            name='lock'
                            type='feather'
                        />
                    }
                />
                <Input
                    placeholder='Email'
                    onChange={(event)=>this.handleEmailChange(event)}
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

    handleLogin = () => {
        this.setState({
            loading:true
        },()=>{
            setTimeout(()=>{
                this.props.navigation.navigate("Profile")
                this.setState({
                    loading:false
                })
            },3000)
        })
    }

    handleRegister = () => {
        alert('about to register')
    }

    verifyCorrectFormFields = () => {

        if(this.state.username === ""){
            alert("Username can not be empty!")
            return null
        }

        if(this.state.password === ""){
            alert("Password can not be empty")
            return null
        }

        if(!this.state.login){
            if(this.state.email === ""){
                alert("Email can not be empty")
            }
        }

        this.state.login ? this.handleLogin() : this.handleRegister()

    }

    renderAuthForm = () =>{
        return(
            <View style={{flex:1,backgroundColor:"white", alignItems:'center',justifyContent:'center',width:300}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>{this.state.login? "Login" : "Register"}</Text>
                {this.loginOrRegister()}
                <Button onPress={()=>{this.verifyCorrectFormFields()}}style={{width:200,paddingTop:20,paddingBottom:20}} title={this.handleButtonTitle()} />
                <Text onPress={()=>{this.handleFormChange()}}>{this.handleChangeFormText()}</Text>
            </View>
        )
    }

    render(){
        return(
            <>
                <StatusBarHeader/>
                <View style={{flex:1,backgroundColor:"white", alignItems:'center',justifyContent:'center'}}>
                    {this.state.loading ? <ActivityIndicator size="large" color="black" /> : this.renderAuthForm()}
                </View>
            </>
        )
    }
}