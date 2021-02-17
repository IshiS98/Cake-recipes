import React, {Component} from 'react';

import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Images from '../Configs/Images';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }
  toggleTheme() {
    this.setState({
      toggle: this.state.toggle ? false : true,
    });
  }

  onMenu = () => {
    this.props.navigation.navigate('Menu');
  };

  onSmartRecipesBook = () => {
    this.props.navigation.navigate('SmartRecipesBook');
  };

  onLogout = () => {
    ('Logout');
  };

  render() {
    const newLocal = {backgroundColor: this.state.toggle ? 'white' : 'black'};
    const newLocal_1 = {color: this.state.toggle ? 'black' : 'white'};
    return (
      <>
        <View style={[styles.container, newLocal]}>
          <TouchableOpacity onPress={() => this.toggleTheme()}>
            <Image source={Images.dark} style={[styles.icon, newLocal_1]} />
          </TouchableOpacity>

          <Text style={[styles.Text1, newLocal_1]}>Welcome</Text>
          <Text style={[styles.Text2, newLocal_1]}>to</Text>
          <Text style={[styles.Text, newLocal_1]}>Ishi Cake recipes Home</Text>
          <Image source={Images.Home} style={styles.Image} />
          <TouchableOpacity onPress={this.onMenu} style={styles.button2}>
            <Text>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onSmartRecipesBook}
            style={styles.button3}>
            <Text>Smart Recipes Book</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onLogout} style={styles.button4}>
            <Text>Log out</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  TextInput: {
    width: '50%',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#000000',
    fontSize: 20,
    color: '#000000',
  },
  search: {
    width: '20%',
    borderWidth: 3,
    borderColor: '#000000',
    fontSize: 20,
    color: '#000000',
    marginLeft: 250,
    marginBottom: 0,
  },
  Text1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 8,
    width: '80%',
    marginLeft: 140,
  },
  Text2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    width: '80%',
    marginLeft: 250,
  },
  Text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    width: '80%',
  },
  Image: {
    width: 240,
    height: 260,
  },
  button: {
    marginRight: 300,
  },
  button2: {
    width: '40%',
    borderWidth: 2,
    padding: 15,
    marginTop: 10,
    backgroundColor: '#F58E40',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  button3: {
    width: '50%',
    borderWidth: 2,
    padding: 15,
    marginTop: 10,
    backgroundColor: '#B57240',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  button4: {
    width: '30%',
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 310,
    marginTop: 10,
  },
});
