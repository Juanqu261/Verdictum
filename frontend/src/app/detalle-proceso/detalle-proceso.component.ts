import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Navigation } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-proceso',
  templateUrl: './detalle-proceso.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DetalleProcesoComponent {
  procesos: any[] = [];

  constructor(private location: Location, private router: Router) {
    const nav: Navigation | null = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;
    if (state?.['procesos']) {
      this.procesos = state['procesos'];
    } else if (state?.['proceso']) {
      this.procesos = [state['proceso']];
    }
  }

  volver() {
    this.location.back();
  }

  irActuaciones(proceso: any) {
    this.router.navigate(['/actuaciones'], { state: { idProceso: proceso.idProceso, llaveProceso: proceso.llaveProceso } });
  }
}
