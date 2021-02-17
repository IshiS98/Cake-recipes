import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
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
            <Image source={Images.CupCake} style={styles.Image} />
            <Text style={[styles.Text1, newLocal_1]}> Ingredients : </Text>
            <Text style={[styles.Text3, newLocal_1]}> for 24 cupcakes </Text>
            <Text style={[styles.Text2, newLocal_1]}> * Sugar = 250g </Text>
            <Text style={[styles.Text2, newLocal_1]}> * Flour = 250g </Text>
            <Text style={[styles.Text2, newLocal_1]}> * Butter = 250g </Text>
            <Text style={[styles.Text2, newLocal_1]}> * Eggs = 04 </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              {' '}
              * Backing powder = 1 1/2 ts{' '}
            </Text>
            <Text style={[styles.Text2, newLocal_1]}> * Vanila = 1 ts </Text>
            <Text style={[styles.Text2, newLocal_1]}> * Milk = 4 tbs </Text>
            <Text style={[styles.Text1, newLocal_1]}> How to Make : </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              1. Using beater or a spoon, beat the butter and sugar well until
              light yellow.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              2. Add eggs one by one and beat well.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              3. Add vanila and milk and mix well.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              4. Set the beater aside,take a spoon, add three times shifted
              flour with baking powder and stir well.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              {' '}
              ## Don't beat after adding flour.{' '}
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              5. Take cupcake tary with cupcake papers and pour the cake mixture
              into them as 2/3 of the cup.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              6. Put the cup cake tray in a pre-heated oven at 180'C for 10
              minutes and bake for 25 minutes.
            </Text>
            <Text style={[styles.Text2, newLocal_1]}>
              {' '}
              7. Now Your cup cakes are ready.{' '}
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
    marginBottom: 5,
    padding: 6,
    marginLeft: 6,
  },
  Text3: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 30,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 310,
    marginTop: 10,
  },
});
