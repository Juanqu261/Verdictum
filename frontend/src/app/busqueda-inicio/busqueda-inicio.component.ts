import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-inicio',
  templateUrl: './busqueda-inicio.component.html',
  standalone: true
})
export class BusquedaInicioComponent {
  constructor(private router: Router) {}

  irBusquedaRadicado() {
    this.router.navigate(['/busqueda-radicado']);
  }

  irBusquedaCompleta() {
    this.router.navigate(['/busqueda-completa']);
  }
}
