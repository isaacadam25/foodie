import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

/* Redux */
import {
  setLunchFoods,
  setDinnerFoods,
  setDrinks,
} from '../features/foods/foodSlice';

/* components imports */
import Accordion from '../components/Accordion/Accordion';
import RestaurantCard from '../components/AppCards/RestaurantCard';
import RecommendedCard from '../components/AppCards/RecommendedCard';

/* api data */
import { getDeliveryRestaurantFoodItems } from '../api/restaurants/restaurantServices';

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
];

const RestaurantScreen = ({ route }) => {
  // const [lunchFoods, setlunchFoods] = useState([]);
  const { item } = route.params;

  const dispatch = useDispatch();

  const lunchFoods = useSelector((state) => state.food.lunchFoods);
  const dinnerFoods = useSelector((state) => state.food.dinnerFoods);
  const drinks = useSelector((state) => state.food.drinks);

  const getFoods = async () => {
    const response = await getDeliveryRestaurantFoodItems({
      slug: 'foodie-o2ubvpxhqjvzcab',
    });
    dispatch(setLunchFoods(response.data.items.lunch));
    dispatch(setDinnerFoods(response.data.items.dinner));
    dispatch(setDrinks(response.data.items.drinks));
  };

  useEffect(() => {
    getFoods();
  }, []);

  const renderRecommendedCard = () => <RecommendedCard />;
  const renderAccordion = (items) =>
    items && items.map((item, index) => <Accordion item={item} key={index} />);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RestaurantCard item={item} />
        <View style={styles.recommendationContainer}>
          <Text style={styles.recommendationText}>Recommended</Text>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderRecommendedCard}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ flex: 0.4 }}>
          {renderAccordion(drinks)}
          {renderAccordion(lunchFoods)}
          {renderAccordion(dinnerFoods)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recommendationContainer: {
    flex: 0.35,
    paddingTop: 2,
  },
  recommendationText: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingLeft: 6,
    paddingVertical: 4,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  accordionText: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default RestaurantScreen;
