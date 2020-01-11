import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../components/homeScreen'
import SelectScreen from '../components/selectScreen'
import DetailScreen from '../components/detailScreen'

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