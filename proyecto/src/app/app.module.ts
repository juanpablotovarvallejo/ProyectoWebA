import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioSesionComponent } from './rutas/ruta-inicio-sesion/ruta-inicio-sesion.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { RutaCreacionCuentaComponent } from './rutas/ruta-creacion-cuenta/ruta-creacion-cuenta.component';
import { RutaCompraPasajesComponent } from './rutas/ruta-compra-pasajes/ruta-compra-pasajes.component';
import { TarjetaViajeComponent } from './componentes/tarjeta-viaje/tarjeta-viaje.component';
import { RutaEscogerAsientoComponent } from './rutas/ruta-escoger-asiento/ruta-escoger-asiento.component';
import { SillaComponent } from './componentes/silla/silla.component';
import { RutaPagoAsientosComponent } from './rutas/ruta-pago-asientos/ruta-pago-asientos.component';
import { CodigoQrComponent } from './componentes/codigo-qr/codigo-qr.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioSesionComponent,
    PiePaginaComponent,
    BarraNavegacionComponent,
    RutaCreacionCuentaComponent,
    RutaCompraPasajesComponent,
    TarjetaViajeComponent,
    RutaEscogerAsientoComponent,
    SillaComponent,
    RutaPagoAsientosComponent,
    CodigoQrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
