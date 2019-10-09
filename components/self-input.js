import React, { Component } from 'react';
import {ContextApi} from './context-api.js';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import DialogSaveEntry from './dialog-save-entry.js';

class SelfInput extends Component {  

  state = {

    text:'',
    dialogVisible: false
  }

  changeText = (text) => {

    if (text.match(/((^[^a-z]))|([^a-z0-9_])/i))  return;

    this.setState({text})
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

    const { addSelfItem, saveSelfEntry, appText } = this.context;

    return(
        
        <View style={styles.boxInput}>

          <TextInput
            style={ styles.input}
            maxLength={120}
            multiline = {true}
            placeholder={this.context.appText.placeHolder}
            onChangeText={changeText(text)}
            value={this.state.text}
          />

          <View 
            style={styles.buttonsBox} >
        
            <TouchableOpacity 
              style={styles.saveItem}
              onPress = { this.showDialog }>                  
                
              <Text style={styles.textSave}>{appText.buttonSave}</Text>

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
    textAlignVertical: 'top',
    backgroundColor:'#fff'
  },
  buttonsBox: {
    flex:1,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  saveItem:{
    flexWrap:'wrap',
    padding: 10,
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