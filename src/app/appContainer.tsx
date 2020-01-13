import React from 'react'
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ProfileStackNavigator from '../Profile/profileStackNavigator'
import SelectScreen from '../screens/selectScreen'
import DetailScreen from '../screens/detailScreen'

const Tabs = createBottomTabNavigator({
    'Select':{
        screen: SelectScreen,
        navigationOptions:{
            tabBarLabel: 'Select',
            tabBarIcon: ({ tintColor }) => <Icon name="compass" type="entypo" size={28} color={tintColor} />
        }
    },
    'Detail':{
        screen: DetailScreen,
        navigationOptions:{
            tabBarLabel: 'Detail',
            tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        }
    },
    'Profile':{
        screen: ProfileStackNavigator,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name="user" type="entypo" size={28} color={tintColor} />
        }
    }
})
// const StackContainer = createStackNavigator({Tabs},{headerMode:"none"})
const AppContainer = createAppContainer(Tabs)

export default AppContainer