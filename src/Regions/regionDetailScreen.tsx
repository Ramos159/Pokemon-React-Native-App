import React from 'react'
import { 
	SafeAreaView, 
	Text, 
    StyleSheet,
    StatusBar
} from 'react-native'
import {
	NavigationParams,
	NavigationScreenProp,
    NavigationState,
  } from 'react-navigation'

// not sure if making my own state is the right way but this seems harmless
interface CustomNavigationState extends NavigationState{
    name: String
}

interface Props{
    navigation:NavigationScreenProp<NavigationParams,CustomNavigationState>,
}

export default class RegionDetailScreen extends React.Component<Props>{
    render(){
        return(
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:"white"}}>
            <StatusBar barStyle="dark-content"/>
                <Text>{this.props.navigation.state.params.name}</Text>
            </SafeAreaView>
        )
    }
}