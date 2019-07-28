import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import ScannerCamera from '../scanner-camera/';

export default class Scanner extends React.Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    runingScan:false,
    f:'false'
  };  

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  changeCamera =() =>{

   this.setState({
      type:
        this.state.type === Camera.Constants.Type.back
         	? Camera.Constants.Type.front
         	: Camera.Constants.Type.back
    });   
  };

  runScanner =() =>{

   this.setState({
      runingScan:
        this.state.runingScan === false ? true : false,
       f:
        this.state.f === 'false' ? 'true' : 'false'
    });   
  };

  render() {

    const { hasCameraPermission, type, runingScan, f } = this.state;

    if ( hasCameraPermission === null ) {

      	return <View />;

    } else if ( hasCameraPermission === false ) {

      	return <Text>No access to camera</Text>;

    } else {
      	return (
	        <View style={{ flex: 1 }}>

	          	<ScannerCamera 
	          		style={style.scannerCamera}
	          		type={type}
	          		runingScan={runingScan}
	          		f={f} />

	          		         

	          	<View  style={style.buttonGroup}>		         	

			         <TouchableOpacity
			            style={style.buttonScan}
			            onPress={this.runScanner}>
			              	<Text style={style.textScan}> Scan </Text>
			        </TouchableOpacity>

			        <TouchableOpacity
			          	style={style.buttonChange}
			          	onPress={this.changeCamera}>
			            	<Text style={style.textChange}> Change camera </Text>
			         </TouchableOpacity>

		        </View>

	        </View>
      	);
    }
  }
}
const style = StyleSheet.create({

	scannerCamera: {
		flex:1
	},
 	buttonGroup: {	                  
	    justifyContent: 'flex-start',	   
	    padding:15,
	    backgroundColor: '#000'
	  },
  	buttonChange: {
	  	height:70,
	    width:70,
	    borderRadius:10,
	    alignSelf: 'flex-start',                 
	    alignItems: 'center',
	    justifyContent:'center',
	    backgroundColor: '#f1f1f1'
	 },
  	buttonScan: {
	    height:70,
	    width:70,
	    borderRadius:10,
	    alignSelf: 'center',                 
	    alignItems: 'center',
	    justifyContent:'center',
	    backgroundColor: 'blue'
	 },
  	textChange: { fontSize: 18,  color: '#000' },
  	textScan: { fontSize: 18,  color: 'white' }
})