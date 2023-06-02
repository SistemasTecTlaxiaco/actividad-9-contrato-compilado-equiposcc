import { context, logging, ContractPromise, u128, VM } from 'near-sdk-as';
import { Producto, allProducto, Compras, allCompras,  ONE_NEAR } from './models'
import { Ventas, allVentas, Usuarios, allUsuarios } from './models';

//ContractPromiseBatch
const contractOwner = context.sender;
const allProductoIndex = allProducto.length;
const allComprasIndex = allCompras.length;
const allVentasIndex = allVentas.length;
const allUsuariosIndex = allUsuarios.length;
declare var require: any

export function actualizarProducto(allProductosIndex: i32, updated: Producto): boolean{
    if (allProductoIndex >= 0 && allProductosIndex < allProducto.length) {
        let existing = allProducto[allProductosIndex];
        existing.calidadProducto = updated.calidadProducto;
        existing.codigoProducto = updated.codigoProducto;
        existing.nombreProducto = updated.nombreProducto;
        existing.precioProducto = updated.precioProducto;
        logging.log('El Producto ha sido modificado!');
        return true;
    } else {
        logging.log('Producto no registrado');
        return false;
    }
}
export function agregarProducto(calidadProducto: string, codigoProducto: string, nombreProducto: string, precioProducto: string): Producto{
    const newProductoAdd = new Producto(calidadProducto, codigoProducto, nombreProducto,precioProducto);
    allProducto.push(newProductoAdd);
    logging.log('Nuevo Producto: ' + newProductoAdd.nombreProducto)
    return newProductoAdd;
}
export function buscarProducto(productoIndex:i32): Producto {
    if(allProducto.length < productoIndex) {
        logging.log('producto no existe')
    }
    return allProducto[productoIndex];
}
// Used to validate testing for deleteProductos function
export function productosLen(): number {
    return allProducto.length;
}
// Deletes a productos (if exists) based on its position on the Producto PersistentVector
export function eliminarproductos(productoIndex: i32): boolean {
    if(allProducto.length-1 <= productoIndex) {
        logging.log('This producto doesnt exist')
        return false
    }
    allProducto.swap_remove(productoIndex);
    logging.log('The producto has been deleted!');
    return true
}
// Returns all products on the PersistentVector
export function getProductos(): Producto[] {
    const data = new Array<Producto>(allProductoIndex);
    for(let i = 0; i < allProductoIndex; i++) {
        data[i] = allProducto[i]

    }
    return data;
}
//Compras
export function actualizarProductosCompra(allComprasIndex: 2, updated: Compras): boolean { 
    if (allComprasIndex >= 0 && allComprasIndex < allCompras.length) {
        let existing = allCompras[allComprasIndex];
        existing.deudas = updated.deudas;
        existing.precio = updated.precio;
        existing.producto = updated.producto;
        logging.log('El Producto Comprado ha sido modificado!');
        return true;
    } else {
        logging.log('compra de Producto no registrado');
        return false;
    }
}
export function agregarProductosCompra(deudas: string, precio: string, producto:string):Compras{
    const newProductosCompra = new Compras(deudas, precio, producto);
    allCompras.push(newProductosCompra);
    logging.log('Nuevo Producto de compra agregado: ' + newProductosCompra.precio)
    return newProductosCompra;
}
export function buscarProductosCompra(ComprasIndex: i32):Compras{
    if(allCompras.length < ComprasIndex) {
        logging.log('producto  comprado no existe')
    }
    return allCompras[ComprasIndex];
}
export function obtenerDeudasProveedores(): Compras[] {
    const data = new Array<Compras>(allComprasIndex);
    for(let i = 0; i < allComprasIndex; i++) {
        data[i] = allCompras[i]
    }
    return data;
}
export function eliminarCompra(ComprasIndex: i32): boolean {
    if(allCompras.length-1 < ComprasIndex) {
        logging.log('La compra no existet')
        return false
    }
    allCompras.swap_remove(ComprasIndex);
    logging.log('The producto has been deleted!');
    return true
}

//Ventas
export function registrarVentasRealizadas(ganacias: string,perdidas:string,capitalVentas:string): Ventas{
    const newventasRealizadas = new Ventas(ganacias,perdidas, capitalVentas);
    allVentas.push(newventasRealizadas);
    logging.log('Nueva veta realizada: ' + newventasRealizadas.capitalVentas)
    return newventasRealizadas;
}
export function optenerTotalVentas():Ventas[]{
    const data = new Array<Ventas>(allVentasIndex);
    for(let i = 0; i < allVentasIndex; i++) {
        data[i] = allVentas[i]
    }
    return data;
}

//Usuarios
export function registrarUsuarios(nombre:string, apellidos:string, direccion:string): Usuarios{
    const newUsuarios = new Usuarios(nombre, apellidos,direccion);
    allUsuarios.push(newUsuarios);
    logging.log('Nuevo Usuario Registrado: ' + newUsuarios.nombre)
    return newUsuarios;
}
export function actualizarDatos(nombre:string,apellidos:string,direccion:string):Usuarios{
    const newDatosUpload = new Usuarios(nombre,apellidos,direccion);
    if (allUsuariosIndex !== -1) {
        allUsuarios.push(newDatosUpload);
        logging.log('Nuevo Usuario actualizado: ' + newDatosUpload.nombre)
    return newDatosUpload;
      } else {
        logging.log("No se encontró el usuario para actualizar");
        return newDatosUpload; // devolver un valor por defecto
      }
}
export function consultarDatos():Usuarios[]{
    const data = new Array<Usuarios>(allUsuariosIndex);
    for(let i = 0; i < allUsuariosIndex; i++) {
        data[i] = allUsuarios[i]
    }
    return data;
}
export function eliminarDatos():void{
    while(allUsuarios.length > 0) {
        allUsuarios.pop();
    }
}
export function ingresarDatos(nombre:string,apellidos:string,direccion:string):Usuarios{
    const newDatosIngresados = new Usuarios(nombre,apellidos, direccion);
    allUsuarios.push(newDatosIngresados );
    logging.log('Nueva veta realizada: ' + newDatosIngresados.nombre)
    return newDatosIngresados ;
}