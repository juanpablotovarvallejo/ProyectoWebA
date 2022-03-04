import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {ViajeInterface} from "../interfaces/viaje.interface";
import { HistorialCompraInterface } from '../interfaces/historial-compra.interface';
import {ViajeCreateInterface} from "../interfaces/viaje-create.interface";



@Injectable({
    providedIn: 'any'
})
export class ViajeService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  mostrarViajes(){
    const url = 'http://127.0.0.1:8000/viajes/';
    return this.httpClient
      .get(url, )
      .pipe(
        map(
          (resultadoEnData: Object) => resultadoEnData as ViajeInterface[]
        )
      )
  }

  buscarViaje(idViaje: number) {
    const url = "http://127.0.0.1:8000/viajes/" + idViaje;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData: Object) => resultadoEnData as ViajeInterface
        )
      )
  }

  actualizarViajePorId(idViaje: number, datosActualizar: ViajeCreateInterface): Observable<ViajeCreateInterface> {
    const url = "http://127.0.0.1:8000/viajes/" + idViaje;
    return this.httpClient.put(url, datosActualizar)
      .pipe(map((resultadoEnData) => resultadoEnData as ViajeInterface))
  }
  insertarViaje(datos: ViajeCreateInterface): Observable<ViajeInterface> {
    const url = "http://127.0.0.1:8000/viajes/" ;
    return this.httpClient.post(url, datos)
      .pipe(map((resultadoEnData) => resultadoEnData as ViajeInterface))
  }
  eliminarViaje(idViaje: number): Observable<ViajeInterface> {
    const url = "http://127.0.0.1:8000/viajes/"+idViaje;
    return this.httpClient.delete(url)
      .pipe(map((resultadoEnData) => resultadoEnData as ViajeInterface))
  }
}
