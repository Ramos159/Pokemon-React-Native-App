import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import RegionSelectScreen from './regionSelectScreen'
import RegionDetailScreen  from './regionDetailScreen'

const Stack = createStackNavigator()

export default function RegionStackNavigator() {
    return(
        <Stack.Navigator
            initialRouteName="RegionSelect"
            headerMode="none"
        >
            <Stack.Screen name="RegionSelect" component={RegionSelectScreen} />
            <Stack.Screen name="RegionDetail" component={RegionSelectScreen} />
        </Stack.Navigator>
    )
}