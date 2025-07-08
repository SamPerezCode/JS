/*
📋 Escenario
Eres el encargado de una tienda online y tienes un array con productos vendidos durante el día:
*/
const ventas = [
    { producto: "Camisa", precioUnitario: 30000, cantidad: 2 },
    { producto: "Pantalón", precioUnitario: 50000, cantidad: 1 },
    { producto: "Zapatos", precioUnitario: 120000, cantidad: 1 },
    { producto: "Gorra", precioUnitario: 15000, cantidad: 3 }
];

// 🎯 Tareas
// 1️⃣ Usa map para crear un nuevo array con objetos que incluyan el total pagado por cada producto.
// 👉 Formato:

const totalAPagarPorProducto = ventas.map(item => {
    return {
        producto: item.producto,
        total: item.precioUnitario * item.cantidad
    }
})

console.log(totalAPagarPorProducto)

// 2️⃣ Usa filter para quedarte solo con los productos cuyo total sea mayor a 40000.
const productosprecioMayor = totalAPagarPorProducto.filter(item => item.total > 40000);
console.log(productosprecioMayor)

// 3️⃣ Usa reduce para calcular el total general vendido en el día.
// 👉 Suma todos los totales (precioUnitario × cantidad).

const TotalVendido = totalAPagarPorProducto.reduce((acc, item) => {
    return acc + item.total
}, 0)
console.log(TotalVendido)

const productosFormateados = productosprecioMayor.map(item => {
    return `${item.producto}: $${item.total}`;
})
console.log(productosFormateados)


// ----------------------------------------------------

// 🎯 Escenario
// Tienes un array con estudiantes y sus notas en un examen:

const estudiantes = [
    { nombre: "Ana", nota: 4.5 },
    { nombre: "Luis", nota: 3.8 },
    { nombre: "Carlos", nota: 4.0 },
    { nombre: "María", nota: 5.0 }
];

// 📋 Reto reduce
// 1️⃣ Usa reduce para calcular el promedio de las notas de todos los estudiantes.
// 2️⃣ BONUS: Redondea el promedio a 2 decimales.
// 3️⃣ EXTRA-PRO: Luego usa filter para crear un nuevo array solo con los estudiantes que tienen nota mayor al promedio.

const sumaNotas = estudiantes.reduce((acc, est) => acc + est.nota, 0);
const promedio = sumaNotas / estudiantes.length;

const promedioRedondeado = promedio.toFixed(2);
console.log(promedioRedondeado)

const aprobados = estudiantes.filter(est => est.nota > promedio);
console.log(aprobados)


