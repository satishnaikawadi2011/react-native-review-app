import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const screens = {
	Home          : {
		screen            : Home,
		navigationOptions : ({ navigation }) => {
			return {
				headerTitle : () => <Header navigation={navigation} title="GameZone" />
			};
		}
	},
	ReviewDetails : {
		screen : ReviewDetails
	}
};

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions : {
		headerStyle : {
			backgroundColor : '#ccc'
		}
	}
});

export default HomeStack;
