import React, { Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/* components imports */
import AppBadge from '../Badges/AppBadge';

/* colors imports */
import colors from '../../config/colors';

const FoodCard = ({ name, image, price, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('FoodDetails', { id: id })}
    >
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.foodText}>{name}</Text>
        <AppBadge title="Recommended" />
        <Text style={styles.priceText}>$ {price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.incrementButton}> - </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.incrementButton}> + </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderTopColor: '#e2e2e2',
    borderTopWidth: 1.5,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  image: {
    width: 130,
    height: 100,
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  incrementButton: {
    backgroundColor: colors.buttonBackground,
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 4,
    margin: 2,
  },
  foodText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 4,
    paddingVertical: 5,
  },
  priceText: {
    fontSize: 15,
    fontWeight: '900',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
});

export default FoodCard;
