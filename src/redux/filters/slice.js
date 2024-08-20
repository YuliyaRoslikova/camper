import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilterLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { changeFilterLocation } = filtersSlice.actions;

export default filtersSlice.reducer;
