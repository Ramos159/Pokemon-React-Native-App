import RegionObject from '../customInterfaces/regionObject'

type RegionStackParamList = {
    RegionSelect:{
        regions: Array<RegionObject>
    },
    RegionDetail:{
        region:RegionObject
    }
}

export default RegionStackParamList