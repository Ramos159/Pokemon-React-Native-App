import React,{ Component } from 'react'
import { 
    SafeAreaView,
    View,
    Text, 
    ActivityIndicator, 
    StyleSheet, 
    StatusBar,
    TouchableOpacity,
} from 'react-native'
import { 
    Input,
    Icon,
    Button } from 'react-native-elements'
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import ProfileStackParamList from '../customTypes/profileStackParamList'
import RootTabParamList from '../customTypes/rootTabParamlist'
import InformationModal  from '../Components/informationModal';

// we use compositenavprop to combine both props type
type AuthFormScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList,'Profile'>,
StackNavigationProp<ProfileStackParamList,'AuthForm'>
>

// this combines the bottomtabnav and stacknav props for type checking
type Props = {
    navigation: AuthFormScreenNavigationProp
}

type State = {
    username: string,
    password: string,
    email: string,
    login: boolean,
    loading: boolean,
    modalVisible: boolean
}

export default class AuthFormScreen extends Component<Props,State>{

    state = {
        username: "",
        password: "",
        email: "",
        login: true,
        loading: false,
        modalVisible:false
    }

    // form inputs dont have something like a name attribute in regular html so seperate form change functions will have to do for now
    handleUsernameChange = (event): void => {

        const text = event.nativeEvent.text

        this.setState({
            username:text
        })
    }

    handlePasswordChange = (event):void => {
        console.log(typeof(event))
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
        // return null to exit function
        if(this.state.username !== "edwin"){
            alert('wrong username')
            return null
        }
        if(this.state.password !== 'ramos'){
            alert("wrong password")
            return null
        }

        this.setState({
            loading:true
        },()=>{
            // simulating a log-in experience here
            setTimeout(()=>{
                this.props.navigation.push("Profile",{
                    // mimic user object
                    user:{
                        username: this.state.username,
                        password: this.state.password,
                        userID:1
                    }
                })
                // maybe dont need this below
                this.setState({
                    loading:false
                })
            },3000)
        })
    }

     // basic mock validations just for now
    handleRegister = ():null | void => {

        // return null to exit function
        if(this.state.username === "edwin"){
            alert('username is already taken')
            return null
        }
        if(this.state.email === 'edwinramos269@gmail.com'){
            alert('email is already taken!')
            return null
        }

        this.setState({
            loading:true
        },()=>{
            const userObject = {
                username: this.state.username,
                password: this.state.password,
                email:this.state.email,
                userID:1
            }
            // simulating a log-in experience here

            setTimeout(()=>{
                this.props.navigation.push("Profile",{
                    // mimic user object
                    user:{
                        username: this.state.username,
                        password: this.state.password,
                        userID:1,
                        email: this.state.email
                    }
                })
                this.setState({
                    loading:false
                })
            },3000)
        })  
    }

    verifyCorrectFormFields = ():Function | null=> {

        // return null to exit function
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
                return null
            }
        }

        this.state.login ? this.handleLogin() : this.handleRegister()

    }

    setModalVisible = (setting: boolean): void => {
        this.setState({
            modalVisible: setting
        }
        // USE THIS GOBACK FUNCTION LATER WHEN WE MAKE AUTHFORM A MODAL COMPONENT

        // ,()=>{
        //     if(setting === false){
        //         this.props.navigation.goBack()
        //     }}
        )
    }

    renderAuthForm = () => {
        return(
            <View style={styles.formContainer}>
                <Text style={styles.headerText}> 
                    {this.state.login? "Login" : "Register"}
                </Text>
                {this.loginOrRegister()}
                <Button 
                    onPress={()=>{this.verifyCorrectFormFields()}}
                    style={styles.button} 
                    title={this.handleButtonTitle()} 
                />
                <Text onPress={()=>{this.handleFormChange()}}>
                    {this.handleChangeFormText()}
                </Text>
            </View>
        )
    }

    handleSettingsPress = () => {
        this.setModalVisible(true)
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='dark-content'/>
                <View>
                    <InformationModal visible={this.state.modalVisible} changeVisibility={this.setModalVisible}/>
                    <TouchableOpacity style={{position:'absolute',left:130}} >
                    <Icon
                        name='info'
                        type='feather'
                        onPress={()=>{this.handleSettingsPress()}}
                        />
                    </TouchableOpacity>
                </View>
                {this.state.loading ? <ActivityIndicator style={styles.formContainer} size="large" color="black" /> : this.renderAuthForm()}
            </SafeAreaView>
        )
    }
}

//stylesheet
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center'
    },
    formContainer:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        width:300,
        zIndex:-10
    },
    button:{
        width:200,
        paddingTop:20,
        paddingBottom:20,
        alignSelf:'center'
    },
    headerText:{
        fontWeight:"bold",
        fontSize:20
    }
})