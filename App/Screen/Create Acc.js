import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class Home extends Component {
  onDelete = () => {
    this.props.navigation.navigate('Login');
  };
  onSignup = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <>
        <View style={styles.container} />
        <TextInput style={styles.TextInput} placeholder="Your name" />
        <TextInput style={styles.TextInput} placeholder="Your email" />
        <TextInput style={styles.TextInput} placeholder="Password" />
        <TouchableOpacity onPress={this.onDelete} style={styles.button2}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onSignup} style={styles.button3}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    width: '90%',
    borderWidth: 3,
    borderColor: '#000000',
    marginTop: 50,
    fontSize: 20,
    color: '#000000',
    marginLeft: 10,
    backgroundColor: '#EFD7EC',
  },
  button2: {
    width: '50%',
    borderWidth: 3,
    padding: 20,
    margin: 60,
    backgroundColor: '#AE3BA2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 40,
    marginBottom: 10,
  },
  button3: {
    width: '50%',
    borderWidth: 3,
    padding: 20,
    margin: 60,
    backgroundColor: '#AE3BA2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 80,
  },
});
