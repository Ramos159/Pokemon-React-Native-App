// eslint-disable-next-line
import UserInterface from '../customInterfaces/userInterface';
// param list for the profile stack nav
export type ProfileStackParamList = {
    Profile:{
        user: UserInterface
    },
    AuthForm:undefined,
    EditProfile:{
        user: UserInterface
    },
}
