/*
🔹 .includes()
🧠 ¿Qué hace?
Verifica si un elemento específico existe en un array (devuelve true o false).
*/
// ✅ Ejemplo 1: Verificar si una fruta está en la lista
const frutas = ["manzana", "pera", "naranja"];
console.log(frutas.includes("pera")); // true
console.log(frutas.includes("banana")); // false

// 🌍 Ejemplo real: Verificar si un usuario está bloqueado
const bloqueados = ["Pedro", "Laura", "Mateo"];
const usuario = "Mateo";

if (bloqueados.includes(usuario)) {
    console.log("Acceso denegado");
} else {
    console.log("Bienvenido");
}

// 🎯 Mini reto:
const permitidos = ["Ana", "Luis", "Sara"];
// Verifica si "Carlos" está en la lista con includes().
// Resultado esperado: false
console.log(permitidos.includes("Carlos"));

// 🧠 Reto Práctico: Sistema de pedidos y stock
// Tienes una tienda online y debes realizar operaciones sobre arrays para controlar los pedidos, inventario y acceso de usuarios.

// 🔧 Datos base:
// const pedidos = [
//     { cliente: "Luis", producto: "Pan", cantidad: 2 },
//     { cliente: "Ana", producto: "Agua", cantidad: 1 },
//     { cliente: "Carlos", producto: "Leche", cantidad: 4 },
// ];

// const productosDisponibles = ["Pan", "Agua", "Leche", "Queso"];
// const usuariosBloqueados = ["Pedro", "Mateo"];
// const preciosUnitarios = {
//     Pan: 1000,
//     Agua: 800,
//     Leche: 2500,
//     Queso: 3000
// };

// 🎯 Tareas (sin mencionar métodos):
// 1. Agrega un nuevo pedido al final de la lista:
// El cliente "Sara" pidió 3 "Quesos".

// pedidos.push({cliente: "Sara", producto: "Queso", cantidad: 3});
// console.log(pedidos);

// // 2. Elimina el primer pedido que se haya hecho (ya fue entregado).
// pedidos.shift()
// console.log(pedidos)

// // 3. Crea un nuevo array con los nombres de los productos solicitados en los pedidos restantes.
// const pedidosNombres = pedidos.map(pedido => pedido.producto);
// console.log(pedidosNombres);

// // 4. Crea un nuevo array con los pedidos cuya cantidad sea mayor o igual a 3
// const pedidosMayor = pedidos.filter(pedido => pedido.cantidad >= 3);
// console.log(pedidosMayor);

// // 5. Busca si hay un pedido hecho por "Carlos" y guárdalo en una variable.
// const pedidosFind = pedidos.find(pedido => pedido.cliente === "Carlos");
// console.log(pedidosFind)

// // 6. Verifica si "Queso" está disponible en el inventario.
// console.log(productosDisponibles.includes("Queso"))

// // 7. Verifica si el cliente "Mateo" puede hacer un pedido (usa la lista de bloqueados)

// if(usuariosBloqueados.includes("Mateo")) {
//     console.log("Mateo no puede realizar pedidos")
// } else {
//     console.log("Mateo puede realizar el pedido")
// }
// // 8. Calcula el total a pagar por todos los pedidos actuales, multiplicando la cantidad por el precio de cada producto.
// const totalAPagar = pedidos.reduce((acc, pedido) => {
//     const precioUnitario = preciosUnitarios[pedido.producto]
//     return acc + (pedido.cantidad * precioUnitario) 
// }, 0)
// console.log("Total a pagar: ", totalAPagar)

const pedidos = [
    { cliente: "Luis", producto: "Pan", cantidad: 2 },
    { cliente: "Ana", producto: "Agua", cantidad: 1 },
    { cliente: "Carlos", producto: "Leche", cantidad: 4 },
];

const productosDisponibles = ["Pan", "Agua", "Leche", "Queso"];
const usuariosBloqueados = ["Pedro", "Mateo"];
const preciosUnitarios = {
    Pan: 1000,
    Agua: 800,
    Leche: 2500,
    Queso: 3000
};

pedidos.push({cliente: "Sara", producto: "Agua", cantidad: 3});
console.log(pedidos)
pedidos.shift();
console.log(pedidos)

const nombresPedidios = pedidos.map(pedido => pedido.producto);
console.log(nombresPedidios);

const pedidosMayores = pedidos.filter(pedido => pedido.cantidad >= 3);
console.log(pedidosMayores)

const coincidenciaPedido = pedidos.find(pedido => pedido.cliente === "Carlos");
console.log(coincidenciaPedido)

const disponible = productosDisponibles.includes("Queso");
console.log(disponible)


if(usuariosBloqueados.includes("Mateo")) {
    console.log("No puede realizar un pedido")
} else {
    console.log("Si puede realizar un pedido")
}

const totalaPagar = pedidos.reduce((acc, pedido) => {
    const precioUnitario = preciosUnitarios[pedido.producto]
    return acc + (pedido.cantidad * precioUnitario)
}, 0)
console.log(totalaPagar)