import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContacts from './contacts.reducer';

export const selectState = createFeatureSelector<fromContacts.IContactsState>('contacts');
export const selectDataState = createSelector(selectState, (state: fromContacts.IContactsState) => {
  if (state.isFetchCompleted) {
    return state.states;
  }
});

export const selectDistrict = createFeatureSelector<fromContacts.IContactsState>('contacts');
export const selectDataDistrict = createSelector(selectDistrict, (state: fromContacts.IContactsState) => {
  if (state.isFetchCompleted) {
    return state.districts;
  }
});

export const selectContacts = createFeatureSelector<fromContacts.IContactsState>('contacts');
export const selectDataContacts = createSelector(selectDistrict, (state: fromContacts.IContactsState) => {
    return state.contacts;
});
