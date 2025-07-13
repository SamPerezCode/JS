/*
🔥 Reto: Calculadora de totales con callbacks
✅ Contexto
Tienes un array de compras con montos individuales.
Dependiendo de un callback, puedes:

--Sumar todo.
--Restar devoluciones.
--Multiplicar cada monto por un impuesto.
*/
// 🛒 Datos base
const compras = [100, 200, 150, 50];
// ---------------------------------------------------------------------------
// 🎯 Tareas
// 1️⃣ Declara tres funciones callback:
// sumarMontos → suma todos los montos
// restarDevoluciones → resta 50 a cada monto y suma el total
// aplicarImpuesto → multiplica cada monto por 1.19 y suma el total

function sumarMontos(array) {
    return array.reduce((acc, monto) => acc + monto, 0);
}

function restarDevoluciones(array) {
    const conDevolucion = array.map(monto => monto - 50);
    return conDevolucion.reduce((acc, monto) => acc + monto, 0);
}

function aplicarImpuesto(array) {
    const conImpuesto = array.map(monto => monto * 1.19);
    return conImpuesto.reduce((acc, monto) => acc + monto, 0);
}


// ---------------------------------------------------------------------------
// 2️⃣ Crea la función calcularTotal
// Recibe un array y una función callback.
// Retorna el resultado de aplicar el callback al array.

function calcularTotal(montos, callback) {
    return callback(montos)
}

// ---------------------------------------------------------------------------
// 3️⃣ Ejecuta calcularTotal con cada función y muestra los resultados en consola.

console.log(calcularTotal(compras, sumarMontos));
console.log(calcularTotal(compras, aplicarImpuesto));
console.log(calcularTotal(compras, restarDevoluciones))
// 💡 Tips
// Dentro de cada callback usarás .reduce() para sumar.
// Puedes usar .map() dentro de aplicarImpuesto si quieres.


// 📌 Tips para entenderlo mejor:
// 1️⃣ calcularTotal es genérica: no hace nada por sí sola, solo llama lo que le pases.
// 2️⃣ El poder está en los callbacks: cada uno implementa una lógica distinta (reduce, multiplicación, resta…).
// 3️⃣ En la vida real esto se usa para: aplicar descuentos, impuestos, validaciones… y después React se apoya mucho en este patrón (pasar funciones).