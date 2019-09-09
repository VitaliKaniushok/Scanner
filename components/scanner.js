import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import ScannerCamera from './scanner-camera.js';
import {ContextApi} from './context-api.js';

class Scanner extends React.Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        const isPermission = status === 'granted';
        this.context.statusPermissions(isPermission);
    };

    render() {

        const { hasCameraPermission, scaning, setCameraType } = this.context;

        if (hasCameraPermission === null) {

            return <View /> ;

        } else if (hasCameraPermission === false) {

            return <Text> No access to camera </Text>;

        } else {

            return (

                <View style = {{ flex: 1 }} >

                    <ScannerCamera  />	          		         

                    <View style = { style.buttonGroup }>	                    

	                    <TouchableOpacity 
	                    	style = { style.buttonChange }
	                    	onPress = { setCameraType }>
	                    		<Text style = { style.textChange }> Change </Text>
	                	</TouchableOpacity>

                        <TouchableOpacity 
                            style = { style.buttonScan }
                            onPress = { scaning }>
                                <Text style = { style.textScan } > Scan </Text> 
                        </TouchableOpacity>

	                	 <TouchableOpacity 
	                    	style = { style.buttonSettings }
	                    	onPress={() => this.props.navigation.navigate('Details')}>
	                    		<Text style = { style.textSettings }> Settings </Text>
	                	</TouchableOpacity>

	            	</View>

           		</View>
        	);
    	}
	}
}
Scanner.contextType = ContextApi;

export default Scanner;

const style = StyleSheet.create({

    buttonGroup: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 25,
        backgroundColor: '#000'
    },
    buttonChange: {
        height: 70,
        width: 70,
        borderRadius: 10,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1'
    },
    buttonSettings: {
        height: 70,
        width: 70,
        borderRadius: 10,        
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1'
    },
    buttonScan: {
        height: 70,
        width: 70,
        borderRadius: 10,
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    textChange: {
        fontSize: 14,
        color: '#000'
    },
    textScan: {
        fontSize: 18,
        color: 'white'
    },
    textSettings: {
        fontSize: 14,
        color: 'tomato'
    }
});