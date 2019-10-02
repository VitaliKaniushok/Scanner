import React from 'react';
import { ContextApi } from './components/context-api.js';
import ScannerService from './components/services/scanner-service.js';
import { AppNavContainer } from './components/app-nav-container.js';

export default class TwoMillion extends React.Component {

	scannerService = new (ScannerService(this))();
	
	state = {			
		
		isScaning: false,
		scaning: this.scannerService.scaning(),
		scaningResult:this.scannerService.scaningResult(),

		hasCameraPermission: null,
		statusPermissions: this.scannerService.statusPermissions(),
		
		listVisible:false,
		hideList:this.scannerService.hideList(),

		isFaceDetected: false,
		facesDetected:this.scannerService.facesDetected(),

		selfMode:false,
		setMode:this.scannerService.setMode(),

		cameraType: this.scannerService.checkCameraBack(),		
		setCameraType:this.scannerService.setCameraType(),
		
		speech: {
			progressSpeak:false,			
			language:'en',
			langDefinition:"english",			
			pitch:0.1,
			rate:0.5
		},
		speechText:'truthScanner',
		setLanguage:this.scannerService.setLanguage(),				
		
		addSelfItem:this.scannerService.addSelfItem(),
		removeSelfItem:this.scannerService.removeSelfItem(),		
		saveSelfEntry:this.scannerService.saveSelfEntry(),
		removeSavedEntry:this.scannerService.removeSavedEntry(),

		selectedEnry:'',
		selectSavedEntry:this.scannerService.selectSavedEntry(),		
		
		incRate:this.scannerService.incRate(),
		decRate:this.scannerService.decRate(),
		incPitch:this.scannerService.incPitch(),
		decPitch:this.scannerService.decPitch(),

		appText: {
			scaning:'Scaning',
			noObject:'No object for scaning',
			readyScan:'Ready scaning'
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