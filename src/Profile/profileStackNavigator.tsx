import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import ProfileScreen from './profileScreen'
import EditProfileScreen  from './editProfileScreen'

const ProfileStackNavigator = createStackNavigator({
    Profile: ProfileScreen,
    Edit: EditProfileScreen,
    // navigationOptions: ({ navigation }) => ({
    //     headerTransparent:true,
    //   })
},{initialRouteName:"Profile",headerMode:"none"})

export default ProfileStackNavigator