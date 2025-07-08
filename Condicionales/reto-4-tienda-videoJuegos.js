// 💥 Reto EXPERT: Tienda de videojuegos
// 🎮 Datos:

const clientes = [
    { nombre: "Ana", edad: 25, miembro: true },
    { nombre: "Luis", edad: 17, miembro: false },
    { nombre: "Carlos", edad: 30, miembro: true },
];

const compras = [
    { cliente: "Ana", juego: "Zelda", precio: 180000 },
    { cliente: "Luis", juego: "Minecraft", precio: 90000 },
    { cliente: "Carlos", juego: "God of War", precio: 200000 },
];

/*
🎯 Tareas:
1. Filtra solo las compras de clientes mayores de edad.

2. Crea un nuevo array con objetos así:
{ cliente: "Ana", totalConDescuento: 144000 }
--Si es miembro (miembro === true), tiene 20% de descuento.
--Si no es miembro, no hay descuento.

3. Calcula el total de todas las compras (con descuento si aplica).
4. Imprime un mensaje para cada cliente así:
--"Ana compró Zelda por $144000"
--"Luis compró Minecraft por $90000"
5. Usa some() para saber si algún cliente compró un juego que valía más de 190.000.
6. Usa every() para verificar si todos los clientes son mayores de edad.

🧠 Tips:
Para cruzar datos (cliente en compras con clientes), puedes usar .find().
Para aplicar descuentos, puedes usar map().
Para sumar, usa reduce().

*/
// 1.
const comprasDeMayores = compras.filter(compra => {
    const clienteInfo = clientes.find(cli => cli.nombre === compra.cliente);

    return clienteInfo.edad >= 18;
})

console.log(comprasDeMayores)

// 2.
// 🧩 Lógica
// 1️⃣ Recorres comprasMayores con .map().
// 2️⃣ Para cada compra, buscas si ese cliente es miembro usando clientes.find().
// 3️⃣ Calculas el descuento:
// --Si es miembro, aplica 20% menos: precio * 0.8
// --Si no, se queda igual.
// 4️⃣ Devuelves un objeto nuevo { cliente: ..., totalConDescuento: ... }.
const comprasConDescuento = comprasDeMayores.map(compra => {
    const clienteInfo = clientes.find(cli => cli.nombre === compra.cliente);
    const descuento = clienteInfo.miembro ? 0.8 : 1;

    const totalConDescuento = compra.precio * descuento;

    return {
        cliente: compra.cliente,
        totalConDescuento: totalConDescuento
    };
}); 0

console.log(comprasConDescuento)

// 3.
const totalCompra = comprasConDescuento.reduce((acc, total) => acc + total.totalConDescuento, 0);
console.log(totalCompra);

// 4.
comprasDeMayores.forEach(compra => {

    const descuentoinfo = comprasConDescuento.find(
        desc => desc.cliente === compra.cliente
    );

    console.log(`${compra.cliente} compró ${compra.juego} por ${descuentoinfo.totalConDescuento}`);

})

// 5.
const compraCliente = compras.some(cli => cli.precio > 190000);
console.log(compraCliente)
if (compraCliente) {
    console.log("Hay clientes con compras mayores a $190,000");
} else {
    console.log("No hay compras tan altas");
}


// 6.
const clientesMayoresDeEdad = clientes.every(cli => cli.edad > 18);
console.log(clientesMayoresDeEdad)