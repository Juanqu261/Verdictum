import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda-radicado',
  templateUrl: './busqueda-radicado.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class BusquedaRadicadoComponent {
  radicado: string = '';
  buscar() {
    // Lógica de búsqueda por radicado
    alert('Buscando por radicado: ' + this.radicado);
  }
}
