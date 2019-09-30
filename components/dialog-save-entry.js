import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Dialog from "react-native-dialog";

export default class DialogSaveEntry extends React.Component {

	state = {
		text:''
	}

	render () {

		const { handleCancel, saveSelfEntry, handleSave } = this.props;

		const handleS = () =>{
			saveSelfEntry(this.state.text);
			handleSave();
			
		}

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
	          	onChangeText={(text) => this.setState({text})}
            	value={this.state.text}/>
	          <Dialog.Button label="Cancel" onPress={handleCancel}/>
	          <Dialog.Button label="Save" onPress={handleS}/>
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
