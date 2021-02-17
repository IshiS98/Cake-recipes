import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
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
    this.props.navigation.navigate('Home');
  };
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
    const newLocal = {backgroundColor: this.state.toggle ? 'white' : 'black'};
    const newLocal_1 = {color: this.state.toggle ? 'black' : 'white'};
    return (
      <>
        <View style={[styles.container, newLocal]}>
          <TouchableOpacity onPress={() => this.toggleTheme()}>
            <Image source={Images.dark} style={[styles.icon, newLocal_1]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onCakes} style={styles.button1}>
            <Text>Cakes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onCupCakes} style={styles.button2}>
            <Text>Cup Cakes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onIcingTypes} style={styles.button3}>
            <Text>Icing Types</Text>
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
  icon: {
    width: 30,
    height: 30,
    marginRight: 310,
    marginTop: 10,
  },
});
