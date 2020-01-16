import React from 'react'
import { 
	View, 
	Text, 
  	StyleSheet,
  	TouchableOpacity
} from 'react-native'
import NavigationPropType from '../customTypes/navigationPropType'

interface RegionItemObject{
	name: String,
	games: Array<String>
}

interface Props{
	id: Number,
  	region: RegionItemObject,
  	navigation: NavigationPropType
}

export default class RegionItem extends React.Component<Props>{

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
	handleItemPress = (event): void => {
      	console.log(typeof(Event))
	    	this.props.navigation.navigate("RegionDetail",{
		  		name: this.props.region.name
	  	})
  	}

  render(){
	return(
    	<TouchableOpacity style={styles.rowContainer} onPress={(event)=>this.handleItemPress(event)}>
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
      	color: '#777'
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