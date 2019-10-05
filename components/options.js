import React from 'react';
import { StyleSheet, ScrollView, View, Animated, Keyboard } from 'react-native';
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
  }

  state = {
    keyboardHeight: new Animated.Value(0)
  }

  keyboardDidShow = (event) => {
    
    Animated.timing(this.state.keyboardHeight, {
      duration: event.duration,
      toValue: event.endCoordinates.height
    }).start()
  }      

  keyboardDidHide = (event) => {
    Animated.timing(this.state.keyboardHeight, {
      duration: 500,
      toValue: 0
    }).start()
  }

  componentWillMount () {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

	render() {  

    	return (

        <Animated.View style={[styles.animatedBox,{paddingBottom:this.state.keyboardHeight}]}>

	        <ScrollView 
            style={styles.optionsContainer}
            ref={ ( ref ) => this.scrollView = ref} 
            keyboardShouldPersistTaps= 'always'>

  	        <OptionsSelectMode />
            	
            <OptionsSelectLanguage />

            <OptionsSpeechMode />

            <OptionsSelfMode />                      	
		      
	        </ScrollView>

        </Animated.View> 
    	)
  }  
}

const styles = StyleSheet.create({

	optionsContainer: {
  	flex:1,
  	paddingTop: 3,
  	backgroundColor:'#000000'
	},
  animatedBox: {
    flex:1,
    justifyContent:'flex-end'        
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-end",
  }
});