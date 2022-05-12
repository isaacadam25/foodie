import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lunchFoods: [],
  dinnerFoods: [],
  drinks: [],
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setLunchFoods: (state, action) => {
      state.lunchFoods = action.payload;
    },
    setDinnerFoods: (state, action) => {
      state.dinnerFoods = action.payload;
    },
    setDrinks: (state, action) => {
      state.drinks = action.payload;
    },
  },
});

export const { setLunchFoods, setDinnerFoods, setDrinks } = foodSlice.actions;

export default foodSlice.reducer;
