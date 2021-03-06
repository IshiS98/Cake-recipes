import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Hyperlink from 'react-native-hyperlink';

export default class Home extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Hyperlink linkDefault={true}>
            <Text style={styles.Text}>
              1. https://iambaker.net/cake-recipes/ to check if it
            </Text>
          </Hyperlink>
          <Hyperlink linkDefault={true}>
            <Text style={styles.Text1}>
              2. https://www.allrecipes.com/recipes/276/desserts/cakes/
            </Text>
          </Hyperlink>
          <Hyperlink linkDefault={true}>
            <Text style={styles.Text2}>
              3.https://www.milkmaid.lk/en/cakes?gclid=Cj0KCQiA962BBhCzARIsAIpWEL1U8mX55eMP0qW45F7rudAOMFbf2BudgvwEAymIVQHU0TJaDulQw4YaAjEiEALw_wcB
            </Text>
          </Hyperlink>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Text: {
    marginTop: 100,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    width: '50%',
    marginLeft: -20,
    marginBottom: 50,
    justifyContent: 'center',
  },
  Text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    width: '50%',
    marginLeft: 30,
    marginBottom: 50,
    justifyContent: 'center',
  },
  Text2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    width: '50%',
    marginLeft: 650,
    marginBottom: 40,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 310,
    marginTop: 10,
  },
});
