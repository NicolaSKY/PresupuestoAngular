import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-gastos-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gastos-form.html',
  styleUrls: ['./gastos-form.css']
})
export class GastosFormComponent {
  nombre: string = '';
  monto: number = 0;

  constructor(public servicio: PresupuestoService) {}

  agregar() {
    if (this.nombre.trim() && this.monto > 0) {
      this.servicio.agregarGasto(this.nombre, this.monto);
      this.nombre = '';
      this.monto = 0;
    }
  }
}
