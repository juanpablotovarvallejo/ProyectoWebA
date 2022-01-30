import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaCompraPasajesComponent } from './rutas/ruta-compra-pasajes/ruta-compra-pasajes.component';
import { RutaCreacionCuentaComponent } from './rutas/ruta-creacion-cuenta/ruta-creacion-cuenta.component';
import { RutaEscogerAsientoComponent } from './rutas/ruta-escoger-asiento/ruta-escoger-asiento.component';
import { RutaInicioSesionComponent } from './rutas/ruta-inicio-sesion/ruta-inicio-sesion.component';
import { RutaPagoAsientosComponent } from './rutas/ruta-pago-asientos/ruta-pago-asientos.component';

const routes: Routes = [
  {
    path: 'inicioSesion',
    component: RutaInicioSesionComponent,
  },
  {
    path: 'crearCuenta',
    component: RutaCreacionCuentaComponent,
  },
  {
    path: 'comprarPasajes',
    component: RutaCompraPasajesComponent,
  },
  {
    path: 'escogerAsiento',
    component: RutaEscogerAsientoComponent,
  },
  {
    path: 'pagarAsiento',
    component: RutaPagoAsientosComponent,
  },
  {
    path: '',
    component: RutaInicioSesionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
