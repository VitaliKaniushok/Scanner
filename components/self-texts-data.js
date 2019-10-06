import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import {ContextApi} from './context-api.js';
import SelfNameList from './self-name-list.js';
import * as FileSystem from 'expo-file-system';


class SelfTextsData extends React.Component {

	state = {
		dataNames: false,
		listNames:null,
        selectedEnry:''
	}

    onHandleClick = (func) => {

    	return () => {

    		this.setState({
    		  dataNames: false
        	});
            
    	    func();
    	}    	
    }

    generateListName = async () => {

    	const dir =FileSystem.documentDirectory;

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

    componentDidUpdate(prevProps,prevState) {

        if(this.context.selectedEnry !== prevState.selectedEnry) {

            this.setState({
                selectedEnry:this.context.selectedEnry
            });
            return this.generateListName();
        }

    	if (this.state.dataNames === false)
    		return this.generateListName();
    }

	render () {

		const { dataNames, listNames, selectedEnry  } = this.state;

		const { removeSavedEntry, selectSavedEntry } = this.context;

		if ( !dataNames ) {

			return (

                <View style={styles.activityIndicWrap}>

                    <ActivityIndicator size="large" color="green" />

                </View>

                ) 

		} else if ( dataNames === 'no-data') {

			return <Text style = { styles.textNoData }>There are no saved entries</Text>

		}else {

			return (

		      <View style={styles.boxTextsData}>  

		      		<FlatList
			          data={listNames}
			          renderItem={ ({item, index}) => (

			            <SelfNameList 
			              text={item}
			              id={index}
                          selectedEnry={selectedEnry}
			              selectSavedEntry = {this.onHandleClick(selectSavedEntry(item))}
			              removeSavedEntry = {this.onHandleClick(removeSavedEntry(item))}/>

			          )}
			          keyExtractor={(item, index) => ''+index}			          
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
        marginBottom:20,
        marginTop:10,    
        backgroundColor:'rgba(255,255,255,0.2)'    
    },
    boxTextsData: {
      	marginBottom:20,
        paddingBottom:30,
        borderBottomColor: '#000',
        borderBottomWidth: 2
    },
    activityIndicWrap:{
        flex:1,
        height:100
    }  	
});