import React from 'react'
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../screens/homeScreen'
import SelectScreen from '../screens/selectScreen'
import DetailScreen from '../screens/detailScreen'

// export const AppNavigator = createStackNavigator({
//     Home: {
//         screen: HomeScreen,
//     },
//     Select: {
//         screen: SelectScreen
//     },
//     Detail: {
//         screen: DetailScreen
//     }
// },
// {
    // initialRouteName:'Home'
// }
// )

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
    'Home':{
        screen: HomeScreen,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="home" type="entypo" size={28} color={tintColor} />
        }
    }
})
const StackContainer = createStackNavigator({Tabs},{headerMode:"none"})
const AppContainer = createAppContainer(Tabs)

export default AppContainer