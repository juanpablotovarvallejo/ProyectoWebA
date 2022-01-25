import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioSesionComponent } from './rutas/ruta-inicio-sesion/ruta-inicio-sesion.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioSesionComponent,
    PiePaginaComponent,
    BarraNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
