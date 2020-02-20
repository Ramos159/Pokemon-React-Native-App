import React,{Component} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import RegionSelectScreen from './regionSelectScreen'
import RegionDetailScreen  from './regionDetailScreen'
import RegionStackParamList from '../customTypes/regionStackParamList'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import RootTabParamList from '../customTypes/rootTabParamList'

const Stack = createStackNavigator<RegionStackParamList>()

// since this stack is child of a bottom tab, we should give it the bottom tab props
type Props = {
    navigation:BottomTabNavigationProp<RootTabParamList,"Regions">
}

export default class RegionStackNavigator extends Component<Props>{
    render(){
        return(
            <Stack.Navigator
                initialRouteName="RegionSelect"
                headerMode="none"
            >
                <Stack.Screen  name="RegionSelect" component={RegionSelectScreen} />
                <Stack.Screen name="RegionDetail" component={RegionDetailScreen} />
            </Stack.Navigator>
        )
    }
} 