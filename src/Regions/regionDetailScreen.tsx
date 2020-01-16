import React from 'react'
import { 
	SafeAreaView, 
	Text, 
    StyleSheet,
    StatusBar
} from 'react-native'
import NavigationPropType from '../customTypes/navigationPropType'

interface Props{
    navigation: NavigationPropType,
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