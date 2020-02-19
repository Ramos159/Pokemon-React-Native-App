import React,{ Component } from 'react'
import {
    Text,
    SafeAreaView,
    StatusBar
} from 'react-native'

export default class AboutPage extends Component{
    render(){
        return(
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:"white"}}>
                <StatusBar barStyle='dark-content'/>
                <Text>App Version: Development Stage</Text>
                <Text>Author: Edwin Ramos</Text>
                <Text>Built with React Native and Expo</Text>
            </SafeAreaView>
        )
    }
}