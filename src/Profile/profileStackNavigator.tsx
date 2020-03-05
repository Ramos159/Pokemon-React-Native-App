import React,{Component} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from './profileScreen'
import EditProfileScreen  from './editProfileScreen'
import AuthFormScreen from './authFormScreen'
import ProfileStackParamList from '../customTypes/profileStackParamList'
import RootTabParamList from '../customTypes/rootTabParamList'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

// creates stacknav checking for proper params against ProfileParamList
const Stack = createStackNavigator<ProfileStackParamList>()

// since this stack is child of a bottom tab, we should give it the bottom tab props
// UPDATE: we dont need this prop anymore
// type Props = {
//     navigation:BottomTabNavigationProp<RootTabParamList,"Profile">
// }

export default function ProfileStackNavigator(){
    return(
        <Stack.Navigator
        initialRouteName={"AuthForm"}
        headerMode="none"
        screenOptions={{
            gestureEnabled:false
        }}
        >
            <Stack.Screen name="AuthForm" component={AuthFormScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    )
}
