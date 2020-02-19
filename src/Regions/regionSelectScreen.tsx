import React,{Component} from 'react'
import {
  	ScrollView,
  	Text,
	SafeAreaView,
	StatusBar
} from 'react-native'
import RegionItem from './regionItem'
import NavigationPropType from '../customTypes/navigationPropType'
import RegionObject from '../customInterfaces/regionObject'

interface Props{
	navigation: NavigationPropType
}

export default class RegionSelectScreen extends Component<Props>{
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
		// {
		// 	name:"Alola",
		// 	games:["Sun","Moon","Ultra Sun","Ultra Moon"]
		// },
		// {
		// 	name:"Galar",
		// 	games:["Sword","Shield"]
		// }
	]

 	renderRegions = (regionsArray: Array<RegionObject>): Array<JSX.Element> => {
    	return regionsArray.map((region,id)=><RegionItem key={id} navigation={this.props.navigation} region={region}/>)
	}
	  
    render() {
      	return (
			<SafeAreaView style={{flex:1,backgroundColor:"white"}}>
				<Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",paddingTop:25,paddingBottom:25}}>Regions</Text>
        		<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center',backgroundColor:'white'}}>
        	  		{this.renderRegions(this.regions)}
        		</ScrollView>
			</SafeAreaView>
      )
    }
  }