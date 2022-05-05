import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

/* colors imports */
import colors from '../../config/colors';

const RestaurantCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Restaurant')}
    >
      <Image
        style={styles.image}
        source={require('../../assets/food.jpg')}
        resizeMode="stretch"
      />
      <View>
        <Text style={styles.titleText}>{/* {item.name} */}Burger 53</Text>
        <Text style={styles.subtitleText}>
          {/* {item.description} */}Some Description Here
        </Text>
        <View style={styles.bottomText}>
          <Text style={styles.commonText}>
            <Ionicons name="star-outline" size={14} color="black" />
            {/* {item.rating} */} 4
          </Text>
          <Text style={styles.commonText}>
            <Ionicons name="time-outline" size={14} color="black" />
            {/* {item.delivery_time} */} 10 mins
          </Text>
          <Text style={styles.commonText}>
            <MaterialIcons name="money" size={14} color="black" />
            {/* {item.price_range} */} 5 FOR TWO
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: colors.background,
    padding: 8,
  },
  image: {
    width: 90,
    height: 80,
    borderRadius: 8,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  subtitleText: {
    fontSize: 13,
    fontWeight: '400',
    paddingLeft: 10,
    letterSpacing: 1.5,
    paddingTop: 2,
    paddingBottom: 10,
  },
  bottomText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  commonText: {
    paddingLeft: 10,
    fontSize: 12,
  },
});

export default RestaurantCard;
