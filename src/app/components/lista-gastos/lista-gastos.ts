import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-lista-gastos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-gastos.html',
  styleUrls: ['./lista-gastos.css']
})
export class ListaGastosComponent {
  constructor(public servicio: PresupuestoService) {}
}
