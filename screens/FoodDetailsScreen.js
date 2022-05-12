import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../features/cart/cartSlice';

/* API imports */
import { getSingleRestaurantItem } from '../api/restaurants/restaurantServices';

/* components imports */
import RestaurantCard from '../components/AppCards/RestaurantCard';
import AppBadge from '../components/Badges/AppBadge';

/* color imports */
import colors from '../config/colors';

const FoodDetailsScreen = () => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart());
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart());
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.foodImage}
          source={require('../assets/food.jpg')}
        />
        <View style={styles.foodDetails}>
          <View style={{ flex: 1 }}>
            {/* <Entypo name="circle" size={16} color="orange" /> */}
            <Text style={styles.foodText}>Wali Mchuzi</Text>
            <Text style={styles.priceText}>$ 14.00</Text>
            <AppBadge style={styles.badge} title="Recommended" />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={handleRemoveFromCart}>
              <Text style={styles.decrementButton}> - </Text>
            </Pressable>
            <Pressable onPress={handleAddToCart}>
              <Text style={styles.incrementButton}> + </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  foodImage: {
    width: '100%',
    height: 250,
    borderRadius: 4,
  },
  badge: {
    width: 90,
    marginTop: 4,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  foodDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  foodText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 3,
  },
  priceText: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingTop: 8,
  },
  incrementButton: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: colors.buttonBackground,
    borderRadius: 4,
    marginLeft: 10,
  },
  decrementButton: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: colors.buttonBackground,
    borderRadius: 4,
  },
});

export default FoodDetailsScreen;
