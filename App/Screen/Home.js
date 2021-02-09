import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      TextInput: '',
    };
  }
  onChangeSearch = (text) => {
    console.log(text);
  };
  onTextInput = () => {
    this.props.navigation.navigate('Cake');
  };

  onMenu = () => {
    this.props.navigation.navigate('Menu');
  };
  onRecipesBook = () => {
    this.props.navigation.navigate('RecipesBook');
  };
  onLogout = () => {
    ('Logout');
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <TextInput
            value={this.state.Email}
            onChangeText={this.onchangeEmail}
            style={styles.TextInput}
            placeholder="Search"
          />
          <TouchableOpacity onPress={this.placeholder} style={styles.button1} />

          <Text style={styles.Text1}>Welcome</Text>
          <Text style={styles.Text2}>to</Text>
          <Text style={styles.Text}>Ishi Cake recipes Home</Text>
          <TouchableOpacity onPress={this.onMenu} style={styles.button2}>
            <Text>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onRecipesBook} style={styles.button3}>
            <Text>Recipes Book</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Logout} style={styles.button4}>
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
  TextInput: {
    width: '50%',
    marginTop: 20,
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
    marginTop: 10,
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
    marginBottom: 30,
    width: '80%',
  },
  Image: {
    width: 240,
    height: 200,
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
    width: '40%',
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
});
