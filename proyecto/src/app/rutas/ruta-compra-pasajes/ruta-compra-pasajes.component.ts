import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsuarioInterface } from 'src/app/services/interfaces/usuario.interface';
import { ViajeService } from 'src/app/services/http/viajes.service';
import { ViajeInterface } from 'src/app/services/interfaces/viaje.interface';

@Component({
  selector: 'app-ruta-compra-pasajes',
  templateUrl: './ruta-compra-pasajes.component.html',
  styleUrls: ['./ruta-compra-pasajes.component.css']
})
export class RutaCompraPasajesComponent implements OnInit {

  usuario!: UsuarioInterface;

  ciudadOrigen = '';
  ciudadDestino = '';
  fechaViaje = '';

  viajes = []

  constructor(
    private readonly _authService: AuthService,
    private readonly viajeService: ViajeService,
  ) { }

  ngOnInit(): void {
    //this.usuario = this._authService.usuarioLogeado;
    //obtener viajes
    this.viajeService.mostrarViajes().subscribe(
      (viajes: any) => {
        this.viajes = viajes;
        console.log(this.viajes);
      }
    );
  }

  onChange(newValue: any) {
    this.viajes = this.buscarViajes(this.ciudadOrigen, this.ciudadDestino, this.fechaViaje)
    console.log(this.viajes);
  }

  buscarViajes(ciudadOrigen: string, ciudadDestino: string, fechaViaje: string) {
    return this.viajes.filter(function (viaje: ViajeInterface) {
      return viaje.ciudad_origen.toLowerCase().includes(ciudadOrigen.toLowerCase())
        || viaje.ciudad_destino.toLowerCase().includes(ciudadDestino.toLowerCase())
        || viaje.fecha === fechaViaje;
    });
  }

}
