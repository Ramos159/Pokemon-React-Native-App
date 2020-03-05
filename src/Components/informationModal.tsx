import React,{Component} from 'react'
import { 
    SafeAreaView,
    Text, 
    Modal,
    StyleSheet
} from 'react-native'
import { 
    Button 
} from 'react-native-elements'

interface Props{
    visible:boolean,
    changeVisibility: Function
}

export default class InformationModal extends Component<Props>{
    render(){
        return(
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.visible}
                // may be of use later below
                // onRequestClose={() => {Alert.alert('Modal has been closed.');}}
                >
                    <SafeAreaView style={{marginTop:50}}>
                        <Text style={{marginLeft:15,fontSize:18, textAlign:"left"}}>App Version: Development Stage</Text>
                        <Text style={{marginLeft:15,fontSize:18, textAlign:"left", marginBottom:20}}>Author: Edwin Ramos</Text>
                        <Text style={{fontSize:15, textAlign:"center"}}>Built with React Native, Expo and Typescript</Text>
                        <Button style={styles.button}title={"close"} onPress={() => {this.props.changeVisibility(false)}}/>
                    </SafeAreaView>
                </Modal>
        )
    }
}

//stylesheet
const styles = StyleSheet.create({
    button:{
        width:200,
        paddingTop:20,
        paddingBottom:20,
        alignSelf:'center'
    }
})