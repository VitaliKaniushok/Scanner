import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default class LanguageList extends Component {

  render() {

    return (
      
        <FlatList
          data={[
            { key: 'English' },
            { key: 'Russian' },
            { key: 'Japones' },
            { key: 'French' },
            { key: 'Chine' },           
          ]}
          renderItem={ ({item}) => (
            
            <TouchableOpacity onPress = {()=>{}  }
                              style={styles.item}>
                      
              <Text style={styles.text}>{item.key}</Text>
             
            </TouchableOpacity>
          )}
        />
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  text:{
    color:'tomato'
  }
});