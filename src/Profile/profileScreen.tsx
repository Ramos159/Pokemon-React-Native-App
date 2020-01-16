import React,{Component} from 'react'
import {
	SafeAreaView,
	ScrollView,
	Text,
	Button, 
	StyleSheet,
	StatusBar
} from 'react-native'
import User from '../customInterfaces/user'
import NavigationPropType from '../customTypes/navigationPropType'


interface Props{
	user: User,
	navigation: NavigationPropType
}

interface State{
  	user: User
}

export default class ProfileScreen extends Component<Props,State>{

	state: State ={
    	user:{
      	userName:null,
      	favorites:[]
    	}
  	}

  	render() {
  		return(		
		<>	
			<SafeAreaView style={{flex:0,backgroundColor:"white"}}/>
			<StatusBar barStyle="dark-content"/>
			<SafeAreaView style={{flex:1,backgroundColor:"white",}}>
				<Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",paddingTop:25,paddingBottom:25}}>Profile</Text>
        		<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center',backgroundColor:'white'}}>
					{/* filler */}
        	  		<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at aliquet diam. Sed et pretium magna. Donec facilisis non augue et iaculis. Morbi placerat nec lorem facilisis egestas. Proin laoreet nec purus ac maximus. Morbi fermentum ultricies sollicitudin. Sed euismod laoreet quam, sed feugiat metus aliquet non. Quisque quis tempor justo. Sed sem magna, maximus sed ornare non, posuere in augue. Phasellus et maximus leo. Phasellus egestas a mauris ut rhoncus.

Nullam urna arcu, ultrices a dui in, eleifend porta arcu. Aenean at justo sit amet orci sodales mollis. Donec dui lorem, lacinia ut ex eu, efficitur dapibus enim. Nunc pretium erat sed tempus placerat. Donec pharetra in elit vel rutrum. Maecenas auctor, risus at mollis dapibus, diam lorem cursus ex, eget pharetra libero felis eget orci. Sed lacinia sapien eu nisi tempor, ac ornare mauris facilisis. Nullam tempus venenatis lorem, ut viverra neque sollicitudin ut. Donec eget posuere mauris.

Sed at cursus lectus, quis mollis dui. Maecenas non nibh in odio gravida lobortis non non sem. Nulla facilisi. Donec eget porta mauris. Sed interdum lacus a erat sodales porttitor. Sed a ipsum suscipit, gravida ex ut, venenatis velit. Nunc in ornare neque. Integer blandit nibh nisl, at fringilla mauris dapibus eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nunc sagittis magna ac felis suscipit auctor. Nunc nec nulla eu leo scelerisque gravida. Donec placerat sapien mi, non feugiat odio placerat id. Fusce eu suscipit velit, at convallis ex. Curabitur sed massa et dui viverra tempus. In in hendrerit sem. Phasellus et odio in ligula tempor varius. Etiam et ex ac lorem vehicula tristique. Proin ut interdum nisi. Praesent faucibus enim non ligula tincidunt interdum. Morbi in commodo ex. Curabitur et magna suscipit, interdum mi eu, fringilla felis. Donec massa risus, tempor id mauris ac, tristique iaculis urna. Aenean et luctus mauris. In hac habitasse platea dictumst. Curabitur feugiat imperdiet enim non mattis.

Proin finibus, turpis non vulputate sodales, orci lorem eleifend magna, aliquam sagittis ex magna non ipsum. Donec eget molestie magna, et tristique sapien. In at dapibus neque, nec facilisis tortor. Donec eget imperdiet purus, vitae molestie justo. Etiam pellentesque sem vel justo semper, iaculis fermentum est ultricies. Aliquam sit amet mollis massa. Morbi ut lectus non lacus gravida tempor eu in urna. Sed euismod auctor volutpat. Duis eu varius sapien, id feugiat erat. Ut hendrerit dictum ligula vel semper. Etiam ut purus non tortor interdum ornare. Nullam tellus turpis, gravida in justo eget, fermentum dignissim felis. Sed id rhoncus massa, et efficitur tortor. Cras a turpis lacus.
				</Text>
				<Button title="Edit Profile" onPress={(events)=>{this.props.navigation.navigate('Edit')}}/>
        		</ScrollView>
			</SafeAreaView>
		  	{/* <SafeAreaView style={{flex:0,backgroundColor:"white"}}/>
		  	<StatusBar barStyle="dark-content"/>
  	    	<SafeAreaView style={styles.container}>
  	    		<Text style={{fontWeight:"bold",fontSize:20}}>Profile</Text>
  	    		<Button title="Edit Profile" onPress={(events)=>{this.props.navigation.navigate('Edit')}}/>
  	    	</SafeAreaView> */}
		</>
  	  	)
  	}
}

// const styles = StyleSheet.create({
// 	container:{
// 		flex: 1, 
// 		alignItems: 'center',
// 		backgroundColor:"white",
// 		// marginTop:60
// 	}
// })
