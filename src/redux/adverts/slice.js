import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  isLastItemLoaded: false,
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
        action.payload.forEach(item => {
          if (!state.items.find(({ _id }) => _id === item._id)) {
            state.items.push(item);
          }
          state.isLastItemLoaded = action.payload.length < 4;
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchAdverts.rejected, state => {
        state.loading = false;
        state.error = true;
        state.isLastItemLoaded = false;
      }),
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } = advertsSlice.actions;

export default advertsSlice.reducer;
