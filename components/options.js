import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import OptionsSelectMode from './options-select-mode.js';
import OptionsSelfMode from './options-self-mode.js';
import OptionsSpeechMode from './options-speech-mode.js';
import OptionsSelectLanguage from './options-select-language.js';

export default class Options extends React.Component {

	static navigationOptions = {
        title: 'Setting scanner',
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      };

  	render() {  

      	return (

	        <ScrollView style={style.optionsContainer}>

		        <OptionsSelectMode />
            	
            <OptionsSelectLanguage />

            <OptionsSpeechMode />

            <OptionsSelfMode />          	
		      
	        </ScrollView>
      	);
    }  
}

const style = StyleSheet.create({

  	optionsContainer: {
	  	flex:1,
	  	padding: 3,
	  	backgroundColor:'#000000' 	
	}  	
});