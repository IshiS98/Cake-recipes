import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Images from '../Configs/Images';

export default class Home extends Component {
  constructor() {
    super();
  }
  onButterIcing = () => {
    this.props.navigation.navigate('ButterIcing');
  };
  onChocalateIcing = () => {
    this.props.navigation.navigate('ChocalateIcing');
  };
  onFondantIcing = () => {
    this.props.navigation.navigate('FondantIcing');
  };
  render() {
    return (
      <>
        <View style={styles.container} />
        <TouchableOpacity onPress={this.onButterIcing} style={styles.button}>
          <Text style={styles.Text}>1.Butter Icing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onChocalateIcing} style={styles.button}>
          <Text style={styles.Text2}>2.Chocalate Icing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onFondantIcing} style={styles.button}>
          <Text style={styles.Text3}>3.Fondant Icing</Text>
        </TouchableOpacity>
        <Image source={Images.Icing} style={styles.Image} />
      </>
    );
  }
}
const styles = StyleSheet.create({
  Text: {
    fontSize: 28.4,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
    marginTop: 60,
    width: '80%',
    marginLeft: 20,
  },
  Text2: {
    fontSize: 28.4,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
    marginTop: 20,
    width: '80%',
    marginLeft: 20,
  },
  Text3: {
    fontSize: 28.4,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 220,
    marginTop: 20,
    width: '80%',
    marginLeft: 20,
  },
  Image: {
    width: '100%',
    height: 200,
  },
});
