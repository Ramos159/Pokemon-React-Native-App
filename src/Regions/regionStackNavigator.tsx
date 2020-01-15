import {createStackNavigator} from 'react-navigation-stack'
import RegionSelectScreen from './regionSelectScreen'
import RegionDetailScreen  from './regionDetailScreen'

const RegionStackNavigator = createStackNavigator({
    RegionSelect: RegionSelectScreen,
    RegionDetail: RegionDetailScreen,
    // navigationOptions: ({ navigation }) => ({
    //     headerTransparent:true,
    //   })
},{initialRouteName:"RegionSelect",headerMode:"none"})

export default RegionStackNavigator