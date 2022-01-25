import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaInicioSesionComponent } from './rutas/ruta-inicio-sesion/ruta-inicio-sesion.component';

const routes: Routes = [
  {
    path:'inicioSesion',
    component: RutaInicioSesionComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
