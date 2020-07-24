import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import React from 'react';
import { globalStyles } from '../styles/globals';
import * as Yup from 'yup';
import FlatButton from '../shared/FlatButton';

const ReviewSchema = Yup.object({
	title  : Yup.string().required().min(4),
	body   : Yup.string().required().min(8),
	rating : Yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
		return parseInt(val) < 6 && parseInt(val) > 0;
	})
});

export default function ReviewForm({ addReview }) {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{ title: '', body: '', rating: '' }}
				validationSchema={ReviewSchema}
				onSubmit={(values, actions) => {
					actions.resetForm();
					addReview(values);
				}}
			>
				{(props) => (
					<View>
						<TextInput
							style={globalStyles.input}
							placeholder="Review title"
							onChangeText={props.handleChange('title')}
							value={props.values.title}
							onBlur={props.handleBlur('title')}
						/>
						<Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
						<TextInput
							style={globalStyles.input}
							multiline
							minHeight={100}
							placeholder="Review details"
							onChangeText={props.handleChange('body')}
							value={props.values.body}
							onBlur={props.handleBlur('body')}
						/>
						<Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
						<TextInput
							style={globalStyles.input}
							placeholder="Rating (1 - 5)"
							onChangeText={props.handleChange('rating')}
							value={props.values.rating}
							onBlur={props.handleBlur('rating')}
							keyboardType="numeric"
						/>
						<Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
						<FlatButton title="submit" onPress={props.handleSubmit} />
					</View>
				)}
			</Formik>
		</View>
	);
}
