import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistorialCompraInterface } from '../interfaces/historial-compra.interface';
import { ViajeInterface } from '../interfaces/viaje.interface';



@Injectable({
    providedIn: 'any'
})
export class ViajeService {

    constructor(private http: HttpClient) { }

    getViajes(): Observable<ViajeInterface[]> {
        const url = environment.urlAPI + "viajes/";
        return this.http
            .get(url)
            .pipe(
                map(
                    (respuesta: Object) => respuesta as ViajeInterface[]
                )
            );
    }
    getViaje(id: number): Observable<ViajeInterface> {
        const url = environment.urlAPI + `viajes/${id}/`;
        return this.http
            .get(url)
            .pipe(
                map(
                    (respuesta: Object) => respuesta as ViajeInterface
                )
            );
    }
}