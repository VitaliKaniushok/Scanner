import React from 'react';
import { Text, StyleSheet ,View } from 'react-native';
import { Camera } from 'expo-camera';
import {ContextApi} from './context-api.js';
import ScannerLine from './scanner-line.js';

class ScannerCamera extends React.Component {

  render() {

    const { isScaning, cameraType } = this.context;   

    if( isScaning === true ) {   

      return (
       
        <Camera style={style.camera} type={cameraType}>

          <View style={style.cameraContent}> 

            <ScannerLine/>
          
            <Text style={style.textScaning}> Scanning </Text>

          </View>

        </Camera>
        
      );
    }

    return (
    
      <Camera style={style.camera} type={cameraType} >
       
        <View style={style.cameraContent}>

          <Text style={style.text}> Ready to scan </Text>
        
        </View>

      </Camera>

    );         
  }
}
ScannerCamera.contextType = ContextApi;

export default ScannerCamera;

const style = StyleSheet.create({
  camera: { flex: 4},
  cameraContent: { flex:1, backgroundColor:'transparent'},
  text: {fontSize: 30,  color: 'red', top:100,position:'absolute',fontWeight:'bold' },
  textScaning:{fontSize: 30,  color: 'red', top:50,position:'absolute',fontWeight:'bold',width:'100%',textAlign:'center'}
});