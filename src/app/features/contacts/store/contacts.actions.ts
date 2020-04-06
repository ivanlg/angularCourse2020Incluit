import { Action } from '@ngrx/store';
import { IState } from '../models/state.interface';
import { Contact } from '../models/contact.model';

export enum ContactsActionsTypes {
  FETCH_STATES = '[CONTACTS:  FETCH_ADD_STATE]',
  FETCH_STATE_FULFILLED = '[CONTACTS:  FETCH_STATE_FULFILLED]',
  FETCH_ADD_DISTRICT = '[CONTACTS:  FETCH_ADD_DISTRICT]',
  FETCH_DISTRICT_FULFILLED = '[CONTACTS:  FETCH_DISTRICT_FULFILLED]',
  FETCH_ERROR = '[CONTACTS: ERROR]  Last',
  CLEAR_DATA = '[CONTACTS] CLEAR DATA',
  SAVE_CONTACT = '[CONTACTS] SAVE CONTACT'
}

export class FetchStates implements Action {
  readonly type = ContactsActionsTypes.FETCH_STATES;
  constructor() { }
}
export class FetchDistricts implements Action {
  readonly type = ContactsActionsTypes.FETCH_ADD_DISTRICT;
  constructor(public payload: any) { }
}

export class FetchDistrictFulfilled implements Action {
  readonly type = ContactsActionsTypes.FETCH_DISTRICT_FULFILLED;
  constructor(public payload: any) { }
}

export class FetchStateFulfilled implements Action {
  readonly type = ContactsActionsTypes.FETCH_STATE_FULFILLED;
  constructor(public payload: IState[]) { }
}

export class FetchError implements Action {
  readonly type = ContactsActionsTypes.FETCH_ERROR;
  constructor(public payload: any) { }
}

export class ClearData implements Action {
  readonly type = ContactsActionsTypes.CLEAR_DATA;
}

export class SaveContact implements Action {
  readonly type = ContactsActionsTypes.SAVE_CONTACT;
  constructor(public payload: Contact) { }
}

export type ContactsActions =
  FetchStates |
  FetchStateFulfilled |
  FetchDistricts |
  FetchDistrictFulfilled |
  FetchError |
  ClearData |
  SaveContact;
