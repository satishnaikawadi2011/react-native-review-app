import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

function FlatButton({ title, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button     : {
		paddingHorizontal : 10,
		paddingVertical   : 14,
		borderRadius      : 8,
		backgroundColor   : '#f01d71'
	},
	buttonText : {
		color         : 'white',
		fontWeight    : 'bold',
		textTransform : 'uppercase',
		fontSize      : 16,
		textAlign     : 'center'
	}
});

export default FlatButton;
