import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectAdverts = state => state.adverts.items;

export const selectAdvertsError = state => state.adverts.error;

export const selectAdvertsLoading = state => state.adverts.loading;

export const selectIsLastItemLoaded = state => state.adverts.isLastItemLoaded;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilter],
  (adverts, filter) => {
    const filteredAdverts = adverts.filter(advert => {
      const location = advert.location.toLowerCase().includes(filter.location.toLowerCase());

      const airConditioner = filter.airConditioner
        ? filter.airConditioner && advert.details.airConditioner
        : true;

      const gearboxAutomatic = filter.gearboxAutomatic ? advert.transmission === 'automatic' : true;

      const kitchen = filter.kitchen ? filter.kitchen && advert.details.kitchen : true;

      const tv = filter.tv ? filter.tv && advert.details.TV : true;

      const shower = filter.shower ? filter.shower && advert.details.shower : true;

      const vehicleType = filter.vehicleType ? filter.vehicleType === advert.form : true;

      return (
        location && airConditioner && gearboxAutomatic && kitchen && tv && shower && vehicleType
      );
    });
    return filteredAdverts;
  }
);
