import React, {Component} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Images from '../Configs/Images';

export default class Home extends Component {
  constructor() {
    super();
  }
  onButterCake = () => {
    this.props.navigation.navigate('ButterCake');
  };
  onChocalateCake = () => {
    this.props.navigation.navigate('ChocalateCake');
  };
  onCoffeeCake = () => {
    this.props.navigation.navigate('CoffeeCake');
  };
  render() {
    return (
      <>
        <Image source={Images.Cake} style={styles.Image} />
        <TouchableOpacity onPress={this.onButterCake} style={styles.button}>
          <Text style={styles.Text}>1.Butter Cake</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onChocalateCake} style={styles.button}>
          <Text style={styles.Text}>2.Chocalate Cake</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onCoffeeCake} style={styles.button}>
          <Text style={styles.Text}>3.Coffee Cake</Text>
        </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: 220,
  },
  Text: {
    fontSize: 28.4,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    marginTop: 50,
    width: '80%',
    marginLeft: 20,
  },
});
