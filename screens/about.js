import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
	return (
		<View style={styles.container}>
			<Text>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, quas recusandae repellat velit veniam
				praesentium, aspernatur, culpa aperiam fugit veritatis optio accusantium. Fuga ab doloremque, nemo
				cumque cupiditate excepturi laborum explicabo nesciunt nobis? Qui, totam. Fugiat ex voluptas perferendis
				voluptatum nihil tenetur distinctio? Quod ratione aperiam praesentium veniam odio omnis?
			</Text>
			<Text>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium illum ipsum explicabo veniam dicta
				molestias esse voluptatem rerum, ex dolorum.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container : {
		padding : 24
	}
});

export default About;
