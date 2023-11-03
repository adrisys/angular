export interface Presupuesto {
  id: number;
  proveedor: string;
  fecha: string;
  concepto: string;
  base: number;
  tipo: string;
  iva: number;
  total: number;
}
