import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	Modal,
	Keyboard,
	TouchableWithoutFeedback,
	TouchableOpacity
} from 'react-native';
import { globalStyles } from '../styles/globals';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

const Home = ({ navigation }) => {
	const [
		isModalOpen,
		setIsModalOpen
	] = useState(false);
	const [
		reviews,
		setReviews
	] = useState([
		{ title: 'My Post', rating: 5, body: 'loren epsum', key: '1' },
		{ title: 'Cool vacation', rating: 3, body: 'loren epsum', key: '2' },
		{ title: 'My College', rating: 4, body: 'loren epsum', key: '3' }
	]);

	const addReview = (review) => {
		review.key = Math.random().toString();
		setReviews((currentReviews) => {
			return [
				review,
				...currentReviews
			];
		});
		setIsModalOpen(false);
	};

	return (
		<View style={globalStyles.container}>
			<Modal visible={isModalOpen} animationType="slide">
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<View style={styles.modalContent}>
						<MaterialIcons
							style={{ ...styles.modalClose, ...styles.modalToggle }}
							name="close"
							size={24}
							onPress={() => setIsModalOpen(false)}
						/>
						<ReviewForm addReview={addReview} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>
			<MaterialIcons style={styles.modalToggle} name="add" size={24} onPress={() => setIsModalOpen(true)} />
			<FlatList
				keyExtractor={(item) => item.key}
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
						<Card>
							<Text style={globalStyles.titleText}>{item.title}</Text>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	modalToggle  : {
		marginBottom : 10,
		borderWidth  : 1,
		borderColor  : '#f2f2f2',
		padding      : 10,
		borderRadius : 10,
		alignSelf    : 'center'
	},
	modalClose   : {
		marginTop    : 20,
		marginBottom : 0
	},
	modalContent : {
		flex : 1
	}
});

export default Home;
