import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Hyperlink from 'react-native-hyperlink';

export default class Home extends Component {
  render() {
    return (
      <>
        <View style={styles.container} />
        <Hyperlink linkDefault={true}>
          <Text style={styles.Text}>
            1. https://iambaker.net/cake-recipes/ to check if it
          </Text>
        </Hyperlink>
        <Hyperlink linkDefault={true}>
          <Text style={styles.Text}>
            2.https://www.milkmaid.lk/en/cakes?gclid=Cj0KCQiA962BBhCzARIsAIpWEL1U8mX55eMP0qW45F7rudAOMFbf2BudgvwEAymIVQHU0TJaDulQw4YaAjEiEALw_wcB
          </Text>
        </Hyperlink>
        <Hyperlink linkDefault={true}>
          <Text style={styles.Text}>
            3. https://www.allrecipes.com/recipes/276/desserts/cakes/
          </Text>
        </Hyperlink>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    width: '50%',
    marginLeft: 8,
    marginVertical: 80,
  },
});
