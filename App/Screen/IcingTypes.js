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
    const newLocal = {backgroundColor: this.state.toggle ? 'white' : 'black'};
    const newLocal_1 = {color: this.state.toggle ? 'black' : 'white'};
    return (
      <>
        <View style={[styles.container, newLocal]}>
          <TouchableOpacity onPress={() => this.toggleTheme()}>
            <Image source={Images.dark} style={[styles.icon, newLocal_1]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onButterIcing} style={styles.button}>
            <Text style={[styles.Text, newLocal_1]}>1.Butter Icing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onChocalateIcing}
            style={styles.button}>
            <Text style={[styles.Text2, newLocal_1]}>2.Chocalate Icing</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onFondantIcing} style={styles.button}>
            <Text style={[styles.Text3, newLocal_1]}>3.Fondant Icing</Text>
          </TouchableOpacity>
          <Image source={Images.Icing} style={styles.Image} />
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
    marginBottom: 130,
    marginTop: 20,
    width: '80%',
    marginLeft: 20,
  },
  Image: {
    width: '100%',
    height: 200,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 310,
    marginTop: 10,
  },
});
