/*
✅ PRIMER MINI RETO
Vamos a afianzar:
1️⃣ Declara una función sumar como declaración.
2️⃣ Declara una función restar como expresión.
3️⃣ Declara una función multiplicar como flecha.
4️⃣ Declara una función operar que reciba dos números y una función callback (que será sumar, restar o multiplicar).
5️⃣ Prueba operar con cada una.
*/
// 1.
function suma(a, b) {
    return a + b;
}
console.log(suma(4, 6))
// 2.

const restar = function (a, b) {
    return a - b;
}
console.log(restar(6, 4));

// 3.
const multiplicar = (a, b) => a * b;

console.log(multiplicar(5, 5));

// 4.
function operar(a, b, callback) {
    return callback(a, b)
}
// 5.
console.log(operar(5, 10, multiplicar))
console.log(operar(5, 10, restar))
console.log(operar(5, 10, suma))

