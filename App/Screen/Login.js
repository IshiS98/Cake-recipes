import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      Email: '',
    };
  }

  onchangeEmail = (text) => {
    this.setState({Email: text});
  };
  onChangePassword = (text) => {
    console.log(text);
  };

  onCreateAccount = () => {
    this.props.navigation.navigate('CreateAccount');
  };
  onLogin = () => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.Email,
      )
    ) {
      this.props.navigation.navigate('Home');
    } else {
      Alert.alert('Error');
    }
  };

  render() {
    return (
      <>
        <LinearGradient
          colors={['#FFFFFF', '#4AE5EC', '#2AB2B8', '#065D61']}
          style={styles.container}>
          <Text style={styles.Text1}>Ishi Cake</Text>
          <Text style={styles.Text}>Recipes App</Text>
          <TextInput
            value={this.state.Email}
            onChangeText={this.onchangeEmail}
            style={styles.TextInput}
            placeholder="Enter your email"
          />
          <TextInput
            onchangeText={this.onChangePassword}
            style={styles.TextInput}
            placeholder="Enter your password"
          />
          <TouchableOpacity
            onPress={this.onCreateAccount}
            style={styles.button}>
            <Text>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onLogin} style={styles.button2}>
            <Text>Login</Text>
          </TouchableOpacity>
        </LinearGradient>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    width: '50%',
    marginLeft: 15,
  },
  Text: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
    width: '50%',
    marginLeft: 100,
  },
  TextInput: {
    width: '80%',
    marginTop: 40,
    borderWidth: 3,
    borderColor: '#000000',
    fontSize: 20,
    color: '#000000',
    marginLeft: 20,
  },
  button: {
    width: '60%',
    marginTop: 40,
    borderWidth: 3,
    borderColor: '#000000',
    color: '#000000',
    alignItems: 'center',
    padding: 10,
    fontWeight: 'bold',
    marginLeft: 60,
  },
  button2: {
    width: '50%',
    borderWidth: 3,
    padding: 20,
    margin: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 80,
  },
});
