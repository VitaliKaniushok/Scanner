import React, { Component, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {ContextApi} from './context-api.js';

const InputItem = (props) => {

  

  const [value, onChangeText] = React.useState(props.text);

  const {applySelfList,idx} = props;

  return(

    <View style={styles.listItem}>

      <TextInput
        style={ styles.input}
        onChangeText={text => onChangeText(text)}
        onEndEditing={applySelfList(value,idx)}
        value={value}
      />

    </View>
  )  
}

class SelfModeList extends Component {

  render() {

    const { speechText, applySelfList } = this.context;

    let idx=0;

    const selfList = speechText.map((item) => {
      
      idx++;
      return (
        
        <InputItem 
          key={idx}
          idx={idx}
          text={item}
          applySelfList={applySelfList} />
      )
    });
  
    return (  
      <View>
        {selfList}
      </View>
    )
  }       
}

SelfModeList.contextType = ContextApi;
export default SelfModeList;

const styles = StyleSheet.create({  
  listItem: {
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
  }
});