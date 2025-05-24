import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Navigation } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actuaciones',
  templateUrl: './actuaciones.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule]
})
export class ActuacionesComponent {
  actuaciones: any[] = [];
  loading = false;
  error: string | null = null;
  idProceso: number | null = null;
  llaveProceso: string | null = null;
  soloConDocumentos = false;

  constructor(private location: Location, private router: Router, private http: HttpClient) {
    const nav: Navigation | null = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;
    this.idProceso = state?.['idProceso'] ?? null;
    this.llaveProceso = state?.['llaveProceso'] ?? null;
    if (this.idProceso) {
      this.consultarActuaciones();
    } else {
      this.error = 'No se proporcionó el proceso a consultar.';
    }
  }

  consultarActuaciones() {
    this.loading = true;
    this.error = null;
    this.actuaciones = [];
    const url = `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${this.idProceso}`;
    this.http.get<any>(url).subscribe({
      next: (resp) => {
        this.loading = false;
        if (resp && resp.actuaciones && resp.actuaciones.length > 0) {
          this.actuaciones = resp.actuaciones;
        } else {
          this.error = 'No se encontraron actuaciones para este proceso.';
        }
      },
      error: () => {
        this.loading = false;
        this.error = 'Error al consultar las actuaciones. Intente nuevamente.';
      }
    });
  }

  get actuacionesFiltradas() {
    return this.soloConDocumentos
      ? this.actuaciones.filter(a => a.conDocumentos)
      : this.actuaciones;
  }

  getDocumentoLink(act: any): string | null {
    // El id para el link de descarga es act.idRegActuacion
    return act.conDocumentos
      ? `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Descarga/Documento/${act.idRegActuacion}`
      : null;
  }

  volver() {
    this.location.back();
  }
}
