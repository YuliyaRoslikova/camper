// import { createSelector } from '@reduxjs/toolkit';
// import { selectNameFilter } from '../filters/selectors';

export const selectAdverts = state => state.adverts.items;

export const selectAdvertsError = state => state.adverts.error;

export const selectAdvertsLoading = state => state.adverts.loading;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) =>
//     contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
// );
