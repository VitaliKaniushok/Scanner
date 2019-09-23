import React from 'react';
import { Text, StyleSheet ,View } from 'react-native';
import {ContextApi} from './context-api.js';
import ScannerLine from './scanner-line.js';


class ScannerCamera extends React.Component {

  render() {

    const { isScaning, cameraText, isFaceDetected } = this.context;   

    if ( isScaning && isFaceDetected ) {   

      return (
       
        <View style={style.cameraContent}> 

          <ScannerLine/>
        
          <Text style={style.textScaning}> {cameraText.scaning} </Text>

        </View>       
      );

    } else if ( isFaceDetected ) {

      return (    
       
        <View style={style.cameraContent}>

          <Text style={style.text}> {cameraText.readyScan} </Text>
        
        </View>
      );

    } else {

      return (    
       
        <View style={style.cameraContent}>

          <Text style={style.text}> {cameraText.noObject} </Text>
        
        </View>
      );
    }             
  }
}
ScannerCamera.contextType = ContextApi;

export default ScannerCamera;

const style = StyleSheet.create({  
  cameraContent: { flex:1, backgroundColor:'transparent'},
  text: {fontSize: 30,  color: 'red', top:100,position:'absolute',fontWeight:'bold' },
  textScaning:{fontSize: 30,  color: 'red', top:50,position:'absolute',fontWeight:'bold',width:'100%',textAlign:'center'}
});