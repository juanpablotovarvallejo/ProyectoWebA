import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsuarioInterface } from 'src/app/services/interfaces/usuario.interface';

@Component({
  selector: 'app-ruta-perfil-usuario',
  templateUrl: './ruta-perfil-usuario.component.html',
  styleUrls: ['./ruta-perfil-usuario.component.css']
})
export class RutaPerfilUsuarioComponent implements OnInit {

  usuario!: UsuarioInterface

  isEdit = false;

  constructor(
    private readonly _authService: AuthService,
  ) {

    const user = sessionStorage.getItem("usuario");
    if (user) {
      this.usuario = JSON.parse(user) as UsuarioInterface;
      console.log("Usuario ruta perfil usuario", this.usuario);
    }
    //console.log("Usuario barra navegacion",this._authService);
    //this.usuario = this._authService.usuarioLogeado;
    // console.log("Usuario barra navegacion",this._authService.usuarioLogeado.apellido);

  }

  ngOnInit(): void {
  }

  editar() {

    this.isEdit = true;
  }

  //habilitar los inputs



}
