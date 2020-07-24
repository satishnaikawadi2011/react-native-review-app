import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import About from '../screens/about';

const screens = {
	About : {
		screen            : About,
		navigationOptions : ({ navigation }) => {
			return {
				headerTitle : () => <Header navigation={navigation} title="About GameZone" />
			};
		}
	}
};

const AboutStack = createStackNavigator(screens, {
	defaultNavigationOptions : {
		headerStyle : {
			backgroundColor : '#eee',
			height          : 80
		}
	}
});

export default AboutStack;
