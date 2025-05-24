import { Routes } from '@angular/router';
import { BusquedaInicioComponent } from './busqueda-inicio/busqueda-inicio.component';
import { BusquedaRadicadoComponent } from './busqueda-radicado/busqueda-radicado.component';
import { BusquedaCompletaComponent } from './busqueda-completa/busqueda-completa.component';
import { DetalleProcesoComponent } from './detalle-proceso/detalle-proceso.component';
import { ActuacionesComponent } from './actuaciones/actuaciones.component';

export const routes: Routes = [
  { path: '', component: BusquedaInicioComponent },
  { path: 'busqueda-radicado', component: BusquedaRadicadoComponent },
  { path: 'busqueda-completa', component: BusquedaCompletaComponent },
  { path: 'detalle-proceso', component: DetalleProcesoComponent },
  { path: 'actuaciones', component: ActuacionesComponent },
  { path: '**', redirectTo: '' }
];
