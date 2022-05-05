import React from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

/* Icons imports */
import { Entypo } from '@expo/vector-icons';

const RecommendedCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/food.jpg')} />
      <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5 }}>
        <Entypo name="circle" size={16} color="orange" />
        <Text style={styles.cardTitle}>Wali Mchuzi</Text>
      </View>
      <Text style={styles.cardPrice}>$ 10</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingTop: 5,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity style={styles.incrementButton}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.decrementButton}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 8,
    width: 155,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  image: {
    width: 140,
    height: 90,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 4,
  },
  cardPrice: {
    fontSize: 13,
    paddingLeft: 4,
  },
  incrementButton: {
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 30,
    paddingVertical: 2,
    borderRadius: 4,
  },
  decrementButton: {
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 30,
    paddingVertical: 2,
    borderRadius: 4,
  },
});

export default RecommendedCard;
