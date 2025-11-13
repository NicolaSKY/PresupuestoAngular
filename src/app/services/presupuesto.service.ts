import { Injectable, signal, computed } from '@angular/core';

export interface Gasto {
  nombre: string;
  monto: number;
}

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  // Señales reactivas
  presupuesto = signal<number>(0);
  gastos = signal<Gasto[]>([]);

  // Cálculos automáticos
  totalGastos = computed(() =>
    this.gastos().reduce((acc, g) => acc + g.monto, 0)
  );

  saldoRestante = computed(() =>
    this.presupuesto() - this.totalGastos()
  );

  // Métodos
  setPresupuesto(valor: number) {
    this.presupuesto.set(valor);
  }

  agregarGasto(nombre: string, monto: number) {
    const nuevoGasto: Gasto = { nombre, monto };
    this.gastos.update(g => [...g, nuevoGasto]);
  }
}
