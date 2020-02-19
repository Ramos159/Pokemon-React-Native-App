import React from 'react'
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

export default function RegionStackNavigator() {
    return(
        <Stack.Navigator
            initialRouteName="RegionSelect"
            headerMode="none"
        >
            <Stack.Screen initialParams={{regions:regions}} name="RegionSelect" component={RegionSelectScreen} />
            <Stack.Screen name="RegionDetail" component={RegionDetailScreen} />
        </Stack.Navigator>
    )
} 

//dummy data
const regions = [
    {
          name:"Kanto",
          games:["Red","Blue","Yellow","Fire Red","Leaf Green"]
    },
    {
          name:"Johto",
          games:['Gold',"Silver",'Crystal',"Heart Gold","Soul Silver"]
    },
    {
          name:"Hoenn",
         games:["Sapphire","Ruby","Emerald","Omega Ruby","Alpha Sapphire"]
    },
    {
      name:"Sinnoh",
      games:["Diamond,Pearl"]
  },
  {
      name:"Unova",
      games:["Black","White","Black 2","White 2",]
  },
  {
      name:"Kalos",
      games:["X","Y"]
  },
  // {
  // 	name:"Alola",
  // 	games:["Sun","Moon","Ultra Sun","Ultra Moon"]
  // },
  // {
  // 	name:"Galar",
  // 	games:["Sword","Shield"]
  // }
]