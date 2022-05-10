import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/cart/cartSlice';
import hotelSlice from '../features/hotels/hotelSlice';
import foodSlice from '../features/foods/foodSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    hotel: hotelSlice,
    food: foodSlice,
  },
});
