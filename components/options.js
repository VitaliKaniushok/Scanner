import React from 'react';
import { StyleSheet, ScrollView, View, Animated, Keyboard } from 'react-native';
import OptionsSelectMode from './options-select-mode.js';
import OptionsSelfMode from './options-self-mode.js';
import OptionsSpeechMode from './options-speech-mode.js';
import OptionsSelectLanguage from './options-select-language.js';
import {ContextApi} from './context-api.js';

class Options extends React.Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: navigation.getParam('titleContext', ''),
      headerStyle: {
          backgroundColor: '#000'
      },      
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      } 
    }
  }

  state = {
    topBarSetting:'',
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

  componentDidUpdate(prevProps,prevState) {

    if(this.context.appText.topBarSetting !== prevState.topBarSetting) {

      this.props.navigation.setParams({ titleContext: this.context.appText.topBarSetting })

      this.setState({
          topBarSetting:this.context.appText.topBarSetting
      });
      return 
    }
  }

	render() {  

    	return (

        <Animated.View style={[styles.animatedBox,{marginBottom:this.state.keyboardHeight}]}>

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

Options.contextType = ContextApi;

export default Options;

const styles = StyleSheet.create({

	optionsContainer: {
  	flex:1,
  	paddingTop: 3,
  	backgroundColor:'#000000'
	},
  animatedBox: {
    flex:1,
    justifyContent:'flex-start'        
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-end",
  }
});