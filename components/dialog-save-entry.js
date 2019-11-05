import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Dialog from "react-native-dialog";

export default class DialogSaveEntry extends React.Component {

	state = {
		text:''
	}

	handleS = (fn1,fn2) => {
		return function() {
			fn1();
			fn2();
		}				
	}
	changeText = (text) => {
	    
	    if ( text.match( /(^[\s])/g ) ) return;
	    this.setState({text})
	  }

	render () {

		const { handleCancel, saveSelfEntry, handleSave, labelSave, labelCancel } = this.props;

	    return (
	      <View>
	        <Dialog.Container 
	        	visible={this.props.visible}>
	          <Dialog.Title>Save entry</Dialog.Title>
	          <Dialog.Description>
	           	Enter name
	          </Dialog.Description>
	          <Dialog.Input 
	          	style={styles.input}
	          	onChangeText={this.changeText}
            	value={this.state.text}/>
	          <Dialog.Button label={labelCancel} onPress={handleCancel}/>
	          <Dialog.Button label={labelSave} onPress={this.handleS(saveSelfEntry(this.state.text),handleSave)}/>
	        </Dialog.Container>
	      </View>
	    )
	  }
}
const styles = StyleSheet.create({  
	dialog: {
		backgroundColor:'#f1f1f1'
	},
	input:{    
	    borderColor: 'gray',
	    borderWidth: 1,
	    fontSize:22,
	    color:'#000',
	    backgroundColor:'#fff'
	}
});