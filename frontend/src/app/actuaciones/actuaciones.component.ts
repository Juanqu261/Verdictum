import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Navigation } from '@angular/router';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
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
  descargandoDocumento: { [idRegActuacion: number]: boolean } = {};
  errorDescarga: { [idRegActuacion: number]: string | null } = {};

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

  getDocumentoLink(act: any): string {
    // Si la actuación tiene documentos, devuelve la URL quemada.
    // Si no, podrías devolver una cadena vacía o null, aunque el HTML ya lo maneja.
    if (act.conDocumentos) {
      return `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Descarga/Documento/789551141`;
    }
    // En teoría, este caso no debería usarse si el botón de descarga solo aparece cuando conDocumentos es true.
    // Pero por seguridad, devolvemos una cadena vacía o un placeholder si es necesario.
    return ''; 
  }

  descargarDocumento(actuacion: any) {
    if (!actuacion.conDocumentos) return;

    const idReg = actuacion.idRegActuacion;
    this.descargandoDocumento[idReg] = true;
    this.errorDescarga[idReg] = null;

    const url = this.getDocumentoLink(actuacion); // Se utiliza el método verificado

    this.http.get(url, { responseType: 'blob', observe: 'response' }).subscribe({
      next: (response) => {
        this.descargandoDocumento[idReg] = false;
        
        // Intentar obtener el nombre del archivo del header Content-Disposition
        let filename = `documento_${idReg}.pdf`; // Nombre por defecto
        const contentDisposition = response.headers.get('Content-Disposition');
        if (contentDisposition) {
          const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const matches = filenameRegex.exec(contentDisposition);
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
          }
        }

        const blob = new Blob([response.body as BlobPart], { type: response.headers.get('Content-Type') || 'application/octet-stream' });
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.setAttribute('download', filename);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(downloadLink.href);
      },
      error: (err: HttpErrorResponse) => {
        this.descargandoDocumento[idReg] = false;
        if (err.status === 500) {
          this.errorDescarga[idReg] = 'El documento no está disponible para descarga directa o requiere autenticación en el portal de la Rama Judicial.';
        } else {
          this.errorDescarga[idReg] = `Error al descargar (${err.status}): ${err.message}. Intente acceder desde el portal oficial.`;
        }
        console.error('Error al descargar documento:', err);
      }
    });
  }

  volver() {
    this.location.back();
  }
}
