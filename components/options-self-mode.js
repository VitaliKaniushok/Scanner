import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import {ContextApi} from './context-api.js';
import  SelfModeList  from './self-mode-list.js';
import  OptionsTemplateComponent  from './options-template-component.js';

class OptionsSelfMode extends React.Component {

	render() {  

		const { selfMode, addSelfItem } = this.context;

    if (selfMode === false) {
        return null

    } else {

    	return (
          	
      	<OptionsTemplateComponent>

      		<Text style = { styles.textHeader }>Self mode</Text>

          <SelfModeList />

          <View style={styles.boxAddItem}>

        		<TouchableOpacity 
              style={styles.addItem}
              onPress = { addSelfItem }>              		
            		
    				  <Text style={styles.textAdd}>+</Text>

            </TouchableOpacity>

          </View>

      	</OptionsTemplateComponent>
    	);
    }  
  }
}
OptionsSelfMode.contextType = ContextApi;

export default OptionsSelfMode;

const styles = StyleSheet.create({
  boxAddItem: {    
    flex:1,
    height:70,
    marginTop:20,
    marginBottom:20,
    alignItems:'flex-end'    
  },
  addItem:{
    width:45,
    height:45,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgba(167,174,166,0.2)'
  },
  textAdd:{    
    textAlign:'center',
    fontSize:40,
    color:'#fff'    
  },
  textHeader: { 
    fontSize: 14,  
    color: '#fff',
    paddingBottom:15,
    textAlign:'center' 
  }
  	
});