/*
🔹 .reduce()
🧠 ¿Qué hace?
Reduce un array a un solo valor (suma, objeto, string, etc.), usando una función acumuladora.
⚙️ Sintaxis básica:
*/
// array.reduce((acumulador, valorActual) => {
//     return nuevaAcumulación;
// }, valorInicial);

// ✅ Ejemplo 1: Sumar todos los números
const numeros = [10, 20, 30];

const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 60
// 🔍 acc empieza en 0, luego suma cada número.



// 🌍 Ejemplo real: Total de productos pedidos
const pedidos = [
    { cliente: "Luis", producto: "Leche", cantidad: 1 },
    { cliente: "Sara", producto: "Huevos", cantidad: 12 },
    { cliente: "Carlos", producto: "Agua", cantidad: 3 },
];

const totalProductos = pedidos.reduce((acc, pedido) => acc + pedido.cantidad, 0);
console.log(totalProductos) //16

// 🎯 Mini reto:
// Tienes este array:
const precios = [100, 250, 400];

const totalPrecios = precios.reduce((acc, precio) => acc + precio, 0);
console.log(totalPrecios)

