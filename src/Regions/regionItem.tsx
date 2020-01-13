import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class RegionItem extends React.Component{

  createGamesString = (gamesArray) => {
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

  render(){
    return(
      <View style={styles.rowContainer}>
        <View style={styles.rowText}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.games}>{this.createGamesString(this.props.games)}</Text>
        </View>
      </View>
      )
    }
}

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