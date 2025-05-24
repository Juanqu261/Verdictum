import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Navigation } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-proceso',
  templateUrl: './detalle-proceso.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class DetalleProcesoComponent {
  proceso: any = null;

  constructor(private location: Location, private router: Router) {
    const nav: Navigation | null = this.router.getCurrentNavigation();
    this.proceso = nav?.extras?.state?.['proceso'] || null;
  }

  volver() {
    this.location.back();
  }
}
