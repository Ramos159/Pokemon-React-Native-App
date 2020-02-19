import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutPage from '../Settings/aboutPage'

const Drawer = createDrawerNavigator();

export default function SettingsDrawer(){
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="About" component={AboutPage} />
    </Drawer.Navigator>
  );
}