import React from 'react';
import { Text, StyleSheet ,View } from 'react-native';
import { Camera } from 'expo-camera';
import ScannerLine from '../scanner-line/';
import { LinearGradient } from 'expo-linear-gradient';


export default class ScannerCamera extends React.Component {


  render() {

    const { runingScan, type,f } = this.props;

    if( runingScan === true ) {   

      return (
       
        <Camera style={style.camera} type={type}>
         <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',                
              }}> 
          <ScannerLine/>
          
          <Text style={style.text}> Scanning </Text>
          </View>
        </Camera>
        
      );
    }

    return (       
      <Camera style={style.camera} type={type} >
       
      <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',                
              }}> 
      <Text style={style.text}> No scan </Text>
      
      </View>
      </Camera>

    );         
  }
}
const style = StyleSheet.create({
  camera: { flex: 1},
  text: {fontSize: 30,  color: 'red', top:100,position:'absolute',fontWeight:'bold' }

})