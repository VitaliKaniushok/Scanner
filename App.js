import React from 'react';
import { Camera } from 'expo-camera';
import { ContextApi } from './components/context-api.js';
import { AppNavContainer } from './components/app-nav-container.js';

// import Scanner from './components/scanner.js';

export default class TwoMillion extends React.Component {

	state = {
		isScaning: false,
		scan: 'false',
		cameraType: Camera.Constants.Type.back,
		hasCameraPermission: null,
		scaning: this.scaning(),
		statusPermissions: this.statusPermissions(),
		setCameraType:this.setCameraType()
	}

	scaning() {
		return () => {
			this.setState({
				isScaning: 
					this.state.isScaning === false ? true : false,
				scan: 
					this.state.scan === 'false' ? 'true' : 'false'
			});					
		}
	} 

	statusPermissions() {
		return (isPermission) => {
			this.setState({
				hasCameraPermission: isPermission				
			});
		}		
	}

	setCameraType() {
		return () => {
			this.setState({
				cameraType:
					this.state.cameraType === Camera.Constants.Type.back
	                  ? Camera.Constants.Type.front
	                  : Camera.Constants.Type.back
			});
		}
	}

	render() {  	
	    
    	return (
        
	        <ContextApi.Provider value={this.state}>
	        	<AppNavContainer />         
	        </ContextApi.Provider>
    	);
	}
}