/* eslint-disable no-alert */
import React, { useState, useEffect, ReactElement } from 'react';
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
  Button,
} from 'react-native-elements';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList } from '../customTypes/profileStackParamList';
import { RootTabParamList } from '../customTypes/rootTabParamlist';
import { InformationModal } from '../Components/informationModal';
import { usePrevious } from '../CustomHooks/usePrevious';

// we use compositenavprop to combine both props type
type AuthFormScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList, 'Profile'>,
StackNavigationProp<ProfileStackParamList, 'AuthForm'>
>;

// this combines the bottomtabnav and stacknav props for type checking
type Props = {
    navigation: AuthFormScreenNavigationProp
};

//  stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    zIndex: -10,
  },
  button: {
    width: 200,
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

// maybe we dont need this state type with hooks?

// type State = {
//     username: string;
//     password: string;
//     email: string;
//     login: boolean;
//     loading: boolean;
//     modalVisible: boolean;
// }

export function AuthFormScreen({ navigation }:Props): ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const prevLogin = usePrevious(login);
  // if loading gets set to true use this effect
  useEffect(() => {
    if (loading && login) {
      setTimeout(() => {
        navigation.push('Profile', {
          // mimic user object
          user: {
            username,
            password,
            userID: 1,
          },
        });
        setLoading(false);
      }, 3000);
    }

    if (loading && !login) {
      setTimeout(() => {
        navigation.push('Profile', {
          // mimic user object
          user: {
            username,
            password,
            userID: 1,
            email,
          },
        });
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  function loginOrRegister() {
    // login form as a function called login
    const loginForm = (
      <>
        <Input
          placeholder="Username"
          onChange={(event) => setUsername(event.nativeEvent.text)}
          leftIcon={(
            <Icon
              name="user"
              type="feather"
            />
          )}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChange={(event) => setPassword(event.nativeEvent.text)}
          leftIcon={(
            <Icon
              name="lock"
              type="feather"
            />
          )}
        />
      </>
    );
    // same as above but for register form
    const registerForm = (
      <>
        <Input
          placeholder="Username"
          onChange={(event) => setUsername(event.nativeEvent.text)}
          leftIcon={(
            <Icon
              name="user"
              type="feather"
            />
          )}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChange={(event) => setPassword(event.nativeEvent.text)}
          leftIcon={(
            <Icon
              name="lock"
              type="feather"
            />
          )}
        />
        <Input
          placeholder="Email"
          onChange={(event) => setEmail(event.nativeEvent.text)}
          leftIcon={(
            <Icon
              name="mail"
              type="feather"
            />
          )}
        />
      </>
    );

    return login ? loginForm : registerForm;
  }

  function handleButtonTitle() {
    return login ? 'Log in' : 'Register';
  }
  function handleFormChange() {
    // change a bit of state to trigger rerender and show other form
    setLogin(!prevLogin);
  }
  function handleChangeFormText() {
    // change text depending on form thats present
    return login ? 'New User? Register here!' : 'Have an Account? Log in here!';
  }
  function handleLogin() {
    // return null to exit function
    if (username !== 'edwin') {
      alert('wrong username');
      return null;
    }
    if (password !== 'ramos') {
      alert('wrong password');
      return null;
    }
    setLoading(true);
    return null;
  }

  // basic mock validations just for now
  function handleRegister() {
    // return null to exit function
    if (username === 'edwin') {
      alert('username is already taken');
      return null;
    }
    if (email === 'edwinramos269@gmail.com') {
      alert('email is already taken!');
      return null;
    }

    setLoading(true);
    return null;
  }

  function verifyCorrectFormFields() {
    // return null to exit function
    if (username === '') {
      alert('Username can not be empty!');
      return null;
    }

    if (password === '') {
      alert('Password can not be empty');
      return null;
    }

    if (!login) {
      if (email === '') {
        alert('Email can not be empty');
        return null;
      }
    }

    return login ? handleLogin() : handleRegister();
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

  function renderAuthForm() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>
          {login ? 'Login' : 'Register'}
        </Text>
        {loginOrRegister()}
        <Button
          onPress={verifyCorrectFormFields}
          style={styles.button}
          title={handleButtonTitle()}
        />
        <Text onPress={handleFormChange}>
          {handleChangeFormText()}
        </Text>
      </View>
    );
  }

  function handleSettingsPress() {
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        {/* Type '{ visible: boolean; changeVisibility: Dispatch<SetStateAction<boolean>>; }'
        is not assignable to type 'IntrinsicAttributes'.
        Property 'visible' does not exist on type 'IntrinsicAttributes'.ts(2322).
        Clearly the way i define it, modalVisible is a boolean.
        Also it does work as intended.
        */}
        <InformationModal
          visible={modalVisible}
          changeVisibility={setModalVisible}
        />
        <TouchableOpacity style={{ position: 'absolute', left: 130 }}>
          <Icon
            name="info"
            type="feather"
            onPress={handleSettingsPress}
          />
        </TouchableOpacity>
      </View>
      { loading ? <ActivityIndicator style={styles.formContainer} size="large" color="black" /> : renderAuthForm()}
    </SafeAreaView>
  );
}
