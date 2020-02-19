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
	navigation: NavigationPropType,
	regions:Array<RegionObject>
}

export default class RegionSelectScreen extends Component<Props>{

 	renderRegions = (regionsArray: Array<RegionObject>): Array<JSX.Element> => {
    	return regionsArray.map((region,id)=><RegionItem key={id} navigation={this.props.navigation} region={region}/>)
	}
	  
    render() {
      	return (
			<SafeAreaView style={{flex:1,backgroundColor:"white"}}>
				<Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",paddingTop:25,paddingBottom:25}}>Regions</Text>
        		<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center',backgroundColor:'white'}}>
        	  		{this.renderRegions(this.props.regions)}
        		</ScrollView>
			</SafeAreaView>
      )
    }
  }