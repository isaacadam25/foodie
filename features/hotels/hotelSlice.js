import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [
    {
      id: '1',
      title: 'Hotel One Title',
      subTitle: 'Hotel One Descriptions',
      rating: 4,
      delivery_time: 15,
      price_range: 3,
    },
    {
      id: '2',
      title: 'Hotel Two Title',
      subTitle: 'Hotel Two Descriptions',
      rating: 5,
      delivery_time: 10,
      price_range: 2,
    },
    {
      id: '3',
      title: 'Hotel Three Title',
      subTitle: 'Hotel Three Descriptions',
      rating: 3,
      delivery_time: 5,
      price_range: 4,
    },
    {
      id: '4',
      title: 'Hotel Four Title',
      subTitle: 'Hotel Four Descriptions',
      rating: 4,
      delivery_time: 15,
      price_range: 3,
    },
    {
      id: '5',
      title: 'Hotel Five Title',
      subTitle: 'Hotel Five Descriptions',
      rating: 5,
      delivery_time: 15,
      price_range: 3,
    },
    {
      id: '6',
      title: 'Hotel Six Title',
      subTitle: 'Hotel Six Descriptions',
      rating: 2,
      delivery_time: 7,
      price_range: 2,
    },
  ],
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    addHotel: (state) => {
      state.items;
    },
    removeHotel: (state) => {
      state.items;
    },
  },
});

export const { addHotel, removeHotel } = hotelSlice.actions;

export default hotelSlice.reducer;
