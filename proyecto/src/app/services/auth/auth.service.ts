import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UsuarioInterface } from "../interfaces/usuario.interface";

@Injectable()
export class AuthService {
  estaLogeado = true;

  roles = [
    'admin',
    'usuario'
  ]

  isLogin() {
    return this.estaLogeado;
  }

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<UsuarioInterface[]> {
    /*return this.http.get('/showcase/resources/data/cars-small.json')
        .toPromise()
        .then(res => res?.data as HistorialCompraInterface[])
        .then(data => { return data; });*/
    const url = environment.urlAPI + "usuarios/";
    return this.http
      .get(url)
      .pipe(
        map(
          (respuesta: Object) => respuesta as UsuarioInterface[]
        )
      );
  }
}
