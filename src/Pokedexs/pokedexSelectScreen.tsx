import React,{Component} from 'react'
import {
  SafeAreaView,
  Text,
  Button,
  StatusBar,
  ScrollView
} from 'react-native'
import { PokedexItem } from './pokedexItem'
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import PokedexStackParamList from '../customTypes/pokedexStackParamList'
import RootTabParamList from '../customTypes/rootTabParamlist'

type PokedexSelectNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList,'Pokedexs'>,
StackNavigationProp<PokedexStackParamList,'PokedexSelect'>
>

interface Props{
	navigation:  PokedexSelectNavigationProp
}

export default class PokedexSelectScreen extends Component<Props> {

	pokedexes = [
		{
			name:"Kanto Pokedex",
			entries: 151
		},
		{
			name:'Johto Pokedex',
			entries: 100,
		},
		{
			name:'Hoenn Pokedex',
			entries:135
		},
		{
			name:'Sinnoh Pokedex',
			entries:107,
		},
		{
			name:'Unova Pokedex',
			entries:153
		},{
			name:"Kalos Pokedex",
			entries:153
		},
		{
			name:'Special Forms',
			entries:90
		}
	]
	// cant figure out how to 
	renderPokedexes = ():Array<JSX.Element> => {
		return this.pokedexes.map((pokedexObj,index)=><PokedexItem key={index} pokedex={pokedexObj} navigation={this.props.navigation}/>)
	}

    render(){
      	return (
			<SafeAreaView style={{flex:1,backgroundColor:"white",}}>
        		<StatusBar barStyle='dark-content'/>
				<Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",paddingTop:25,paddingBottom:25}}>Pokedexs</Text>
        		<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center',backgroundColor:'white'}}> 
				{this.renderPokedexes()}
        		</ScrollView>
			</SafeAreaView>
      );
    }
  }