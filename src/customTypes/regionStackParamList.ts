import RegionObject from '../customInterfaces/regionObject'
import { StackNavigationProp } from '@react-navigation/stack'

type RegionStackParamList = {
    RegionSelect:{
        regions: Array<RegionObject>
    },
    RegionDetail:{
        region:RegionObject
    }
}

export default RegionStackParamList