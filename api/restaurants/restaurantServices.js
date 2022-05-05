import client from '../client';
import {
  GET_DELIVERY_RESTAURANTS_URL,
  GET_RESTAURANT_ITEMS_URL,
} from '../apiEndPoint';

/* function to get all restaurants */
export const getDeliveryRestaurants = ({ latitude, longitude }) => {
  const response = client.post(GET_DELIVERY_RESTAURANTS_URL, {
    latitude,
    longitude,
  });
  return response;
};

/* function to get restaurant food items */
export const getDeliveryRestaurantFoodItems = ({ slug }) => {
  const response = client.post(GET_RESTAURANT_ITEMS_URL + '/' + slug);
  return response;
};
