import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  foods: [
    {
      breakfast: [
        {
          id: '1',
          title: 'Chai Chapati',
          price: 8000,
          isrecommended: false,
        },
        {
          id: '1',
          title: 'Soup Cassava',
          price: 12000,
          isrecommended: true,
        },
      ],
    },
    {
      lunch: [
        {
          id: '4',
          title: 'Ugali',
          price: 8000,
          isrecommended: true,
        },
      ],
    },
    {
      dinner: [
        {
          id: '4',
          title: 'Wali Nyama',
          price: 8000,
          isrecommended: true,
        },
      ],
    },
  ],
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFood: (state) => {
      state.foods;
    },
    removeFood: (state) => {
      state.foods;
    },
  },
});

export const { addFood, removeFood } = foodSlice.actions;

export default foodSlice.reducer;
