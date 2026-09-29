export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio_costo: number;
  precio_venta: number;
  cantidad: number;
  fotografia: string;
}

export interface ProductoFormState {
  nombre: string;
  descripcion: string;
  precioCosto: string;
  precioVenta: string;
  cantidad: string;
  fotografia: string;
}

export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  ListarProductos: undefined;
  PaginaDetalle: { id: number };
  PaginaAgregar: undefined;
};