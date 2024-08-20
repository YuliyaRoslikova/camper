import { createSelector } from '@reduxjs/toolkit';
import { selectFilterLocation } from '../filters/selectors';

export const selectAdverts = state => state.adverts.items;

export const selectAdvertsError = state => state.adverts.error;

export const selectAdvertsLoading = state => state.adverts.loading;

export const selectIsLastItemLoaded = state => state.adverts.isLastItemLoaded;

export const selectFilteredAverts = createSelector(
  [selectAdverts, selectFilterLocation],
  (adverts, filterLocation) =>
    adverts.filter(advert => advert.location.toLowerCase().includes(filterLocation.toLowerCase()))
);
