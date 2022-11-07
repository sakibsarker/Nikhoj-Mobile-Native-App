import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = () => {
  return (
    <ScrollView>
      <View style={styles.ViewAlien}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.imageStyle}
            source={require('../Images/salam.jpg')}
          />
          <Text>One Post Card</Text>
          <Ionicons name="location-sharp" color="#777777" size={25} />
        </View>
      </View>
      <View style={styles.ViewAlien}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.imageStyle}
            source={require('../Images/ben10.jpg')}
          />
          <Text>Two Post Card</Text>
        </View>
      </View>
      <View style={styles.ViewAlien}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.imageStyle}
            source={require('../Images/salam.jpg')}
          />
          <Text>Three Post Card</Text>
        </View>
      </View>
      <View style={styles.ViewAlien}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.imageStyle}
            source={require('../Images/post.png')}
          />
          <Text>Four Post Card</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Devicewidth = Math.round(Dimensions.get('window').width);
const Radius = 10;
const Boder = 30;
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: Devicewidth - Boder,
    height: 200,
    borderRadius: Radius,
    margin: 10,
  },
  imageStyle: {
    height: 120,
    width: Devicewidth - Boder,
    borderTopLeftRadius: Radius,
    borderTopRightRadius: Radius,
    opacity: 0.9,
  },
  ViewAlien: {
    alignItems: 'center',
  },
});

export default Card;
