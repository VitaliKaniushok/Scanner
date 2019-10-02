import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import ScannerCamera from './scanner-camera.js';
import {ContextApi} from './context-api.js';
import * as FaceDetector from 'expo-face-detector';

class Scanner extends React.Component {

    static navigationOptions = {
        title: 'Scanner',
        headerStyle: {
          backgroundColor: '#000'
        },      
        tabBarVisible:false,  
        headerTintColor: '#0d7f06',
        headerTitleStyle: {
          fontWeight: 'bold'
        }       
    };    

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        const isPermission = status === 'granted';
        this.context.statusPermissions(isPermission);       
    };

    state = {
        isDetected:0
    }

    render() {

        const { hasCameraPermission, scaning, setCameraType, isScaning, cameraType, facesDetected } = this.context;

        if (hasCameraPermission === null) {

            return <View /> ;

        } else if (hasCameraPermission === false) {

            return <Text> No access to camera </Text>;

        } else {

            return (

                <View style = {{ flex: 1 }} >

                    <Camera style={style.camera} 
                        type={cameraType}
                        onFacesDetected={ ({faces}) => {

                                if( faces.length === this.state.isDetected ) return;

                                if( faces.length == 0 ) {

                                    facesDetected();
                                    return this.setState({
                                        isDetected: 0
                                    });
                                }

                                facesDetected();
                                this.setState({
                                    isDetected: faces.length
                                })                            
                            }                            
                        }

                        faceDetectorSettings={{
                            mode: FaceDetector.Constants.Mode.fast,
                            detectLandmarks: FaceDetector.Constants.Landmarks.none,
                            runClassifications: FaceDetector.Constants.Classifications.none,
                            minDetectionInterval: 100,
                            tracking: true }}
                             >                    

                        <ScannerCamera />

                    </Camera>	          		         

                    <View style = { style.buttonGroup }>	                    

	                    <TouchableOpacity 
	                    	style = { style.buttonChange }
	                    	onPress = { setCameraType }>
	                    		<Image
                                    style = { style.buttonImg }
                                    source={require('../sources/change_camera.png')}
                                  />
	                	</TouchableOpacity>

                        <TouchableOpacity 
                            style = { style.buttonScan }
                            onPress = { scaning }>
                                <Image
                                    style = { style.buttonImg }
                                    source={require('../sources/push.png')}
                                  /> 
                        </TouchableOpacity>

	                	<TouchableOpacity 
	                    	style = { style.buttonSettings }
	                    	onPress={() => {
                                if (isScaning) return;
                                this.props.navigation.navigate('Details') }} >
	                    		<Image
                                    style = { style.buttonImg }
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
    camera: { flex: 4},
    buttonGroup: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#000'
    },
    buttonImg:{
        height: 70,
        width: 70,
    },
    buttonChange: {
        height: 70,
        width: 70,       
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',       
    },    
    buttonSettings: {
        height: 70,
        width: 70,                
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'        
    },    
    buttonScan: {
        height: 70,
        width: 70,     
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',       
    }
});