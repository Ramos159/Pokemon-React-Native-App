import React, { Component } from 'react';
import { Text, View, TextInput, Button} from 'react-native';

export default class Playground extends Component {

  state = {
    input:"",
    final:""
  }

  configureInput = () => {
    if(this.state.input){
      return `you typed: ${this.state.input}` 
    }
    if(!this.state.input){
      return "you haven't typed anything!"
    }
  }

  handleTextInput = (event) => {
    console.log(event)
    this.setState({
      ...this.state,
      input:event.nativeEvent.text
    })
  }

  submittedWord = () => {
    return this.state.final ? <Text style={{fontSize:30}}>you submitted: {this.state.final}</Text> : null
  }

  handleSubmit = (event) => {
    this.setState({
      input:'',
      final:event.nativeEvent.text
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        {this.submittedWord()}
        <Text style={{fontSize:25,height:80}}>{this.configureInput()}</Text>
        <TextInput 
            placeholder="type something here!" 
            onChange={(event)=>this.handleTextInput(event)} 
            value={this.state.input} 
            onSubmitEditing={(event)=>this.handleSubmit(event)}/>
        <Button
        onPress={() => {alert('You tapped the button!')}}
        title="Press Me"/>
      </View>
    );
  }
};
