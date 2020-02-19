import React,{Component} from 'react'
import {
  SafeAreaView,
  Text,
  Button,
  StatusBar,
  ScrollView
} from 'react-native'
import { PokedexItem } from './pokedexItem'
import NavigationPropType from '../customTypes/navigationPropType'

interface Props{
	navigation: NavigationPropType
}

export default class PokedexSelectScreen extends Component<Props> {

	constructor(props){
		super(props)
		console.log(this.props)
	}

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