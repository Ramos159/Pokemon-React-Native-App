import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './containers/homeScreen'
import SelectScreen from './containers/selectScreen'
import DetailScreen from './containers/detailScreen'

export const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Select: {
        screen: SelectScreen
    },
    Detail: {
        screen: DetailScreen
    }
},
{
    initialRouteName:'Home'
}
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer