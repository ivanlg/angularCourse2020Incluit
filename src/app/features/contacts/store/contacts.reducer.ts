import { ContactsActions, ContactsActionsTypes } from './contacts.actions';
import { IState } from '../models/state.interface';

export interface IContactsState {
  data: any;
  states: IState[];
  districts: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
  contacts: any;
}

export const initialState: IContactsState = {
  data: null,
  districts: null,
  states: [],
  pending: null,
  error: null,
  isFetchCompleted: null,
  contacts: []
};

export function reducer(state = initialState, action: ContactsActions): IContactsState {
  switch (action.type) {
    case ContactsActionsTypes.FETCH_STATES:
      return {
        ...state,
        pending: true,
        isFetchCompleted: false,
      };

    case ContactsActionsTypes.FETCH_ADD_DISTRICT:
      return {
        ...state,
        pending: true,
        isFetchCompleted: false,
      };

    case ContactsActionsTypes.FETCH_DISTRICT_FULFILLED:
      return {
        ...state,
        pending: false,
        districts: action.payload,
        isFetchCompleted: true,
      };


    case ContactsActionsTypes.FETCH_STATE_FULFILLED:
      return {
        ...state,
        pending: false,
        states: action.payload,
        isFetchCompleted: true,
      };

    case ContactsActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: false,
        error: true,
        data: action.payload
      };

    case ContactsActionsTypes.CLEAR_DATA:
      return initialState;
    
    case ContactsActionsTypes.SAVE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };

    default:
      return state;
  }
}
