import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busqueda-radicado',
  templateUrl: './busqueda-radicado.component.html',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule]
})
export class BusquedaRadicadoComponent {
  radicado: string = '';
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  buscar() {
    if (!this.radicado) return;
    this.loading = true;
    this.error = null;
    const url = `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${this.radicado}&SoloActivos=false&pagina=1`;
    this.http.get<any>(url).subscribe({
      next: (resp) => {
        this.loading = false;
        if (resp && resp.procesos && resp.procesos.length > 0) {
          // Navega a la vista de detalle, pasando los datos por state
          this.router.navigate(['/detalle-proceso'], { state: { proceso: resp.procesos[0] } });
        } else {
          this.error = 'No se encontraron procesos para el radicado ingresado.';
        }
      },
      error: () => {
        this.loading = false;
        this.error = 'Error al consultar el proceso. Intente nuevamente.';
      }
    });
  }
}
