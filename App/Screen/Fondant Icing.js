import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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

  render() {
    const newLocal = {backgroundColor: this.state.toggle ? 'white' : 'black'};
    const newLocal_1 = {color: this.state.toggle ? 'black' : 'white'};
    return (
      <>
        <View style={[styles.container, newLocal]}>
          <TouchableOpacity onPress={() => this.toggleTheme()}>
            <Image source={Images.dark} style={[styles.icon, newLocal_1]} />
          </TouchableOpacity>
          <ScrollView>
            <View style={styles.container} />
            <Image source={Images.FondantIcing} style={styles.Image} />
            <Text style={[styles.Text1, newLocal_1]}> Ingredients : </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              {' '}
              * Icing Sugar = 800g{' '}
            </Text>
            <Text style={[styles.Text2, newLocal_1]}> * Jelatin = 1 tbls </Text>
            <Text style={[styles.Text2, newLocal_1]}> * Water = 4 tbls </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              {' '}
              * Glyserin = 1 tbls{' '}
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              {' '}
              * Glucose syrup = 1 tbbls{' '}
            </Text>
            <Text style={[styles.Text2, newLocal_1]}> * Vanila = 1 ts </Text>
            <Text style={[styles.Text2, newLocal_1]}> * Milk = 3 tbls </Text>
            <Text style={[styles.Text1, newLocal_1]}> How to make : </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              1. Shift icing sugar well.Because there are may be small icing
              peices.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              2. Take a bowl, add water, jelatin and double boil it.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              3. Add glyserin, glucose, vanila to the jelatin mixture and add
              icing sugar little by little.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              4. Mix them well using hand until it become a ball.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              ##If you want fondant icing in different colors, you can add
              colors desire.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              4. Now your fondant icing is ready. Using fondant icing mould,
              cutter or hand you can make fondant icing toppers or you can
              decorate your cake.
            </Text>
          </ScrollView>
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
    height: 250,
  },
  Text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
  Text2: {
    fontSize: 18,
    color: '#000000',
    marginTop: 2,
    padding: 6,
    marginLeft: 6,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 310,
    marginTop: 10,
  },
});
