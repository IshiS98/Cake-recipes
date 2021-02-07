/* eslint-disable prettier/prettier */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Menu from '../Screen/Menu';

const MainNavigator = createStackNavigator(
    {
        Menu: {
            screen: Menu,
        },
    },
    {
        initialRouteName: '',
},
);

const App = createAppContainer(MainNavigator);

export default App;
