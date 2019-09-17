import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const DATA = [  
    { key: 'english', code:'en',image:require("../sources/en.jpg") },
    { key: 'русский', code:'ru',image:require("../sources/ru.jpg") },
    { key: 'ジャポネス', code:'ja',image:require("../sources/ja.jpg") },
    { key: 'française', code:'fr',image:require("../sources/fr.jpg") },
    { key: '折角', code:'zh',image:require("../sources/zh.jpg") }
];

export class LanguageList extends Component {

  render() {

    if (this.props.listVisible === false) {
        return null

    } else {

       return (
      
        <FlatList
          data={DATA}
          renderItem={ ({item}) => (    
           
            <View style={styles.listItem}>

              <TouchableOpacity style={styles.item}
                  onPress = {this.props.setLanguage(item.code)}>
                
               <Image
                    style={styles.styleImage}
                    source={item.image}
                  /> 

                <Text style={styles.text}>{item.key}</Text>
               
              </TouchableOpacity>

            </View>

          )}
        />     
      )
    }   
  }
}

const styles = StyleSheet.create({
  styleImage:{
    flex:1,
    height:40,
    borderRadius:7
  },
  item: {
    
    flexDirection:'row'
  },
  listItem: {
    display:'flex',    
    padding: 10     
  },
  text:{
    flex:5,
    textAlign:'center',
    fontSize:22,
    color:'#fff'
  }
});