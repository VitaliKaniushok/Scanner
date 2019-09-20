import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {ContextApi} from './context-api.js';
import  OptionsTemplateComponent  from './options-template-component.js';

class OptionsSelectMode extends React.Component {

  	render() {  

		const { setMode, speechText } = this.context;

		return (

	        <OptionsTemplateComponent>

	        	<Text style = { styles.text }>Select Mode</Text>

	        	<View style={styles.boxMode}>
	       
			        <TouchableOpacity 
	                	style = { [styles.buttonMode, speechText==='truthScanner'?styles.activeButton:styles.noActiveButton] }
	                	onPress = { setMode('truthScanner') }>
	                		<Text style = { styles.text } >Truth detector</Text> 
	                </TouchableOpacity>

	                <TouchableOpacity 
	                	style = { [styles.buttonMode, speechText==='alienScanner'?styles.activeButton:styles.noActiveButton] }
	                	onPress = { setMode('alienScanner') }>
	                		<Text style = { styles.text }>Aliens detector</Text>
	            	</TouchableOpacity>

	            	<TouchableOpacity 
	                	style = { [styles.buttonMode, (typeof speechText ==='object')?styles.activeButton:styles.noActiveButton] }
	                	onPress = { setMode([]) }>
	                		<Text style = { styles.text }>Self Mode</Text>
	            	</TouchableOpacity>

	            </View>

        	</OptionsTemplateComponent>
      	);
    }  
}
OptionsSelectMode.contextType = ContextApi;

export default OptionsSelectMode;

const styles = StyleSheet.create({
	boxMode:{
		flex:1,
		flexDirection:'row',		
		justifyContent:'space-around'
	},	
    buttonMode: {
        height: 70,
        width: 70,
        borderRadius: 10,        
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'        
    },
    activeButton:{
    	backgroundColor: 'green'
    },
    noActiveButton:{
    	backgroundColor: 'rgba(167,174,166,1)'
    },
  	text: { fontSize: 14,  color: '#fff', textAlign:'center',paddingBottom:15 }
  	
});