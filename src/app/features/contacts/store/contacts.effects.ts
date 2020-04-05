import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ContactsActionsTypes } from './contacts.actions';
import { StatesAndDistrictsSevice } from '../services/statesAndDistricts.service';
import { DistrictsResponse } from '../models/districtsResponse.interface';

@Injectable()
export class ContactsEffects {
  constructor(private actions$: Actions, private statesAndDistrictsSevice: StatesAndDistrictsSevice) { }

  @Effect() getStates$ = this.actions$.pipe(
      ofType(ContactsActionsTypes.FETCH_STATES),
      switchMap( _ => {
      return this.statesAndDistrictsSevice.loadStates().pipe(
        map((response: DistrictsResponse) => ({ type: ContactsActionsTypes.FETCH_STATE_FULFILLED, payload: response.provincias })),
        catchError((err: HttpErrorResponse) => of({ type: ContactsActionsTypes.FETCH_ERROR, payload: err })),
      );
    }),
  );

  @Effect() getDistrct$ = this.actions$.pipe(ofType(ContactsActionsTypes.FETCH_ADD_DISTRICT)).pipe(
    map((action: any) => action.payload),
    switchMap((payload: any) => {
      return this.statesAndDistrictsSevice.loadDistrict(payload).pipe(
        map(response => ({ type: ContactsActionsTypes.FETCH_DISTRICT_FULFILLED, payload: response })),
          catchError((err: HttpErrorResponse) => of({ type: ContactsActionsTypes.FETCH_ERROR, payload: err })),
        );
    }),
  );
}
