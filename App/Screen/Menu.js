import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Home extends Component {
  constructor() {
    super();
  }

  onCakes = () => {
    this.props.navigation.navigate('Cakes');
  };
  onCupCakes = () => {
    this.props.navigation.navigate('CupCakes');
  };
  onIcingTypes = () => {
    this.props.navigation.navigate('IcingTypes');
  };

  render() {
    return (
      <>
        <View style={styles.container} />
        <TouchableOpacity onPress={this.onCakes} style={styles.button1}>
          <Text>Cakes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onCupCakes} style={styles.button2}>
          <Text>Cup Cakes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onIcingTypes} style={styles.button3}>
          <Text>Icing Types</Text>
        </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({
  button1: {
    width: '80%',
    borderWidth: 3,
    padding: 15,
    margin: 35,
    backgroundColor: '#F8F883',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 90,
  },
  button2: {
    width: '80%',
    borderWidth: 3,
    padding: 15,
    margin: 35,
    backgroundColor: '#5DD997',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  button3: {
    width: '80%',
    borderWidth: 3,
    padding: 15,
    margin: 35,
    backgroundColor: '#EEA5EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
