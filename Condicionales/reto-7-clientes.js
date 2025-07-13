// 🧩 Mini-Reto FINAL (Nivel Consolidación)
// Imagina que tienes un array de clientes y cada uno tiene un historial de compras.
// Debes practicar map, filter, reduce, some, every, forEach y condicionales.



const clientes = [
    { nombre: "Ana", compras: [50000, 80000, 120000], premium: true },
    { nombre: "Luis", compras: [20000, 40000], premium: false },
    { nombre: "Pedro", compras: [100000, 70000, 90000], premium: true },
    { nombre: "Sara", compras: [15000, 25000], premium: false },
];

// 🎯 Lo que debes hacer:
// 1️⃣ Crea un array con los totales gastados por cada cliente.
// (Tip: map + reduce dentro de map)
// 2️⃣ Filtra solo los clientes que gastaron más de 200,000 en total.
// 3️⃣ Verifica si algún cliente no premium gastó más de 100,000.
// 4️⃣ Calcula el total gastado de todos los clientes (un solo número).
// 5️⃣ Usa forEach para mostrar:
// "Ana gastó 250000 y es premium" o "Luis gastó 60000 y no es premium"
// 6️⃣ Verifica si todos los clientes premium gastaron más de 100,000

// 📌 Tip extra:

// Para reduce dentro de map: suma cliente.compras.

// Para saber si es premium: usa la propiedad premium.

// 1️⃣ Crea un array con los totales gastados por cada cliente.
// (Tip: map + reduce dentro de map)

// Segunda versión
const totalGastado = clientes.map(cliente => {
    const total = cliente.compras.reduce((acc, compra) => acc + compra, 0);
    return { nombre: cliente.nombre, total };
});


console.log(totalGastado);
// ---------------------------------------------------------------------
// 2️⃣ Filtra solo los clientes que gastaron más de 200,000 en total.
// --Primera versión:
// ✅ Versión usando { nombre, total }:
// 1️⃣ Usas el array totalGastado que tiene:
// const clientesAltos = totalGastado.filter(cliente => cliente.total > 200000);
// console.log(clientesAltos)

// Segunda versión:
// ✅ Versión sin { nombre, total } 
// Si hicieras solo con el array original clientes:
// 1️⃣ Dentro del .filter, sumas con reduce:

const clientesAltos = clientes.filter(cliente => {
    const total = cliente.compras.reduce((acc, compra) => acc + compra, 0);
    return total > 200000
})

console.log(clientesAltos);

// ---------------------------------------------------------------------
// 3️⃣ Verifica si algún cliente no premium gastó más de 100,000.
const clientePremium = clientes.some(cli => {
    const totalGastado = cli.compras.reduce((acc, compra) => acc + compra, 0);
    return !cli.premium && totalGastado > 100000;
})

console.log(clientePremium);

// 4️⃣ Calcula el total gastado de todos los clientes (un solo número).

const gastadoTodoslosClientes = totalGastado.reduce((acc, total) => acc + total.total, 0)
console.log(gastadoTodoslosClientes)

// Segunda Forma de hacerlo (sin totalGastado): 
// const gastadoTodos = clientes.reduce((acc, cliente) => {
//   const totalCliente = cliente.compras.reduce((acc2, compra) => acc2 + compra, 0);
//   return acc + totalCliente;
// }, 0);

// ---------------------------------------------------------------------
// 5️⃣ Usa forEach para mostrar:
// "Ana gastó 250000 y es premium" o "Luis gastó 60000 y no es premium"
clientes.forEach(cli => {
    const totalGastado = cli.compras.reduce((acc, compra) => acc + compra, 0);
    if (cli.premium === true) {
        console.log(`${cli.nombre} gastó ${totalGastado} y es premium`)
    } else {
        console.log(`${cli.nombre} gastó ${totalGastado} y no es premium`)
    }
})

// ---------------------------------------------------------------------
// 6️⃣ Verifica si todos los clientes premium gastaron más de 100,000

const clientesPremium = clientes.some(cli => {
    const totalGastado = cli.compras.reduce((acc, compra) => acc + compra, 0);
    return cli.premium && totalGastado > 100000;
})
console.log(clientesPremium)

