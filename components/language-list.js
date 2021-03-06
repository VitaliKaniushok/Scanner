import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {ContextApi} from './context-api.js';
import DATA from './services/images-definition.js';

class LanguageList extends Component {

  render() {

    const { setLanguage, listVisible } = this.context;

    if (listVisible === false) {
        return null

    } else {

       return (
      
        <FlatList
          data={DATA}
          renderItem={ ({item}) => (    
           
            <View style={style.listItem}>

              <TouchableOpacity style={style.item}
                  onPress = {setLanguage(item.code,item.key)}>
                
               <Image
                    style={style.styleImage}
                    source={item.image}
                  /> 

                <Text style={style.text}>{item.key}</Text>
               
              </TouchableOpacity>

            </View>

          )}
        />     
      )
    }   
  }
}
LanguageList.contextType = ContextApi;
export default LanguageList;

const style = StyleSheet.create({  
  listItem: {
    flex:1,    
    paddingTop: 20     
  },
  item: {    
    flexDirection:'row'
  },
  styleImage:{
    flex:1,
    height:40,
    borderRadius:7
  },
  text:{
    flex:5,
    textAlign:'center',
    fontSize:22,
    color:'#fff'
  }
});