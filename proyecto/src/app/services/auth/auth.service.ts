import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UsuarioInterface } from "../interfaces/usuario.interface";

@Injectable()
export class AuthService {
  estaLogeado = true;

  usuarioLogeado!: UsuarioInterface;


  isLogin() {
    return this.estaLogeado;
  }

  ngOnInit() {
    //this.usuarioLogeado = JSON.parse(localStorage.getItem("usuario"));
  }

  constructor(private http: HttpClient) {
    const idUsuario = sessionStorage.getItem('idUsuario');

    if (idUsuario) {
      this.getUsuario(+idUsuario).subscribe(
        (usuario: UsuarioInterface) => {
          this.usuarioLogeado = usuario;
          console.log("usuario service",usuario);
        }
      );
    }
  }

  getUsuarios(): Observable<UsuarioInterface[]> {
    const url = environment.urlAPI + "usuarios/";
    return this.http
      .get(url)
      .pipe(
        map(
          (respuesta: Object) => respuesta as UsuarioInterface[]
        )
      );
  }

  getUsuario(id: number): Observable<UsuarioInterface> {
    const url = environment.urlAPI + `usuarios/${id}/`;
    return this.http
      .get(url)
      .pipe(
        map(
          (respuesta: Object) => respuesta as UsuarioInterface
        )
      );
  }

  login(cedula: string, password: string): Observable<UsuarioInterface> {
    const url = environment.urlAPI + `usuarios/?cedula=${cedula}&contrasena=${password}`;
    return this.http
      .get(url)
      .pipe(
        map(
          (respuesta: Object) => respuesta as UsuarioInterface
        )
      );
  }

  saveSesion(usuario: UsuarioInterface) {
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
  }
}


