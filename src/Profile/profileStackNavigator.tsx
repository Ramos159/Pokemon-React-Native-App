import {createStackNavigator} from 'react-navigation-stack'
import ProfileScreen from './profileScreen'
import EditProfileScreen  from './editProfileScreen'
import AuthFormScreen from './authFormScreen'

const ProfileStackNavigator = createStackNavigator({
    Profile: ProfileScreen,
    Edit: EditProfileScreen,
    Auth: AuthFormScreen
    // navigationOptions: ({ navigation }) => ({
    //     headerTransparent:true,
    //   })
},{initialRouteName:"Auth",headerMode:"none"})

export default ProfileStackNavigator