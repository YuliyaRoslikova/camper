import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectAdverts = state => state.adverts.items;

export const selectAdvertsError = state => state.adverts.error;

export const selectAdvertsLoading = state => state.adverts.loading;

export const selectIsLastItemLoaded = state => state.adverts.isLastItemLoaded;

export const selectFilteredAverts = createSelector(
  [selectAdverts, selectFilter],
  (adverts, filter) => {
    console.log(adverts);
    return adverts.filter(advert => {
      return (
        (advert.location.toLowerCase().includes(filter.location.toLowerCase()) &&
          filter.airConditioner &&
          advert.details.airConditioner) ||
        (!filter.airConditioner && !advert.details.airConditioner)
      );
    });
  }
);
