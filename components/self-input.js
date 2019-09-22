import React, { Component } from 'react';
import {ContextApi} from './context-api.js';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

class SelfInput extends Component {  

  state = {

    text:''
  }

  clearState=()=> {
    this.setState({text:''})
  }

  render () {

    const { addSelfItem } = this.context;

    return(

        <View style={styles.boxInput}>

          <TextInput
            style={ styles.input}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        
          <TouchableOpacity 
            style={styles.addItem}
            onPress = { addSelfItem(this.state.text,this.clearState) }>                  
              
            <Text style={styles.textAdd}>+</Text>

          </TouchableOpacity>

        </View>
    )
  }    
}

SelfInput.contextType = ContextApi;
export default SelfInput;

const styles = StyleSheet.create({  
  boxInput: {
    flex:1,    
    paddingTop: 20        
  },
  input:{
    flex:1,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize:22,
    color:'#000',
    backgroundColor:'#fff'
  },
  addItem:{
    width:45,
    height:45,
    marginTop:20,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-end',
    backgroundColor: 'rgba(167,174,166,0.2)'
  },
  textAdd:{    
    textAlign:'center',
    fontSize:40,
    color:'#fff'    
  }
});