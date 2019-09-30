import React, { Component } from 'react';
import {ContextApi} from './context-api.js';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import DialogSaveEntry from './dialog-save-entry.js';

class SelfInput extends Component {  

  state = {

    text:'',
    dialogVisible: false
  }

  clearState=()=> {
    this.setState({text:''})
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
 
  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  handleSave = () => {
   
    this.setState({ dialogVisible: false });
  };

  render () {

    const { addSelfItem, saveSelfEntry } = this.context;

    return(

        <View style={styles.boxInput}>

          <TextInput
            style={ styles.input}
            placeholder="Type here to add!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />

          <View 
            style={styles.buttonsBox} >
        
            <TouchableOpacity 
              style={styles.saveItem}
              onPress = { saveSelfEntry('moj') }>                  
                
              <Text style={styles.textSave}>Save entry</Text>

            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.addItem}
              onPress = { addSelfItem(this.state.text,this.clearState) }>                  
                
              <Text style={styles.textAdd}>+</Text>

            </TouchableOpacity>

          </View>

          <DialogSaveEntry
            visible={this.state.dialogVisible}
            handleCancel={this.handleCancel}
            handleSave={this.handleSave}
            saveSelfEntry={ saveSelfEntry }/>

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
  buttonsBox: {
    flex:1,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  saveItem:{
    width:65,
    height:45,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',   
    backgroundColor: 'rgba(167,174,166,0.2)'
  },
  addItem:{
    width:45,
    height:45,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',   
    backgroundColor: 'rgba(167,174,166,0.2)'
  },
  textSave: {
    textAlign:'center',
    fontSize:18,
    color:'#fff'
  },
  textAdd:{    
    textAlign:'center',
    fontSize:40,
    color:'#fff'    
  }
});