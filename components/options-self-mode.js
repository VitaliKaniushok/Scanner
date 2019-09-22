import React, { Comment }from 'react';
import { Text, StyleSheet } from 'react-native';
import {ContextApi} from './context-api.js';
import  SelfModeList  from './self-mode-list.js';
import  OptionsTemplateComponent  from './options-template-component.js';

class OptionsSelfMode extends React.Component {

	render() {  

		const { selfMode } = this.context;

    if (selfMode === false) {
        return null

    } else {

    	return (
          	
      	<OptionsTemplateComponent>

      		<Text style = { styles.textHeader }>Self mode</Text>

          <SelfModeList />

      	</OptionsTemplateComponent>
    	);
    }  
  }
}
OptionsSelfMode.contextType = ContextApi;

export default OptionsSelfMode;

const styles = StyleSheet.create({
  
  textHeader: { 
    fontSize: 14,  
    color: '#fff',
    textAlign:'center' 
  }
  	
});