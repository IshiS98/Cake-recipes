import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../Configs/Images';

export default class Home extends Component {
  render() {
    return (
      <>
        <ScrollView>
          <View style={styles.container} />
          <Image source={Images.ChoclateIcing} style={styles.Image} />
          <Text style={styles.Text1}> Ingredients : </Text>
          <Text style={styles.Text2}> * Icing Sugar = 750g </Text>
          <Text style={styles.Text2}> * Butter = 500g </Text>
          <Text style={styles.Text2}> * Chocalate = 250g </Text>
          <Text style={styles.Text2}> * Vanila = 1 ts </Text>
          <Text style={styles.Text2}> * Milk = 5 tbls </Text>
          <Text style={styles.Text1}> How to Make : </Text>
          <Text style={styles.Text2}>
            1. Shift icing sugar well.Because there are may be small icing
            peices.
          </Text>
          <Text style={styles.Text2}>
            2. Take a bowl, add icing sugar, butter and milk little by little.
          </Text>
          <Text style={styles.Text2}>
            ## Do not beat using a beater when making icing. It cause the icing
            to melt.
          </Text>
          <Text style={styles.Text2}>
            3. take a spoon and stire icing sugar, butter, chocalate powder,
            milk and vanila well.
          </Text>
          <Text style={styles.Text2}>
            ## If the prepared icing mixture is too liquid, add more icing
            sugar.
          </Text>
          <Text style={styles.Text2}>
            ## If prepared icing mixture is too thick, add some more milk.
          </Text>
          <Text style={styles.Text2}>
            ##If you want icing in different colors, you can add colors as your
            desire.
          </Text>
          <Text style={styles.Text2}>
            4. Now your butter icing is ready. Using a pipine bag and nozzel you
            candecorate your cake with tasty butter icings.
          </Text>
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
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
});
