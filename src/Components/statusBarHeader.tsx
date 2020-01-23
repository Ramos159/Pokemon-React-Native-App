import React,{Component} from 'react'
import {
    StatusBar,
    SafeAreaView,
} from 'react-native'

export default class StatusBarHeader extends Component{
    render(){
        return(
            <>
                <SafeAreaView style={{flex:0,backgroundColor:"white"}}/>
			    <StatusBar barStyle="dark-content"/>
            </>
        )
    }
}