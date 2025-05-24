import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busqueda-completa',
  templateUrl: './busqueda-completa.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class BusquedaCompletaComponent {
  tipoPersona: string = '';
  nombre: string = '';
  departamento: string = '';
  ciudad: string = '';
  entidad: string = '';
  especialidad: string = '';
  despacho: string = '';

  showNoCiudadMsg = false;

  departamentos: string[] = [
    'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bogotá D.C.', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá', 'Casanare',
    'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'La Guajira', 'Magdalena',
    'Meta', 'Nariño', 'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia', 'Santander',
    'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'
  ];

  ciudadesPorDepartamento: { [key: string]: string[] } = {
    'Amazonas': ['Leticia'],
    'Antioquia': ['Medellín', 'Bello', 'Itagüí', 'Envigado', 'Rionegro', 'Apartadó', 'Turbo', 'La Ceja', 'Sabaneta', 'Caldas', 'Girardota', 'Copacabana', 'Barbosa', 'Caucasia', 'Puerto Berrío', 'Yarumal', 'Valdivia', 'Remedios', 'Segovia'],
    'Arauca': ['Arauca', 'Saravena', 'Tame'],
    'Atlántico': ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga', 'Galapa', 'Puerto Colombia'],
    'Bogotá D.C.': ['Bogotá'],
    'Bolívar': ['Cartagena', 'Magangué', 'Turbaco', 'El Carmen de Bolívar'],
    'Boyacá': ['Tunja', 'Sogamoso', 'Duitama', 'Chiquinquirá', 'Puerto Boyacá'],
    'Caldas': ['Manizales', 'Villamaría', 'La Dorada', 'Chinchiná'],
    'Caquetá': ['Florencia', 'San Vicente del Caguán', 'Curillo'],
    'Casanare': ['Yopal', 'Aguazul', 'Villanueva', 'Paz de Ariporo'],
    'Cauca': ['Popayán', 'Santander de Quilichao', 'Miranda', 'Puerto Tejada'],
    'Cesar': ['Valledupar', 'Aguachica', 'La Jagua de Ibirico', 'Codazzi'],
    'Chocó': ['Quibdó', 'Istmina', 'Condoto'],
    'Córdoba': ['Montería', 'Sahagún', 'Lorica', 'Tierralta'],
    'Cundinamarca': ['Soacha', 'Facatativá', 'Zipaquirá', 'Girardot', 'Chía', 'Fusagasugá', 'Madrid', 'Mosquera', 'Funza', 'Cajicá', 'Sopó', 'Tocancipá'],
    'Guainía': ['Inírida'],
    'Guaviare': ['San José del Guaviare'],
    'Huila': ['Neiva', 'Pitalito', 'Garzón', 'La Plata'],
    'La Guajira': ['Riohacha', 'Maicao', 'Uribia'],
    'Magdalena': ['Santa Marta', 'Ciénaga', 'Fundación', 'Plato'],
    'Meta': ['Villavicencio', 'Acacías', 'Granada', 'Puerto Gaitán'],
    'Nariño': ['Pasto', 'Ipiales', 'Tumaco', 'La Unión'],
    'Norte de Santander': ['Cúcuta', 'Ocaña', 'Pamplona', 'Villa del Rosario'],
    'Putumayo': ['Mocoa', 'Puerto Asís', 'Orito'],
    'Quindío': ['Armenia', 'Calarcá', 'La Tebaida'],
    'Risaralda': ['Pereira', 'Dosquebradas', 'Santa Rosa de Cabal'],
    'San Andrés y Providencia': ['San Andrés'],
    'Santander': ['Bucaramanga', 'Floridablanca', 'Barrancabermeja', 'Girón', 'Piedecuesta', 'San Gil'],
    'Sucre': ['Sincelejo', 'Corozal', 'Sucre'],
    'Tolima': ['Ibagué', 'Espinal', 'Honda', 'Mariquita'],
    'Valle del Cauca': ['Cali', 'Palmira', 'Buenaventura', 'Tuluá', 'Buga', 'Cartago', 'Jamundí', 'Yumbo', 'Florida'],
    'Vaupés': ['Mitú'],
    'Vichada': ['Puerto Carreño']
  };

  get ciudades(): string[] {
    return this.ciudadesPorDepartamento[this.departamento] || [];
  }

  onDepartamentoChange() {
    this.ciudad = '';
    this.showNoCiudadMsg = false;
  }

  onCiudadClick() {
    if (!this.departamento) {
      this.showNoCiudadMsg = true;
    } else {
      this.showNoCiudadMsg = false;
    }
  }

  buscar() {
    // Lógica de búsqueda
    alert(
      `Tipo de Persona: ${this.tipoPersona}\nNombre: ${this.nombre}\nDepartamento: ${this.departamento}\nCiudad: ${this.ciudad}\nEntidad: ${this.entidad}\nEspecialidad: ${this.especialidad}\nDespacho: ${this.despacho}`
    );
  }
}
