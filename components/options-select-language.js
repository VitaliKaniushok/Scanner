import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {ContextApi} from './context-api.js';
import  LanguageList  from './language-list.js';
import  OptionsTemplateComponent  from './options-template-component.js';
import DATA from './services/images-definition.js';

class OptionsSelectLanguage extends React.Component {

  	render() {  

		const { setLanguage, listVisible, hideList, speech } = this.context;

    const path = DATA.find((el)=>  el.code === speech.language)

      	return (
            	
        	<OptionsTemplateComponent>

        		<Text style = { style.textHeader }>Select Language</Text>

        		<TouchableOpacity 
              style={style.selectLanguage}
              onPress = { hideList }>
            		
            		<Image
                    style={style.styleImage}
                    source={path.image}
                  /> 

    				<Text style={style.textSpeach}>{speech.langDefinition}</Text>

            </TouchableOpacity>
        		
        		<LanguageList />

        	</OptionsTemplateComponent>
      	);
    }  
}
OptionsSelectLanguage.contextType = ContextApi;

export default OptionsSelectLanguage;

const style = StyleSheet.create({
  selectLanguage: {    
    flexDirection:'row',
    padding:10,
    borderRadius:20,
    alignItems:'center',
    backgroundColor: 'rgba(167,174,166,0.2)'
  },
  styleImage:{
    flex:1,
    height:40,
    borderRadius:7
  },
  textSpeach:{
    flex:5,
    textAlign:'center',
    fontSize:22,
    color:'#fff'
  },
  textHeader: { 
    fontSize: 14,  
    color: '#fff',
    paddingBottom:15,
    textAlign:'center' 
  }
  	
});