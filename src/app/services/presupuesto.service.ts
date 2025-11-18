import { Injectable, signal, computed } from '@angular/core';

export interface Gasto {
  nombre: string;
  monto: number;
}

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto = signal<number>(0);
  gastos = signal<Gasto[]>([]);

  totalGastos = computed(() =>
    this.gastos().reduce((acc, g) => acc + g.monto, 0)
  );

  saldoRestante = computed(() =>
    this.presupuesto() - this.totalGastos()
  );

  setPresupuesto(valor: number) {
    this.presupuesto.set(valor);
  }

  agregarGasto(nombre: string, monto: number) {

    if (monto > this.saldoRestante()) {
      alert("❗ No puedes agregar este gasto porque excede tu presupuesto.");
      return;
    }

    const nuevoGasto: Gasto = { nombre, monto };
    this.gastos.update(g => [...g, nuevoGasto]);
  }
}
