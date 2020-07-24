import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import AboutStack from '../routes/aboutStack';
import HomeStack from '../routes/homeStack';

const rootDrawerNavigator = createDrawerNavigator({
	Home  : {
		screen : HomeStack
	},
	About : {
		screen : AboutStack
	}
});

export default createAppContainer(rootDrawerNavigator);
