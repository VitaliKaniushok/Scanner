import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import {ContextApi} from './context-api.js';
import  {LanguageList}  from './language-list.js';

class Options extends React.Component {

	static navigationOptions = {
        title: 'Setting scanner',
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

  	render() {  

	const { setMode } = this.context;
    	
      	return (

	        <ScrollView style={style.optionsContainer}>
     	    
		       
		        <View style={style.box}>

		        	<View style={style.boxMode}>
		       
				        <TouchableOpacity 
		                	style = { style.buttonChange }
		                	onPress = { setMode('truthScanner') }>
		                		<Text style = { style.text } >Truth detector</Text> 
		                </TouchableOpacity>

		                <TouchableOpacity 
		                	style = { style.buttonSettings }
		                	onPress = { setMode('alienScanner') }>
		                		<Text style = { style.text }>Aliens detector</Text>
		            	</TouchableOpacity>

		            	<TouchableOpacity 
		                	style = { style.buttonSettings }>
		                		<Text style = { style.text }>Self Mode</Text>
		            	</TouchableOpacity>

		            	</View>

            	</View>


            	<View style={style.box}>

            		

            	</View>
		      
	        </ScrollView>
      	);
    }  
}
Options.contextType = ContextApi;

export default Options;

const style = StyleSheet.create({

  	optionsContainer: {
	  	flex:1,
	  	padding: 3,
	  	backgroundColor:'#000000' 	
	},
	box: {
		width:'100%',
		paddingTop:10,
		paddingBottom:20,
		marginBottom:15,
		borderRadius:20,
		backgroundColor:'#595b57'
	},
	boxMode:{
		flex:1,
		flexDirection:'row',
		justifyContent:'space-around'
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
  	text: { fontSize: 14,  color: '#fff', textAlign:'center' }
  	
});