import React,{Component} from 'react'
import { 
	View, 
	Text, 
  	StyleSheet,
  	TouchableOpacity
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import RegionStackParamList from '../customTypes/regionStackParamList'
import RegionObject from '../customInterfaces/regionObject';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import RootTabParamList from '../customTypes/rootTabParamlist'

// we use compositenavprop to combine both props type
// this is indentical to the props of region select, couldnt find a way to seperate props
type RegionDetailScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList,'Regions'>,
StackNavigationProp<RegionStackParamList,'RegionSelect'>
>

type Props = {
	navigation: RegionDetailScreenNavigationProp,
	key: number,
	region: RegionObject,
}

export default class RegionItem extends Component<Props>{

  	createGamesString = (gamesArray: Array<String>): String => {
    	let string = "Games: "

  		for(let i = 0;i < gamesArray.length;i++){
    		if(i == gamesArray.length -1 ){ 
        		string += `${gamesArray[i]}`
      		}
      		else{
        		string += `${gamesArray[i]}, `
      		}
   		}
    	return string
  	}

  	// Stack navigator likes to pass params instead of props, they essentially work the same way 
	handleItemPress = (event: Object): void => {
	    	this.props.navigation.navigate("RegionDetail",{
		  		region: this.props.region
	  	})
  	}

  render(){
	return(
		<TouchableOpacity 
			style={styles.rowContainer} 
			onPress={(event)=>this.handleItemPress(event)}>
			<View style={styles.rowText}>
    			<Text style={styles.name}>{this.props.region.name}</Text>
    			<Text style={styles.games}>{this.createGamesString(this.props.region.games)}</Text>
    		</View>
    	</TouchableOpacity>
      )
    }
}

// styles
const styles = StyleSheet.create({
    rowContainer: {
      	flexDirection: 'row',
      	backgroundColor: '#FFF',
      	height: 100,
      	padding: 10,
      	marginRight: 10,
      	marginLeft: 10,
      	marginTop: 10,
      	borderRadius: 4,
      	shadowOffset:{  width: 1,  height: 1,  },
      	shadowColor: '#CCC',
      	shadowOpacity: 1.0,
      	shadowRadius: 1
    },
    name: {
      	paddingLeft: 10,
      	paddingTop: 5,
      	fontSize: 16,
      	fontWeight: 'bold',
      	color: 'black'
    },
    games: {
      	paddingLeft: 10,
      	marginTop: 5,
      	fontSize: 14,
      	color: '#777'
    },
    // thumbnail: {
    //   flex: 1,
    //   height: undefined,
    //   width: undefined
    // },
    rowText: {
      flex: 4,
      flexDirection: 'column'
    }
    })