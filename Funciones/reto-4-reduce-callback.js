// 🚀 Mini reto: Reduce con callback
// 📚 Contexto
// Tienes un array de ventas en pesos y quieres:
// 1️⃣ Convertirlas a dólares.
// 2️⃣ Filtrar las ventas mayores a 50 USD.
// 3️⃣ Sumar el total de esas ventas filtradas usando reduce, pero a través de una función callback.

// 🔢 Datos
const ventas = [150000, 90000, 200000, 50000];
const tasaCambioDolar = 3800;


// 🎯 Lo que debes hacer

// --------------------------------------------------
// ✅ 1️⃣ Función convertirADolares: igual que antes pero para ventas.
function convertirADolares(array) {
    const convertir = array.map(monto => {
        const montoEnDolares = monto / tasaCambioDolar;

        return parseFloat(montoEnDolares.toFixed(2));
    })
    return convertir;
}
const ventasEnDolares = convertirADolares(ventas);
console.log(ventasEnDolares);
// --------------------------------------------------
// ✅ 2️⃣ Función filtrarMayoresA50: filtra montos en dólares mayores a 50.

function filtrarMayoresA50(array) {
    const mayores = array.filter(monto => monto > 50);
    return mayores;
}
const mayoresA50 = filtrarMayoresA50(ventasEnDolares);
console.log(mayoresA50)

// --------------------------------------------------
// ✅ 3️⃣ Función sumarVentas: usa reduce para sumar los montos finales.
function sumarVentas(array) {
    const sumaTotal = array.reduce((acc, monto) => acc + monto, 0);
    return sumaTotal;
}
const totalVentas = sumarVentas(ventasEnDolares);
console.log(totalVentas)
// --------------------------------------------------
// ✅ 4️⃣ Función calcular: recibe un array y un callback, y devuelve lo que retorne el callback.
function calcular(array, callback) {
    return callback(array)
}

// Extra: Encadena calcular para demostrar todo el flujo:
const enDolares = calcular(ventas, convertirADolares);
console.log(enDolares)
const mayores50 = calcular(enDolares, filtrarMayoresA50);
console.log(mayores50);
const total = calcular(mayores50, sumarVentas);
console.log(total)

// ⚡ Pro tip
// Si un paso depende del anterior: usa el resultado de un callback como entrada del siguiente.
// Esto es una pipeline mental muy usada en React y JS funcional.
