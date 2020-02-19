import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons as Icon } from '@expo/vector-icons'
import RegionStackNavigator from '../Regions/regionStackNavigator'
import PokedexSelectScreen from '../Pokedexs/pokedexSelectScreen'
import ProfileStackNavigator from '../Profile/profileStackNavigator'

const Tab = createBottomTabNavigator()

export default function AppTab() {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, }) => {
                    let iconName: string
                    
                    if(route.name === 'Regions'){
                        iconName = 'ios-map'
                    }
                    if(route.name === 'Pokedexs'){
                        iconName = 'ios-list'
                    }
                    if(route.name === 'Profile'){
                        iconName = 'ios-person'
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            }
        )}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
            <Tab.Screen name="Regions" component={RegionStackNavigator}/>
            <Tab.Screen name="Pokedexs" component={PokedexSelectScreen}/>
            <Tab.Screen name="Profile" component={ProfileStackNavigator}/>
        </Tab.Navigator>
    )
}