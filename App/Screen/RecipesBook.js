import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <>
        <View style={styles.container} />
        <TextInput placeholder="Create your recipes" style={styles.TextInput} />
        <TouchableOpacity onPress={this.onSave} style={styles.button}>
          <Text>Save</Text>
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
    backgroundColor: '#82D592',
  },
  TextInput: {
    width: '80%',
    borderWidth: 3,
    borderColor: '#000000',
    fontSize: 20,
    color: '#000000',
  },
  button: {
    width: '30%',
    borderWidth: 3,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
