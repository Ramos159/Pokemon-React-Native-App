import React from 'react'
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ProfileStackNavigator from '../Profile/profileStackNavigator'
import RegionSelectScreen from '../Regions/regionSelectScreen'
import DetailScreen from '../Pokedexs/pokedexSelectScreen'

const Tabs = createBottomTabNavigator({
    'Regions':{
        screen: RegionSelectScreen,
        navigationOptions:{
            tabBarLabel: 'Regions',
            tabBarIcon: ({ tintColor }) => <Icon name="compass" type="entypo" size={28} color={tintColor} />
        }
    },
    'Pokedexs':{
        screen: DetailScreen,
        navigationOptions:{
            tabBarLabel: 'Pokedexs',
            tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        }
    },
    'Profile':{
        screen: ProfileStackNavigator,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name="user" type="entypo" size={28} color={tintColor} />
        }
    },
},{
    initialRouteName:"Profile"
})
// const StackContainer = createStackNavigator({Tabs},{headerMode:"none"})
const AppContainer = createAppContainer(Tabs)

export default AppContainer