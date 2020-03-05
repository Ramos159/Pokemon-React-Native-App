import React,{Component} from 'react'
import { 
	SafeAreaView, 
	Text, 
    StatusBar
} from 'react-native'
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native'
import RegionStackParamList from '../customTypes/RegionStackParamList'
import RootTabParamList from '../customTypes/rootTabParamlist'

// we use compositenavprop to combine both props type
type RegionDetailNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<RootTabParamList,'Regions'>,
StackNavigationProp<RegionStackParamList,'RegionDetail'>
>
// type check route prop so we can get route params
type RegionDetailRouteProp = RouteProp<RegionStackParamList,"RegionDetail">

interface Props{
    navigation: RegionDetailNavigationProp,
    route: RegionDetailRouteProp
}

export default class RegionDetailScreen extends Component<Props>{
    render(){
        return(
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:"white"}}>
            <StatusBar barStyle="dark-content"/>
                <Text>{this.props.route.params.region.name}</Text>
            </SafeAreaView>
        )
    }
}