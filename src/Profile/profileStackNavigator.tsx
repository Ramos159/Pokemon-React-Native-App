import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from './profileScreen'
import EditProfileScreen  from './editProfileScreen'
import AuthFormScreen from './authFormScreen'

const Stack = createStackNavigator()

export default function ProfileStackNavigator() {
    return(
        <Stack.Navigator
            initialRouteName="AuthForm"
            headerMode="none"
        >
            <Stack.Screen name="AuthForm" component={AuthFormScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    )
}
