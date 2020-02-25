import React,{Component} from 'react'
import {
  	ScrollView,
  	Text,
	SafeAreaView,
	StatusBar,
} from 'react-native'
import RegionItem from './regionItem'
import RegionObject from '../customInterfaces/regionObject'
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import RegionStackParamList from '../customTypes/RegionStackParamList'
import RootTabParamList from '../customTypes/rootTabParamlist'

// we use compositenavprop to combine both props type from bottom nav and stack nav
type RegionSelectScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList,'Regions'>,
StackNavigationProp<RegionStackParamList,'RegionSelect'>
>

interface Props{
	navigation: RegionSelectScreenNavigationProp,
}

export default class RegionSelectScreen extends Component<Props>{

 	renderRegions = (regionsArray: Array<RegionObject>): Array<JSX.Element> => {
    	return regionsArray.map((region,id)=><RegionItem key={id} navigation={this.props.navigation} region={region}/>)
	}
	  
    render() {
      	return (
			<SafeAreaView style={{flex:1,backgroundColor:"white"}}>
				<StatusBar barStyle="dark-content"/>
				<Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",paddingTop:25,paddingBottom:25}}>Regions</Text>
        		<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center',backgroundColor:'white'}}>
        	  		{this.renderRegions(regions)}
        		</ScrollView>
			</SafeAreaView>
      )
    }
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
  }
  
  // these regions are on the pokemon api yet for some reason

  // {
  // 	name:"Alola",
  // 	games:["Sun","Moon","Ultra Sun","Ultra Moon"]
  // },
  // {
  // 	name:"Galar",
  // 	games:["Sword","Shield"]
  // }
]