import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-ruta-inicio-sesion',
  templateUrl: './ruta-inicio-sesion.component.html',
  styleUrls: ['./ruta-inicio-sesion.component.css']
})
export class RutaInicioSesionComponent implements OnInit {

  constructor(
    private readonly _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this._authService.estaLogeado = false;
    this._authService.getUsuarios().subscribe(
      (usuarios: any) => {
        console.log(usuarios);
      }
    );
  }

}
