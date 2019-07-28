import React from 'react';
import { Animated, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

class RunLine extends React.Component {

	state = {
	    posX: new Animated.Value(-300)	    
	}	

	componentDidMount() {

		const height = Dimensions.get('window').height;

	    Animated.loop(
			 Animated.sequence([
			    Animated.timing(this.state.posX, {
			      toValue: height,
			      duration: 1700,			      
			    }),
			    Animated.timing(this.state.posX, {
			      toValue: -300,
			      duration: 1700,			      
			    })
			]),
			{
			   iterations: 2
			}
		).start()
	 }

  	render() {

    	let { posX } = this.state;

	    return (

	      <Animated.View                 
	        style={{
	          ...this.props.style,
	          top: posX,         
	        }}
	      >
	        {this.props.children}
	      </Animated.View>
	    );
	}
}

export default class ScannerLine extends React.Component {		

	render () {
		
		const width= Dimensions.get('window').width;

		return (

			<RunLine  				
		        style={{      
		          	position:'absolute',
		        	width:width,		        	
		          	height: 300,
	        }} >

				<LinearGradient
			        colors={['transparent','rgba(210,255,82,1)', 'transparent']}
			        style={{      
			          	flex:1,
		        }} />

	        </RunLine>
		);
	}			
}