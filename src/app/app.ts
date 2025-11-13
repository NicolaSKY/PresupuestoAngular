import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresupuestoComponent } from './components/presupuesto/presupuesto';
import { GastosFormComponent } from './components/gastos-form/gastos-form';
import { ListaGastosComponent } from './components/lista-gastos/lista-gastos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PresupuestoComponent,
    GastosFormComponent,
    ListaGastosComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('presupuesto-app');
}
