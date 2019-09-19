import {Speech} from 'expo';
import { Camera } from 'expo-camera';
import textDefinition from './text-definition.js';

function ScannerService(obj) {

	return class {

		scaning() {
			return function() {

				if (obj.state.isScaning) return;

				obj.setState({
					isScaning: true				
				});					
			}
		} 

		statusPermissions() {
			return function(isPermission) {
				obj.setState({
					hasCameraPermission: isPermission				
				});
			}		
		}

		checkCameraBack() {
			const cameraBack = Camera.Constants.Type.back;
			return  cameraBack;
		}

		setCameraType() {
			return function() {

				if (obj.state.isScaning) return;

				obj.setState({
					cameraType:
						obj.state.cameraType === Camera.Constants.Type.back
		                  ? Camera.Constants.Type.front
		                  : Camera.Constants.Type.back
				});
			}
		}

		setMode() {
			return function(mode) {

				return function(){
						obj.setState({
						speechText: mode				
					});
				}				                
		    }
		}

		setLanguage() {
			return function(lang,definition) {

				return function(){
						obj.setState( ( state ) => {

							let newState = {

								...state,
								listVisible: false,
								speech:{
									...state.speech,
									language: lang,
									langDefinition:definition
								}
							}

							return newState;				      		
				      	}
			      	);
				}
			}
		}

		hideList() {
			return function() {				
				
				obj.setState({
					listVisible: !obj.state.listVisible									
				});				
				
			}
		}

		scaningResult() {
			
			return function() {

				let text = textDefinition(obj.state.speechText);

				const start = () => {
			      	obj.setState( state => ({

			      		speech: {...state.speech,
							progressSpeak: true }
						})
			      	);
			    };
			    const complete = () => {
			      	obj.state.speech.progressSpeak && 
			      	obj.setState( state => ({ 
			      		isScaning: false,
			      		speech: { 
							...state.speech,
							progressSpeak: false } 
			      		}),
			      	);
			    };

			    Speech.speak(text, {
			      	language: obj.state.speech.language,
			      	pitch: obj.state.speech.pitch,
			      	rate: obj.state.speech.rate,
			      	onStart: start,
			      	onDone: complete,
			      	onStopped: complete,
			      	onError: complete
			    });
			}
		}
	}	
}

export default ScannerService;