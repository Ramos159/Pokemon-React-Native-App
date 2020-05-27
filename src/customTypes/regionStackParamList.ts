// eslint throws unused var but its clearly used
// eslint-disable-next-line
import RegionObject from '../customInterfaces/regionObject'
// param list for the region stacknav
export type RegionStackParamList = {
  RegionSelect: undefined
  // think we'll just have them fetch regions when i start doing back end
  // {
  //     regions: Array<RegionObject>
  // }
  ,
  RegionDetail: {
      region: RegionObject
  }
}
