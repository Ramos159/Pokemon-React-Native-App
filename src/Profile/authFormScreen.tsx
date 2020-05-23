import React, { useState, useEffect } from 'react';
import { 
    SafeAreaView,
    View,
    Text, 
    ActivityIndicator, 
    StyleSheet, 
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { 
    Input,
    Icon,
    Button } from 'react-native-elements';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import ProfileStackParamList from '../customTypes/profileStackParamList'
import RootTabParamList from '../customTypes/rootTabParamlist';
import InformationModal  from '../Components/informationModal';
import usePrevious from '../CustomHooks/usePrevious';

// we use compositenavprop to combine both props type
type AuthFormScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList,'Profile'>,
StackNavigationProp<ProfileStackParamList,'AuthForm'>
>;

// this combines the bottomtabnav and stacknav props for type checking
type Props = {
    navigation: AuthFormScreenNavigationProp
};

// maybe we dont need this state type with hooks? 

// type State = {
//     username: string,
//     password: string,
//     email: string,
//     login: boolean,
//     loading: boolean,
//     modalVisible: boolean

// }

const AuthFormScreen: React.FunctionComponent<Props> = (props: Props) =>{

    const [username,setUsername] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [login,setLogin] = useState<boolean>(true);
    const [loading,setLoading] = useState<boolean>(false);
    const [modalVisible,setModalVisible] = useState<boolean>(false);
    const prevLogin = usePrevious(login);
    // if loading gets set to true use this effect
    useEffect(()=>{
        if(loading && login){
            setTimeout(()=>{
                props.navigation.push("Profile",{
                    // mimic user object
                    user:{
                        username: username,
                        password: password,
                        userID:1
                    }
                });
                setLoading(false);
            },3000);
        }

        if(loading && !login){
            setTimeout(()=>{
                props.navigation.push("Profile",{
                    // mimic user object
                    user:{
                        username: username,
                        password: password,
                        userID:1,
                        email: email
                    }
                });
                setLoading(false);
            },3000);
        }
    },[loading]);



    const loginOrRegister = () => {
        // login form as a function called login
        const login =
                <>
                <Input
                    placeholder='Username'
                    onChange={(event)=>setUsername(event.nativeEvent.text)}
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
                    onChange={(event)=>setPassword(event.nativeEvent.text)}
                    leftIcon={
                        <Icon
                            name='lock'
                            type='feather'
                        />
                    }
                />
            </>
            
        // same as above but for register form
        const register = 
                <>
                <Input
                    placeholder='Username'
                    onChange={(event)=>setUsername(event.nativeEvent.text)}
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
                    onChange={(event)=>setPassword(event.nativeEvent.text)}
                    leftIcon={
                        <Icon
                            name='lock'
                            type='feather'
                        />
                    }
                />
                <Input
                    placeholder='Email'
                    onChange={(event)=>setEmail(event.nativeEvent.text)}
                    leftIcon={
                        <Icon
                            name='mail'
                            type='feather'
                        />
                    }
                />
            </>
            
        return login ? login : register;
    }

    const handleButtonTitle = () => {
        return login ? "Log in" : "Register";
    }

    const handleFormChange = () => {
        // change a bit of state to trigger rerender and show other form
        setLogin(!prevLogin);
    }

    const handleChangeFormText = () => {
        // change text depending on form thats present
        return login ? "New User? Register here!" : "Have an Account? Log in here!";
    }

    const handleLogin = () => {
        // return null to exit function
        if(username !== "edwin"){
            alert('wrong username');
            return null;
        }
        if(password !== 'ramos'){
            alert("wrong password");
            return null;
        }
        setLoading(true);
    }

     // basic mock validations just for now
    const handleRegister = () => {

        // return null to exit function
        if(username === "edwin"){
            alert('username is already taken');
            return null;
        }
        if(email === 'edwinramos269@gmail.com'){
            alert('email is already taken!');
            return null;
        }

        setLoading(true);
    }

    const verifyCorrectFormFields = () => {

        // return null to exit function
        if(username === ""){
            alert("Username can not be empty!");
            return null;
        }

        if(password === ""){
            alert("Password can not be empty");
            return null;
        }

        if(!login){
            if(email === ""){
                alert("Email can not be empty");
                return null;
            }
        }

        login ? handleLogin() : handleRegister();

    }

    // const setModalVisible = (setting: boolean) => {
    //     this.setState({
    //         modalVisible: setting
    //     }
    //     // USE THIS GOBACK FUNCTION LATER WHEN WE MAKE AUTHFORM A MODAL COMPONENT

    //     // ,()=>{
    //     //     if(setting === false){
    //     //         this.props.navigation.goBack()
    //     //     }}
    //     )
    // }

    const renderAuthForm = () => {
        return(
            <View style={styles.formContainer}>
                <Text style={styles.headerText}> 
                    {login ? "Login" : "Register"}
                </Text>
                {loginOrRegister()}
                <Button 
                    onPress={()=>{verifyCorrectFormFields()}}
                    style={styles.button} 
                    title={handleButtonTitle()} 
                />
                <Text onPress={()=>{handleFormChange()}}>
                    {handleChangeFormText()}
                </Text>
            </View>
        )
    }

    const handleSettingsPress = () => {
        setModalVisible(true);
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content'/>
            <View>
                <InformationModal visible={modalVisible} changeVisibility={setModalVisible}/>
                <TouchableOpacity style={{position:'absolute',left:130}} >
                <Icon
                    name='info'
                    type='feather'
                    onPress={()=>{handleSettingsPress()}}
                    />
                </TouchableOpacity>
            </View>
            { loading ? <ActivityIndicator style={styles.formContainer} size="large" color="black" /> : renderAuthForm()}
        </SafeAreaView>
    );
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
});

export default AuthFormScreen;