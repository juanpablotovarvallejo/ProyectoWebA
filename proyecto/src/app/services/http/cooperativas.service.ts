import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CooperativaInterface } from '../interfaces/cooperativa.interface';



@Injectable({
    providedIn: 'any'
})
export class CooperativasCompraService {

    constructor(private http: HttpClient) { }

    getViajes(): Observable<CooperativaInterface[]> {
        const url = environment.urlAPI + "cooperativas/";
        return this.http
            .get(url)
            .pipe(
                map(
                    (respuesta: Object) => respuesta as CooperativaInterface[]
                )
            );
    }
}