import React, {Component} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
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

  onicon = () => {
    this.props.navigation.navigate('Menu');
  };
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
    const newLocal = {backgroundColor: this.state.toggle ? 'white' : 'black'};
    const newLocal_1 = {color: this.state.toggle ? 'black' : 'white'};
    return (
      <>
        <View style={[styles.container, newLocal]}>
          <TouchableOpacity onPress={() => this.toggleTheme()}>
            <Image source={Images.dark} style={[styles.icon, newLocal_1]} />
          </TouchableOpacity>
          <Image source={Images.CofeeCake} style={styles.Image} />
          <TouchableOpacity onPress={this.onButterCake}>
            <Text style={[styles.Text, newLocal_1]}>1.Butter Cake</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onChocalateCake}>
            <Text style={[styles.Text, newLocal_1]}>2.Chocalate Cake</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onCoffeeCake}>
            <Text style={[styles.Text, newLocal_1]}>3.Coffee Cake</Text>
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
  icon: {
    width: 30,
    height: 30,
    marginRight: 310,
    marginTop: 10,
  },
});
