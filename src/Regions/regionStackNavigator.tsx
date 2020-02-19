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
            <Stack.Screen initialParams={{regions:regions}} name="RegionSelect" component={RegionSelectScreen} />
            <Stack.Screen name="RegionDetail" component={RegionSelectScreen} />
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