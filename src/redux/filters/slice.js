import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {
    location: '',
    airConditioner: false,
    gearboxAutomatic: false,
    kitchen: false,
    tv: false,
    shower: false,
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
