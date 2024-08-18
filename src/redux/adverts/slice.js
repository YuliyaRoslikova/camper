import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.items.push(...action.payload);
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchAdverts.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } = advertsSlice.actions;

export default advertsSlice.reducer;
