import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';

/* components imports */
import ExploreCard from '../components/AppCards/ExploreCard';
import RestaurantCard from '../components/AppCards/RestaurantCard';
import ItemSepator from '../components/AppDivider/ItemSepator';

/* api data */
import { getDeliveryRestaurants } from '../api/restaurants/restaurantServices';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Explore',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Suprises',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Offer',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d2',
    title: 'Discount',
  },
  {
    id: '58694a0f-3da1-471f-bd96-140571e29d2',
    title: 'Discount',
  },
  {
    id: '58694a0f-3dkj1-471f-bd96-145571e29d2',
    title: 'Discount',
  },
];

const HomeScreen = ({ navigation }) => {
  const hotels = useSelector((state) => state.hotel.hotels);

  const [restaurants, setRestaurants] = useState([]);

  const renderFeaturedCard = ({ item }) => <ExploreCard title={item.title} />;
  const renderRestaurantCard = ({ item }) => <RestaurantCard item={item} />;

  const getRestaurants = async () => {
    const response = await getDeliveryRestaurants({
      latitude: '40.6976701',
      longitude: '-74.2598672',
    });
    setRestaurants(response.data);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Foodie
        </Text>
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Location
        </Text>
      </View>

      <View style={styles.featured}>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderFeaturedCard}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.searchArea}>
        <TouchableOpacity>
          <View style={styles.searchButton}></View>
        </TouchableOpacity>
        <View style={styles.options}>
          <Text>Option 1</Text>
          <Text>Option 2</Text>
        </View>
      </View>

      <View style={styles.mainArea}>
        <FlatList
          data={hotels}
          renderItem={renderRestaurantCard}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSepator}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  header: {
    flex: 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 4,
    backgroundColor: 'dodgerblue',
  },
  featured: {
    flex: 0.3,
    flexDirection: 'row',
    backgroundColor: '#eee',
    padding: 8,
  },
  searchArea: {
    flex: 0.1,
    backgroundColor: 'gold',
  },
  searchButton: {
    backgroundColor: '#777',
    height: 25,
    width: 340,
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'tomato',
  },
  mainArea: {
    flex: 0.5,
    backgroundColor: '#eee',
  },
});

export default HomeScreen;
