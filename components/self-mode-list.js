import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import {ContextApi} from './context-api.js';
import TextSelfList from './text-self-list.js';
import SelfInput from './self-input.js';

class SelfModeList extends Component {

   renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            flex:1,
            marginTop:10,
            backgroundColor: "#000"            
          }}
        />
      );
    };

  render() {

    const { speechText, removeSelfItem } = this.context;   

    if ( speechText.length === 0) {

      return (

        <SelfInput/>
      )
    }

    return (

      <View>  

        <FlatList
          data={speechText}
          renderItem={ ({item, index}) => (

            <TextSelfList 
              text={item}
              id={index}
              removeSelfItem={removeSelfItem}/>

          )}
          keyExtractor={(item, index) => ''+index}
          ItemSeparatorComponent={this.renderSeparator}
        />

        <SelfInput/>

      </View>
    )
  }       
}
SelfModeList.contextType = ContextApi;

export default SelfModeList;