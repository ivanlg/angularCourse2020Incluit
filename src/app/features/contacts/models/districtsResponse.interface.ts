import { IState } from './state.interface';

export interface DistrictsResponse {
    cantidad:   number;
    inicio:     number;
    provincias: IState[];
    total:      number;
}
