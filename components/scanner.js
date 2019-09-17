import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import ScannerCamera from './scanner-camera.js';
import {ContextApi} from './context-api.js';

class Scanner extends React.Component {

    static navigationOptions = {
        title: 'Scanner',
        headerStyle: {
          backgroundColor: '#000',
        },      
        tabBarVisible:false,  
        headerTintColor: '#0d7f06',
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
	                    		<Image
                                    style = { style.buttonChangeImg }
                                    source={require('../sources/change_camera.png')}
                                  />
	                	</TouchableOpacity>

                        <TouchableOpacity 
                            style = { style.buttonScan }
                            onPress = { scaning }>
                                <Image
                                    style = { style.buttonScanImg }
                                    source={require('../sources/push.png')}
                                  /> 
                        </TouchableOpacity>

	                	 <TouchableOpacity 
	                    	style = { style.buttonSettings }
	                    	onPress={() => this.props.navigation.navigate('Details')}>
	                    		<Image
                                    style = { style.buttonSettingsImg }
                                    source={require('../sources/settings.png')}
                                  />
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
        padding: 15,
        backgroundColor: '#000'
    },
    buttonChange: {
        height: 70,
        width: 70,       
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',       
    },
    buttonChangeImg:{
        height: 70,
        width: 70,
    },
    buttonSettings: {
        height: 70,
        width: 70,                
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'        
    },
    buttonSettingsImg:{
        height: 70,
        width: 70,
    },
    buttonScan: {       
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',       
    },
    buttonScanImg: {
        width:70,
        height:70
    }
});