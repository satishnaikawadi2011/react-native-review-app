import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Header({ navigation, title }) {
	const openMenu = () => {
		navigation.openDrawer();
	};
	return (
		<View style={styles.header}>
			<MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu} />
			<View style={styles.headerTitle}>
				<Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header      : {
		width          : '100%',
		height         : '100%',
		flexDirection  : 'row',
		justifyContent : 'center',
		alignItems     : 'center'
	},
	headerText  : {
		fontWeight    : 'bold',
		fontSize      : 20,
		color         : '#333',
		letterSpacing : 1
	},
	icon        : {
		position : 'absolute',
		left     : 16
	},
	headerImage : {
		height           : 26,
		width            : 26,
		marginHorizontal : 10
	},
	headerTitle : {
		flexDirection : 'row'
	}
});

export default Header;
