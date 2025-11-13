import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresupuestoComponent } from './components/presupuesto/presupuesto'; // 👈 importa el componente

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PresupuestoComponent], // 👈 agrégalo aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('presupuesto-app');
}
