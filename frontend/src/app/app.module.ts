import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { BusquedaInicioComponent } from './busqueda-inicio/busqueda-inicio.component';
import { BusquedaRadicadoComponent } from './busqueda-radicado/busqueda-radicado.component';
import { BusquedaCompletaComponent } from './busqueda-completa/busqueda-completa.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaInicioComponent,
    BusquedaRadicadoComponent,
    BusquedaCompletaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }