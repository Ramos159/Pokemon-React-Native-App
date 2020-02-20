import RegionObject from '../customInterfaces/regionObject'
import { StackNavigationProp } from '@react-navigation/stack'
// param list for the region stacknav
type RegionStackParamList = {
    RegionSelect:undefined
    // think we'll just have them fetch regions when i start doing back end
    // {
    //     regions: Array<RegionObject>
    // }
    ,
    RegionDetail:{
        region:RegionObject
    }
}

export default RegionStackParamList