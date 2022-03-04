import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsuarioInterface } from 'src/app/services/interfaces/usuario.interface';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {


  usuario!: UsuarioInterface

  constructor(
    private readonly _authService: AuthService,
  ) {

    const user = sessionStorage.getItem("usuario");
    if (user) {
      this.usuario = JSON.parse(user) as UsuarioInterface;
    }
    //console.log("Usuario barra navegacion",this._authService);
    //this.usuario = this._authService.usuarioLogeado;
    // console.log("Usuario barra navegacion",this._authService.usuarioLogeado.apellido);

  }

  ngOnInit(): void {

  }

}
