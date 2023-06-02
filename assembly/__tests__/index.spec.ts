import {Producto, allProducto, Compras,allCompras,
        Ventas, allVentas, Usuarios,allUsuarios,
        } from "../models"
import { 
         actualizarProducto,
         agregarProducto,
         buscarProducto,
         productosLen,
         getProductos, 
         eliminarproductos,
        
         actualizarProductosCompra,
         agregarProductosCompra,
         buscarProductosCompra,
         obtenerDeudasProveedores,
         eliminarCompra,
        
         registrarUsuarios,
         actualizarDatos,
         consultarDatos,
         eliminarDatos,
         ingresarDatos,

         registrarVentasRealizadas,
         optenerTotalVentas
         } from "..";

const  calidadProducto = 'exelente'
const  codigoProducto= '1'
const  nombreProducto= 'CocaCola'
const  precioProducto='15'

let newProducto = new Producto(calidadProducto,codigoProducto,nombreProducto,precioProducto);

const allProductosIndex = allProducto.length;
const allUsuariosIndex = allUsuarios.length;
const allComprasIndex = allCompras.length;
const allVentasIndex = allVentas.length;

//PRODUCTOS
const data = new Array<Producto>(allProductosIndex);
for(let i=0; i < allProductosIndex; i++) {
    data[i] = allProducto[i]
}
describe("agregarProducto", () => {
    it('should return "agregarProducto"', () => {
        expect(agregarProducto('exelente', '1','CocaCola', '15')).toStrictEqual(newProducto);
    })
})
describe("getProductos", () => {
    it('should return all Producto', () => {
        expect(getProductos()).toStrictEqual(data)
    })
})

describe("eliminarproductos", () => {
    it('should be true', () => {
        expect(eliminarproductos(allProductosIndex)).toBeFalsy()
    })
})
/*
//todos los productos
describe("eliminarproductos", () => {
    it("eliminar Productos", () => {
        eliminarproductos(allProductosIndex)
        expect(productosLen()).toBe(0,'producto eliminado')
    })
})*/

//COMPRAS
const deudas = '0'
const precio = '15'
const producto = 'CocaCola'

let newProductoCompra = new Compras(deudas,precio,producto);
const data1 = new Array<Compras>(allComprasIndex);
for(let i=0; i < allComprasIndex; i++) {
    data1[i] = allCompras[i]
}

describe("agregarProductosCompra", () => {
    it('should return "agregarProductosCompra"', () => {
        expect(agregarProductosCompra('0', '15','CocaCola')).toStrictEqual(newProductoCompra);
    })
})


describe("obtenerDeudasProveedores", () => {
    it('should return all DeudasProveedores', () => {
        expect(obtenerDeudasProveedores()).toStrictEqual(data1)
    })
})
describe("eliminarCompra", () => {
    it('should be true', () => {
        expect(eliminarCompra(allComprasIndex)).toBeFalsy()
    })
})
/*todas ls compras
describe("eliminarCompra", () => {
    it("eliminarCompra", () => {
        eliminarCompra(allProductosIndex)
        expect(ComprasLen()).toBe(0,'Compra eliminada')
    })
})*/
//USUARIOS
const nombre = 'Arnol Jesus'
const apellidos = 'Cruz Ortiz'
const direccion = 'Calle Pro. Claudio Cruz'

let newUsuario = new Usuarios(nombre,apellidos,direccion);
const data2 = new Array<Usuarios>(allUsuariosIndex);
for(let i=0; i < allUsuariosIndex; i++) {
    data2[i] = allUsuarios[i]
}

describe("registrarUsuarios", () => {
    it('should return "registrarUsuarios"', () => {
        expect(registrarUsuarios('Arnol Jesus', 'Cruz Ortiz','Calle Pro. Claudio Cruz')).toStrictEqual(newUsuario);
    })
})

describe("consultarDatos", () => {
    it('should return all Usuarios', () => {
        expect(consultarDatos()).toStrictEqual(data2)
    })
})

//VENTAS
const capitalVentas = '2000'
const gananciasVenta = '200'
const perdidas = '50'

let newVenta = new Ventas(capitalVentas,gananciasVenta,perdidas);
const data3 = new Array<Ventas>(allVentasIndex);
for(let i=0; i < allVentasIndex; i++) {
    data3[i] = allVentas[i]
}

describe("registrarVentasRealizadas", () => {
    it('should return "registrarVentasRealizadas"', () => {
        expect(registrarVentasRealizadas('2000', '200','50')).toStrictEqual(newVenta);
    })
})

describe("optenerTotalVentas", () => {
    it('should return all ventas', () => {
        expect(optenerTotalVentas()).toStrictEqual(data3)
    })
})

/*
describe("eliminarproductos", () => {
    it('should delete Producto', () => {
        eliminarproductos(allProductosIndex)
        expect(getproductosLength()).toBe(0, 'Productos eliminados!')
    })
})
describe("BajaUsuario", () => {
    it('should be true', () => {
        expect(BajaUsuario(indexUser)).toBeFalsy()
    })
})
*/
