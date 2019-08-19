import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Options extends React.Component {

  	render() {  
    	
      	return (

	        <View style={style.optionsContainer}>	                 		         
		      
		        <Text style={style.text}> Options </Text>
		      
	        </View>
      	);
    }  
}

const style = StyleSheet.create({

  	optionsContainer: {
	  	flex:1,	                    
	    alignItems: 'center',
	    justifyContent:'center',
	    backgroundColor: '#f1f1f1'
	},  	
  	textChange: { fontSize: 24,  color: '#000' }
  	
});