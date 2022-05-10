import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

/* Component Imports */
import AlertScreen from './screens/AlertScreen';
import CartScreen from './screens/CartScreen';
import ExploreScreen from './screens/ExploreScreen';
import AccountScreen from './screens/AccountScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import FoodDetailsScreen from './screens/FoodDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './config/store';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const HomeNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}
  >
    <Stack.Screen
      name="Front"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Restaurant"
      component={RestaurantScreen}
      options={{
        title: null,
        headerBackVisible: true,
      }}
    />
    <Stack.Screen
      options={{
        title: null,
        headerBackVisible: true,
      }}
      name="FoodDetails"
      component={FoodDetailsScreen}
    />
  </Stack.Navigator>
);

const BottomNavigator = () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      activeBackgroundColor: 'dodgerblue',
      activeTintColor: 'tomato',
      tabBarStyle: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        right: 5,
        height: 50,
        borderRadius: 16,
      },
    }}
  >
    <BottomTabs.Screen
      name="Home"
      component={HomeNavigation}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: () => {
          navigation.navigate('Home');
        },
      })}
    />
    <BottomTabs.Screen
      name="Alerts"
      component={AlertScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="explore" size={size} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
        ),
        tabBarBadge: useSelector((state) => state.cart.total),
      }}
    />
    <BottomTabs.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <SimpleLineIcons name="user" size={size} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
}
