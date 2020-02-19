import {createStackNavigator} from 'react-navigation-stack'
import ProfileScreen from './profileScreen'
import EditProfileScreen  from './editProfileScreen'
import AuthFormScreen from './authFormScreen'
import SettingsDrawer from '../Components/settingsDrawer'

const ProfileStackNavigator = createStackNavigator({
    Profile: ProfileScreen,
    Edit: EditProfileScreen,
    Auth: AuthFormScreen,
    // Settings: SettingsDrawer
},{initialRouteName:"Auth",headerMode:"none",})

export default ProfileStackNavigator