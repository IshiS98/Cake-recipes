import React, {Component} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../Configs/Images';

export default class Home extends Component {
  onicon = () => {
    this.props.navigation.navigate('Cakes');
  };
  render() {
    return (
      <>
        <ScrollView>
          <Image source={Images.ButterCake} style={styles.Image} />
          <Text style={styles.Text1}> Ingredients : </Text>
          <Text style={styles.Text3}> for 1kg cake </Text>
          <Text style={styles.Text2}> * Sugar = 250g </Text>
          <Text style={styles.Text2}> * Flour = 250g </Text>
          <Text style={styles.Text2}> * Butter = 250g </Text>
          <Text style={styles.Text2}> * Eggs = 04 </Text>
          <Text style={styles.Text2}> * Backing powder = 1 1/2 ts </Text>
          <Text style={styles.Text2}> * Vanila = 1 ts </Text>
          <Text style={styles.Text2}> * Milk = 4 tbs </Text>
          <Text style={styles.Text1}> How to make : </Text>
          <Text style={styles.Text2}>
            1. Using beater or a spoon, beat the butter and sugar well until
            light yellow.
          </Text>
          <Text style={styles.Text2}>
            2. Add eggs one by one and beat well.
          </Text>
          <Text style={styles.Text2}>3. Add vanila and milk and mix well.</Text>
          <Text style={styles.Text2}>
            4. Set the beater aside,take a spoon, add three times shifted flour
            with baking powder and stir well.
          </Text>
          <Text style={styles.Text2}> ## Don't beat after adding flour. </Text>
          <Text style={styles.Text2}>
            5. Take a suitable tary with a oil paper and pour the cake mixture
            into it.
          </Text>
          <Text style={styles.Text2}>
            6. Put the cake mixture tray in a pre-heated oven at 180'C for 10
            and bake for 40 minutes.
          </Text>
          <Text style={styles.Text2}> 7. Now Your cake is ready. </Text>
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
    marginLeft: 4,
  },
});
