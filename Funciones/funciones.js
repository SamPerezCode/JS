/*
🟢 Funciones (a nivel pro)
Porque entender funciones bien es la base para:
✅ Escribir código reutilizable y limpio.
✅ Entender callbacks y promesas.
✅ Dominar React: todo en React son funciones (componentes, hooks).

📌 Lo que vamos a cubrir en Funciones
1️⃣ Declaración VS expresión VS flecha (=>) — Diferencias clave.
2️⃣ Scope y Hoisting — Por qué importa el orden.
3️⃣ Parámetros y valores por defecto — Para funciones flexibles.
4️⃣ Funciones como callbacks — El corazón de map, filter, reduce.
5️⃣ Funciones anidadas y de orden superior — Cuando una función recibe otra.
6️⃣ Prácticas reales:

--Validadores
--Formateadores
--Utilidades con arrays y objetos
7️⃣ Buenas prácticas: funciones puras, SRP (Single Responsibility Principle).


📌 1️⃣ TIPOS DE FUNCIONES EN JS
| Tipo de función             | Cómo se declara               | Cuándo se usa                                       | Ejemplo rápido                                 |
| --------------------------- | ----------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| **Declarada (Declaration)** | `function saludar() {}`       | Para funciones reutilizables que necesitas hoisting | `function saludar() { console.log("Hola!"); }` |
| **Expresada (Expression)**  | `const sumar = function() {}` | Cuando quieres guardarla en una variable            | `const sumar = function(a,b){ return a+b }`    |
| **Flecha (Arrow)**          | `const restar = () => {}`     | Más corta, sin `this` propio, ideal callbacks       | `const restar = (a,b) => a-b`                  |

✅ Diferencia clave:

Declaration se hoistea: la puedes usar antes de declararla.
Expression y Arrow NO.
// */
// 📌 2️⃣ SCOPE & HOISTING

console.log(duplicar(4)); // ✅ Funciona

function duplicar(num) {
    return num * 2;
}

// ❌ Error
// console.log(triplicar(4)); estoy tratando de impirmir una expresión, adiferencia de la declaración

const triplicar = function (num) {
    return num * 3;
};
// 👉 Por eso a veces obtienes undefined o TypeError.

// 📌 3️⃣ PARÁMETROS Y VALORES POR DEFECTO
function saludar(nombre = "Invitado") {
    console.log(`Hola, ${nombre}`);
}

saludar("Ana"); // Hola, Ana
saludar();      // Hola, Invitado

// 📌 4️⃣ CALLBACKS
// Una función que se pasa como argumento a otra:
function procesarUsuario(nombre, callback) {
    console.log(`Bienvenido, ${nombre}`);
    callback();
}

procesarUsuario("Luis", () => {
    console.log("Callback ejecutado");
});

// 📌 5️⃣ FUNCIONES DE ORDEN SUPERIOR
// Una función que recibe otra, la retorna o ambas:
// --map, filter, reduce son funciones de orden superior.
// --Los hooks en React también se basan en esto.
function mayorQue(x) {
    return function (y) {
        return y > x;
    };
}

const mayorQueDiez = mayorQue(10);
console.log(mayorQueDiez(12)); // true


