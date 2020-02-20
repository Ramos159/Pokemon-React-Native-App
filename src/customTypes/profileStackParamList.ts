import UserInterface from '../customInterfaces/userInterface'
// param list for the profile stack nav
type ProfileStackParamList = {
    Profile:{
        user: UserInterface
    },
    AuthForm:undefined,
    EditProfile:{
        user: UserInterface
    }
}

export default ProfileStackParamList