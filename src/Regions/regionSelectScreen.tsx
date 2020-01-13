import React from 'react'
import {View,Text,Button} from 'react-native'
import RegionItem from './regionItem'

export default class RegionSelectScreen extends React.Component{
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
    }
  ]

  renderRegions = (regionsArray) => {
    return regionsArray.map((region,id)=><RegionItem key={id} name={region.name} games={region.games}/>)
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center',paddingTop:60 }}>
          <Text style={{fontWeight:"bold",fontSize:20}}>Regions</Text>
          {this.renderRegions(this.regions)}
        </View>
      );
    }
  }