import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../Screen/Home';
import Menu from '../Screen/Menu';

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'pink',
            },
            headerTitleStyle: {
              color: 'green',
              fontWeight: 'bold',
              fontSize: 24,
              fontFamily: 'roboto',
            },
            headerTintColor: '#FFFFFF',
          }}>
          <Stack.Screen
            name="Home"
            Component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen name="Menu" Component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
