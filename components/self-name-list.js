import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const SelfNameList = (props)=> {

	let {id, text, selectSavedEntry, removeSavedEntry } = props;

  	++id;

  	return (

	    <View style={styles.boxRemoveItem}>

        <TouchableOpacity 
          style={styles.touchSelfText}
          onPress = { selectSavedEntry }>                  
              
            <Text style={styles.selfText}>{id}.  {text}</Text>

        </TouchableOpacity>

		    <TouchableOpacity 
		      style={styles.removeItem}
		      onPress = { removeSavedEntry }>                  
		          
		        <Text style={styles.textRemove}>-</Text>

	      </TouchableOpacity>

	    </View>
	  )
}
export default SelfNameList;

const styles = StyleSheet.create({
  boxRemoveItem: {    
    flex:1,
    minHeight:45,
    marginTop:10,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between' 
  },
  removeItem:{
    width:45,
    height:45,
    borderRadius:7,
    marginLeft:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgba(167,174,166,0.2)'
  },
  textRemove:{   
    textAlign:'center',
    fontSize:40,
    color:'#fff'    
  },
  touchSelfText:{
    flex:1
  },
  selfText: {
  	flex:1,
    fontSize: 20,  
    color: '#000'
  }
  	
});