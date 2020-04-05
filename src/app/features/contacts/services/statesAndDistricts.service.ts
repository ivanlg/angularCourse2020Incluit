import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { DistrictsResponse } from '../models/districtsResponse.interface';


@Injectable()
export class StatesAndDistrictsSevice {
    constructor(
        private http: HttpClient
    ) { }

    loadStates(): Observable<DistrictsResponse> {
        return this.http.get<DistrictsResponse>('https://apis.datos.gob.ar/georef/api/provincias');
    }

    loadDistrict(idSate: number): Observable<DistrictsResponse> {
        return this.http.get<DistrictsResponse>(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${idSate}`);
    }
}