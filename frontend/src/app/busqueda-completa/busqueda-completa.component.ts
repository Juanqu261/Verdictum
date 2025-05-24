import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda-completa',
  templateUrl: './busqueda-completa.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class BusquedaCompletaComponent {
  nombre: string = '';
  departamento: string = '';
  ciudad: string = '';

  buscar() {
    // Lógica de búsqueda completa
    alert(`Buscando por nombre: ${this.nombre}, departamento: ${this.departamento}, ciudad: ${this.ciudad}`);
  }
}
