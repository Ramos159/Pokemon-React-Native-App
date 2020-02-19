import UserInterface from '../customInterfaces/userInterface'

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