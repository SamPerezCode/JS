// 🚀 Mini Reto Callbacks #2
// Imagina estos pagos en pesos:

const pagos = [30000, 50000, 150000, 80000];
const tasaCambioDolar = 4000; // 1 dólar = 4000 pesos

// --------------------------------------------------
// 🎯 Lo que debes hacer:
// ✅ 1️⃣ Define una función convertirADolares que:
// -- Reciba el array.
// -- Use map para convertir cada monto a dólares.
// -- Devuelva el nuevo array.

function convertirADolares(array) {
    const convertir = array.map(item => item / tasaCambioDolar)
    return convertir;
}
console.log(convertirADolares(pagos))


// --------------------------------------------------

// ✅ 2️⃣ Define una función filtrarMayoresA100 que:
// -- Reciba el array.
// -- Use filter para quedarse solo con montos mayores a 100 dólares.
// -- Devuelva ese array.

const pagosDolares = convertirADolares(pagos);

function filtrarMayoresA100(array) {
    const mayores = array.filter(monto => monto > 100);
    return mayores;
}

const mayores100 = filtrarMayoresA100(pagosDolares)
console.log(mayores100)


// --------------------------------------------------
// ✅ 3️⃣ Usa tu calcularTotal para:
// -- Mostrar los montos en dólares.
// -- Mostrar los montos mayores a 100 dólares.
function calcularTotal(montos, callback) {
    return callback(montos)
}

const montosEnDolares = calcularTotal(pagos, convertirADolares)
console.log(montosEnDolares)

const montosFiltrados = calcularTotal(montosEnDolares, filtrarMayoresA100)
console.log(montosFiltrados)