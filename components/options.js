import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {ContextApi} from './context-api.js';

class Options extends React.Component {

	static navigationOptions = {
        title: 'Setting scanner',
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

  	render() {  

	const { setMode } = this.context;
    	
      	return (

	        <View style={style.optionsContainer}>	                 		         
		      
		        <Text style={style.text}> Options </Text>

		        <TouchableOpacity 
                	style = { style.buttonChange }
                	onPress = { setMode('truthScanner') }>
                		<Text style = { style.textScan } > Truth </Text> 
                </TouchableOpacity>

                <TouchableOpacity 
                	style = { style.buttonSettings }
                	onPress = { setMode('alienScanner') }>
                		<Text style = { style.textChange }> Alien </Text>
            	</TouchableOpacity>
		      
	        </View>
      	);
    }  
}
Options.contextType = ContextApi;

export default Options;

const style = StyleSheet.create({

  	optionsContainer: {
	  	flex:1,	                    
	    alignItems: 'center',
	    justifyContent:'center',
	    backgroundColor: '#f1f1f1'
	},  	
	buttonChange: {
        height: 70,
        width: 70,
        borderRadius: 10,
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    buttonSettings: {
        height: 70,
        width: 70,
        borderRadius: 10,        
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
  	textChange: { fontSize: 24,  color: '#000' }
  	
});