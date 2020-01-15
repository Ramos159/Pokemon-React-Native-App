import React from 'react'
import {
  	ScrollView,
  	Text,
  	Button,
	SafeAreaView,
	StatusBar
} from 'react-native'
import RegionItem from './regionItem'
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState
  } from 'react-navigation' 
import Constants from 'expo-constants'

interface Props{
  navigation: NavigationScreenProp<NavigationState,NavigationParams>
}

export default class RegionSelectScreen extends React.Component<Props>{
	// dummy data for now
  	regions = [
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
		{
			name:"Alola",
			games:["Sun","Moon","Ultra Sun","Ultra Moon"]
		},
		{
			name:"Galar",
			games:["Sword","Shield"]
		}
	]

  renderRegions = (regionsArray) => {

    return regionsArray.map((region,id)=><RegionItem id={id} navigation={this.props.navigation} region={region}/>)
  }
    render() {
		console.log(Constants)
      return (
		<>
		<SafeAreaView style={{flex:0,backgroundColor:"white"}}/>
		<StatusBar barStyle="dark-content"/>
		<SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        	<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center',paddingTop:50,backgroundColor:'white'}}>
				<Text style={{fontWeight:"bold",fontSize:20}}>Regions</Text>
        	  	{this.renderRegions(this.regions)}
        	</ScrollView>
		</SafeAreaView>
		</>
      );
    }
  }