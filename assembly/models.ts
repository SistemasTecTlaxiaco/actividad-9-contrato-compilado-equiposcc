import { context, PersistentVector, u128 } from "near-sdk-as";

//@nearBindgen
export class Producto {
  calidadProducto: string;
  codigoProducto: string;
  nombreProducto: string;
  precioProducto: string;
    
  constructor(calidadProducto: string, codigoProducto: string, nombreProducto: string, precioProducto: string) {
    this.calidadProducto = calidadProducto;
    this.codigoProducto = codigoProducto;
    this.nombreProducto = nombreProducto;
    this.precioProducto = precioProducto;
  }
}
//Compras
export class Compras{
  deudas : string;
  precio: string;
  producto: string;
  constructor(deudas: string, precio: string, producto:string){
    this.deudas = deudas;
    this.precio = precio;
    this.producto = producto;
  }
}
//Ventas
export class Ventas{
  capitalVentas: string;
  ganancias: string;
  perdidas: string;
  constructor(capitalVentas:string, ganacias:string, perdidas:string){
    this.capitalVentas = capitalVentas;
    this.ganancias = ganacias;
    this.perdidas = perdidas;
  }
}
//Usuarios
export class Usuarios{
  nombre: string;
  apellidos: string;
  direccion:string;

  constructor(nombre:string, apellidos:string, direccion:string){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
  }
}
//@nearBindgen
export class Contributor{
    user: string;
    constructor() {
        this.user = context.sender;
    }
}

export const allProducto = new PersistentVector<Producto>("p")
export const allCompras = new PersistentVector<Compras>("c")
export const allVentas = new PersistentVector<Ventas>("v")
export const allUsuarios = new PersistentVector<Usuarios>("u")
export const ONE_NEAR = u128.from('10000000000000000')

