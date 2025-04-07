[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/_3GMYSvv)
# Bienvenido a TECCAFT📖
---
tecafft es un smart contract que parte de la idea de que todo el conocimiento y la información debe ser libre para todos. Este proyecto permite a los usuarios publicar productos, ventas, usuarios y compras, etc. en un ambiente completamente descentralizado y así permitir a otros usuarios obtener los recursos facilmente sin tener que visitar cientos de páginas diferentes hasta conseguir el recurso que buscaban.
Las funcionalidades principales del contrato son las siguientes:
* Subir un Producto.
* Obtener todos los Productos.
* Obtener todas las Compras.
* Obtener todas las Ventas.
* Obtener todos los Usuarios.
* Eliminar la lista de Productos.
* Eliminar la lista de Compras.
* Eliminar la lista de Ventas.
* Eliminar la lista de Usuarios.
* actualizar un Producto.
* actualizar una Compra.
* actualizar una Venta.
* actualizar un Usuario.

## Cómo utilizar este contrato ❔
---
### Pré-requisitos ❕
1. Debe tener [Nodejs](https://nodejs.org/en/) instalado en su versión 12.0 o mayor.
2. Debe tener instalado [Yarn](https://yarnpkg.com/). Para saber si lo tiene, ejecute el comando ```yarn --version ```. En caso de no tenerlo, puede instalarlo ejecutando el comando ```sudo npm install -g yarn```
3. Instale las dependencias de yarn ejecutando ```yarn install```
4. Debe tener una cuenta en la [testnet de NEAR](https://wallet.testnet.near.org/)
5. Debe tener [NEAR-CLI](https://github.com/near/near-cli) instalado globalmente en su ordenador. Para saber si ya lo tiene instalado, ejecute ```near --version```. En caso de no tenerlo, instálelo ejecutando el comando ```sudo npm install -g near-cli``` 

Ya tenemos todo lo que necesitamos para probar nuestro contrato inteligente. Ahora vamos a ejecutarlo.

## Instalación 📖🐱‍💻
---
1. Clone el repositorio ```git clone ```
2. Vamos a iniciar sesión en nuestra wallet que creamos anteriormente: ```near login```
3. Dentro del repositorio, instalemos las dependencias del proyecto ejecutando ```npm install```, tranquilo, esto puede tomar unos segundos.
4. Si quieres desplegar el contrato y probar sus funciones, puedes hacerlo con ```yarn deploy:dev``` esto le devolverá un conjunto de caracteres que empezarán por "dev-" seguido por numeros generados por la red. Guárdelo, lo necesitará si quiere probar los métodos del contrato inteligente.
5. Por último, si queremos ejecutar los tests desarrollados, podemos hacerlo ejecutando ```yarn test```
   
## Llamadas al Contrato 
---
Algunos de los metodos que podemos ejecutar son los siguientes
- Cargar un Producto
  ```bash
  near call dev-1685682428307-15133073436769  agregarProductosCompra '{"deudas": "0", "precio": "$55", "producto": "calculadora cientifica"}' --accountId arnol060.testnet
  ```
- Obtener lista de Productos
  ```bash
  near call dev-1685682428307-15133073436769 getProductos --accountId arnol060.testnet

- Eliminar un Producto
```bash
  near call dev-1685682428307-15133073436769 eliminarproductos'{"productoIndex": i32}' --accountId arnol060.testnet
  ```

## Mockup de Figma 🎨📖
Abre este [enlace](https://www.figma.com/file/ozTOoTjzlqXfC5YrX62ngQ/Untitled?node-id=0%3A1&t=l2eeqqNRU75cj54O-1) para abrir la propuesta de diseño de la Dapp.

## Authors
- [SistemasTecTlaxiaco](https://github.com/SistemasTecTlaxiaco/actividad-9-contrato-compilado-equiposcc)
- [Arnol Jesus Cruz Ortiz](https://github.com/Arnold-Js)
