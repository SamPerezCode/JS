/*
🎯 Desafío: Sistema de gestión de pedidos en una tienda
🛍️ Contexto:
Estás programando el backend de una tienda de productos. Necesitas manipular una lista de pedidos que llegan, se procesan, y se transforman para mostrarlos en el sistema.
🔧 Datos iniciales:
*/
let pedidos = [
    { cliente: "Ana", producto: "Pan", cantidad: 2 },
    { cliente: "Luis", producto: "Leche", cantidad: 1 },
    { cliente: "Sara", producto: "Huevos", cantidad: 12 },
];
// ✅ Paso 1: Agrega un nuevo pedido con push()
pedidos.push({cliente: "Carlos", producto: "Agua", cantidad: 3});
console.log(pedidos);

// ✅ Paso 2: Elimina el primer pedido con shift()
pedidos.shift();
console.log(pedidos);

// ✅ Paso 3: Crea una lista con solo los nombres de los productos
const productos = pedidos.map(pedido => pedido.producto);
console.log(productos);
// ✅ Paso 4: Filtra los pedidos con cantidad mayor o igual a 3 usando filter()
const filerPedido = pedidos.filter(pedido => pedido.cantidad >= 3);
console.log(filerPedido)
// ✅ Paso 5: Usa find() para ubicar el pedido de "Sara"
const pedidoFind = pedidos.find(pedido => pedido.cliente === "Sara");
console.log(pedidoFind)