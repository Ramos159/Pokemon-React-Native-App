import React,{Component} from 'react'
import { 
	View, 
	Text, 
  	StyleSheet,
  	TouchableOpacity
} from 'react-native'
import NavigationPropType from '../customTypes/navigationPropType'

interface PokedexItemObj{
	name: string,
    entries: number,
}

interface Props{
	key: number,
  	pokedex: PokedexItemObj,
  	navigation: NavigationPropType
}

export class PokedexItem extends Component<Props>{

  	// createGamesString = (gamesArray: Array<String>): String => {
    // 	let string = "Games: "

  	// 	for(let i = 0;i < gamesArray.length;i++){
    // 		if(i == gamesArray.length -1 ){ 
    //     		string += `${gamesArray[i]}`
    //   		}
    //   		else{
    //     		string += `${gamesArray[i]}, `
    //   		}
   	// 	}
    // 	return string
      // }
      
    // constructor(props: any){
    //     super(props)
    // }

  	// Stack navigator likes to pass params instead of props, they essentially work the same way 
	handleItemPress = (event: Object): void => {
	    // 	this.props.navigation.navigate("RegionDetail",{
		//   		name: this.props.pokedex.name
        // })
        alert('normally would go to pokedex page')
  	}

  render(){
	return(
    	<TouchableOpacity style={styles.rowContainer} onPress={(event)=>this.handleItemPress(event)}>
			<View style={styles.rowText}>
    			<Text style={styles.name}>{this.props.pokedex.name}</Text>
    			<Text style={styles.games}>Entries: {this.props.pokedex.entries}</Text>
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