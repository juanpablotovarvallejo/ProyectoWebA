import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaCompraPasajesComponent } from './rutas/ruta-compra-pasajes/ruta-compra-pasajes.component';
import { RutaCreacionCuentaComponent } from './rutas/ruta-creacion-cuenta/ruta-creacion-cuenta.component';
import { RutaEscogerAsientoComponent } from './rutas/ruta-escoger-asiento/ruta-escoger-asiento.component';
import { RutaHistorialComprasComponent } from './rutas/ruta-historial-compras/ruta-historial-compras.component';
import { RutaInicioSesionComponent } from './rutas/ruta-inicio-sesion/ruta-inicio-sesion.component';
import { RutaListaCooperativasComponent } from './rutas/ruta-lista-cooperativas/ruta-lista-cooperativas.component';
import { RutaListaViajesComponent } from './rutas/ruta-lista-viajes/ruta-lista-viajes.component';
import { RutaPagoAsientosComponent } from './rutas/ruta-pago-asientos/ruta-pago-asientos.component';
import { RutaPerfilUsuarioComponent } from './rutas/ruta-perfil-usuario/ruta-perfil-usuario.component';

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
    path: 'historialCompras',
    component: RutaHistorialComprasComponent,
  },
  {
    path: 'perfilUsuario',
    component: RutaPerfilUsuarioComponent,
  },
  {
    path: 'listarViajes',
    component: RutaListaViajesComponent,
  },
  {
    path: 'listarCooperativas',
    component: RutaListaCooperativasComponent,
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
