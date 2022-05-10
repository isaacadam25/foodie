import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import { useSelector } from 'react-redux';

/* Icon imports */
import { Entypo } from '@expo/vector-icons';

/* components imports */
import RestaurantCard from '../components/AppCards/RestaurantCard';
import RecommendedCard from '../components/AppCards/RecommendedCard';
import FoodCard from '../components/AppCards/FoodCard';

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

  const restaurantFoods = useSelector((state) => state.food.foods);
  console.log(restaurantFoods);

  const renderRecommendedCard = () => <RecommendedCard />;

  // const renderFoodCard = () => <FoodCard />;

  // const getFoods = async () => {
  //   const response = await getDeliveryRestaurantFoodItems({ slug });
  //   setlunchFoods(response.data.items.lunch);
  //   console.log(lunchFoods);
  // };

  useEffect(() => {
    // getFoods();
  }, []);

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
          <Collapse isExpanded>
            <CollapseHeader>
              <View style={styles.accordionHeader}>
                <Text style={styles.accordionText}>Breakfast</Text>
                <Entypo name="chevron-down" size={18} color="black" />
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ScrollView>
                <FoodCard
                  name="Wali Maharage"
                  image={require('../assets/food.jpg')}
                  price="4000"
                />
                <FoodCard
                  name="Wali Maharage"
                  image={require('../assets/food.jpg')}
                  price="4000"
                />
                <FoodCard
                  name="Wali Maharage"
                  image={require('../assets/food.jpg')}
                  price="4000"
                />
              </ScrollView>
            </CollapseBody>
          </Collapse>
          <Collapse isExpanded>
            <CollapseHeader>
              <View style={styles.accordionHeader}>
                <Text style={styles.accordionText}>Lunch</Text>
                <Entypo name="chevron-down" size={18} color="black" />
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ScrollView>
                <FoodCard
                  name="Wali Maharage"
                  image={require('../assets/food.jpg')}
                  price="4000"
                />
              </ScrollView>
            </CollapseBody>
          </Collapse>
          <Collapse isExpanded>
            <CollapseHeader>
              <View style={styles.accordionHeader}>
                <Text style={styles.accordionText}>Dinner</Text>
                <Entypo name="chevron-down" size={18} color="black" />
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ScrollView>
                <FoodCard
                  name="Wali Maharage"
                  image={require('../assets/food.jpg')}
                  price="4000"
                />
                <FoodCard
                  name="Wali Maharage"
                  image={require('../assets/food.jpg')}
                  price="4000"
                />
              </ScrollView>
            </CollapseBody>
          </Collapse>
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
