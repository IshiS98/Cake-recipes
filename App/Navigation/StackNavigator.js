import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../Screen/Home';
import Menu from '../Screen/Menu';
import Cakes from '../Screen/Cakes';
import ButterCake from '../Screen/Butter cake';
import ChocalateCake from '../Screen/Chocalate Cake';
import CoffeeCake from '../Screen/Coffee cake';
import CupCakes from '../Screen/Cup Cakes';
import IcingTypes from '../Screen/IcingTypes';
import ButterIcing from '../Screen/Butter Icing';
import ChocalateIcing from '../Screen/Chocalate Icing';
import FondantIcing from '../Screen/Fondant Icing';
import RecipesBook from '../Screen/RecipesBook';
import CreateAccount from '../Screen/Create Acc';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },

    Menu: {
      screen: Menu,
    },

    Cakes: {
      screen: Cakes,
    },

    ButterCake: {
      screen: ButterCake,
    },

    ChocalateCake: {
      screen: ChocalateCake,
    },

    CoffeeCake: {
      screen: CoffeeCake,
    },

    CupCakes: {
      screen: CupCakes,
    },

    IcingTypes: {
      screen: IcingTypes,
    },

    ChocalateIcing: {
      screen: ChocalateIcing,
    },

    ButterIcing: {
      screen: ButterIcing,
    },

    FondantIcing: {
      screen: FondantIcing,
    },

    RecipesBook: {
      screen: RecipesBook,
    },

    CreateAccount: {
      screen: CreateAccount,
    },
  },

  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2E802B',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
