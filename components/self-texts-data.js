import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import {ContextApi} from './context-api.js';
import SelfNameList from './self-name-list.js';
import * as FileSystem from 'expo-file-system';


class SelfTextsData extends React.Component {

	state = {
		dataNames: false,
		listNames:null
	}

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

    onSelect = (func) => {

    	return () => {

	    		this.setState({
	    		dataNames: false
	    	});

	    	func();
    	}    	
    }

    generateListName = async () => {

    	const dir =FileSystem.documentDirectory;

    	// await FileSystem.deleteAsync(dir+'dataSelf');

        const dataNames = await FileSystem.getInfoAsync(dir+'dataSelf/dataNames.json');        
        
        if ( !dataNames.exists ) {

        	return this.setState({
        		dataNames:'no-data'		
        	});
        }

        const jsonData = await FileSystem.readAsStringAsync(dir+'dataSelf/dataNames.json');
        
        const data = JSON.parse(jsonData);

        let listNames = Object.keys(data);

        if (!listNames.length) {

        	return this.setState({
        		dataNames:'no-data'		
        	});
        }

        this.setState({
    		dataNames: 'data',
    		listNames:listNames 		
    	});

    }

	componentDidMount() {

		this.generateListName();

    };

    componentDidUpdate() {

    	if (this.state.dataNames === false)
    		this.generateListName();
    }

	render () {

		const { dataNames, listNames } = this.state;

		const { removeSavedEntry, selectSavedEntry } = this.context; 

		if ( !dataNames ) {

			return <ActivityIndicator size="small" color="green" />

		} else if ( dataNames === 'no-data') {

			return <Text style = { styles.textNoData }>There are no saved entries</Text>

		}else {

			return (

		      <View>  

		      		<FlatList
			          data={listNames}
			          renderItem={ ({item, index}) => (

			            <SelfNameList 
			              text={item}
			              id={index}
			              selectSavedEntry = {this.onSelect(selectSavedEntry(item))}
			              removeSavedEntry = {this.onSelect(removeSavedEntry(item))}/>

			          )}
			          keyExtractor={(item, index) => ''+index}
			          ItemSeparatorComponent={this.renderSeparator}
			        />

		      </View>
		    )
		}		
	}
}

SelfTextsData.contextType = ContextApi;
export default SelfTextsData;

const styles = StyleSheet.create({
  
  textNoData: { 
    fontSize: 20,  
    color: '#000',
    textAlign:'center',
    paddingTop:5,
    paddingBottom:5,
    marginBottom:10,
    marginTop:10,    
    backgroundColor:'rgba(255,255,255,0.2)'    
  },
  nameEntry: {
  	flex:1,
    fontSize: 20,  
    color: '#000'
  }
  	
});