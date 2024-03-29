import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/globals';
import Card from '../shared/card';

const ReviewDetails = ({ navigation }) => {
	const rating = navigation.getParam('rating');
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
				<Text>{navigation.getParam('body')}</Text>
				<View style={styles.rating}>
					<Text>GameZone rating : </Text>
					<Image source={images.ratings[rating]} />
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container : {
		padding : 24
	},
	rating    : {
		flexDirection  : 'row',
		justifyContent : 'center',
		paddingTop     : 16,
		marginTop      : 16,
		borderTopWidth : 1,
		borderTopColor : '#eee'
	}
});

export default ReviewDetails;
