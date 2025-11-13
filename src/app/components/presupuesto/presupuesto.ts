import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './presupuesto.html',
  styleUrls: ['./presupuesto.css']
})
export class PresupuestoComponent {
  montoTemp: number = 0;

  constructor(public servicio: PresupuestoService) {}

  guardarPresupuesto() {
    if (this.montoTemp > 0) {
      this.servicio.setPresupuesto(this.montoTemp);
      this.montoTemp = 0;
    }
  }
}
