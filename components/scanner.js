import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import ScannerCamera from './scanner-camera.js';
import {ContextApi} from './context-api.js';
import * as FaceDetector from 'expo-face-detector';

class Scanner extends React.Component {

    static navigationOptions = ({ navigation }) => {

        return {
            title: navigation.getParam('titleContext', ''),
            headerStyle: {
                backgroundColor: '#000'
            },      
            tabBarVisible:false,  
            headerTintColor: '#0d7f06',
            headerTitleStyle: {
                fontWeight: 'bold'
            }   
        }
    }

    state = {
        isDetected:0,
        topBarHome:''      
    }

    setTitle = () => this.props.navigation.setParams({ titleContext: this.context.appText.topBarHome });

    async componentDidMount() {
        this.setTitle();
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        const isPermission = status === 'granted';
        this.context.statusPermissions(isPermission);       
    };

    componentDidUpdate(prevProps,prevState) {

        if(this.context.appText.topBarHome !== prevState.topBarHome) {

          this.props.navigation.setParams({ titleContext: this.context.appText.topBarHome })

          this.setState({
              topBarHome:this.context.appText.topBarHome
          });
          return 
        }
      } 

    render() {

        const { hasCameraPermission, scaning, setCameraType, isScaning, cameraType, facesDetected, appText, speech } = this.context;
       
        if (hasCameraPermission === null) {

            return <View /> ;

        } else if (hasCameraPermission === false) {

            return <Text style={styles.noAccesText}> No access to camera </Text>;

        } else {

            return (

                <View style = {{ flex: 1 }} >

                    <Camera style={style.camera} 
                        type={cameraType}
                        onFacesDetected={ ({faces}) => {

                                const fl = faces.length;
                                const isDetected = this.state.isDetected;
                                const progressSpeak = speech.progressSpeak;

                                if (fl === isDetected) {

                                    return;

                                } else if ( (fl > 0) && (isDetected > 0)  ) {

                                    return this.setState({
                                        isDetected: fl
                                    });

                                } else if (fl > 0) {

                                    if (progressSpeak) return;

                                    facesDetected();
                                    return this.setState({
                                        isDetected: fl
                                    });

                                } else if (fl === 0) {

                                    if (progressSpeak) return;

                                    facesDetected();
                                    return this.setState({
                                        isDetected: 0
                                    });
                                }
                                                                                                                                             
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
                                    source={require('../assets/change_camera.png')}
                                  />
	                	</TouchableOpacity>

                        <TouchableOpacity 
                            style = { style.buttonScan }
                            onPress = { scaning }>
                                <Image
                                    style = { style.buttonImg }
                                    source={require('../assets/push.png')}
                                  /> 
                        </TouchableOpacity>

	                	<TouchableOpacity 
	                    	style = { style.buttonSettings }
	                    	onPress={() => {
                                if (isScaning) return;                               
                                this.props.navigation.navigate(
                                    'Details', 
                                    { titleContext:  this.context.appText.topBarSetting }) 
                            }} >
	                    		<Image
                                    style = { style.buttonImg }
                                    source={require('../assets/settings.png')}
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
    noAccesText:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        fontSize:25,
        color:'red'
    },
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