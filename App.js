import React from 'react';
import { ContextApi } from './components/context-api.js';
import ScannerService from './components/services/scanner-service.js';
import { AppNavContainer } from './components/app-nav-container.js';
import { Camera } from 'expo-camera';

export default class TwoMillion extends React.Component {

	scannerService = new (ScannerService(this))();
	
	state = {
		isScaning: false,		
		cameraType: this.scannerService.checkCameraBack(),
		hasCameraPermission: null,
		scaning: this.scannerService.scaning(),
		statusPermissions: this.scannerService.statusPermissions(),
		setCameraType:this.scannerService.setCameraType(),
		scaningResult:this.scannerService.scaningResult(),
		setMode:this.scannerService.setMode(),
		listVisible:false,
		hideList:this.scannerService.hideList(),
		setLanguage:this.scannerService.setLanguage(),
		speechText:'truthScanner',
		speech: {
			progressSpeak:false,			
			language:'en',
			langDefinition:"english",			
			pitch:0.1,
			rate:0.5
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