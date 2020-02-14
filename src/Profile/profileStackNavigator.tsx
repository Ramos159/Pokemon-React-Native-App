import {createStackNavigator} from 'react-navigation-stack'
import ProfileScreen from './profileScreen'
import EditProfileScreen  from './editProfileScreen'
import AuthFormScreen from './authFormScreen'

const ProfileStackNavigator = createStackNavigator({
    Profile: ProfileScreen,
    Edit: EditProfileScreen,
    Auth: AuthFormScreen
},{initialRouteName:"Auth",headerMode:"none",})

export default ProfileStackNavigator