// 🗂️ 🔑 1. Funciones flecha avanzadas
// ⚡ ¿Qué debes recordar?
/*
| Punto       | Flecha `(=>)`               | Función normal                    |
| ----------- | --------------------------- | --------------------------------- |
| `this`      | No tiene su propio `this`   | Sí tiene su propio `this`         |
| `arguments` | No tiene `arguments`        | Sí tiene `arguments`              |
| Uso ideal   | Callbacks, funciones cortas | Métodos de objetos, constructores |
*/

// 📝 Mini ejemplo
const persona = {
    nombre: "Ana",
    saludar: function () {
        console.log(`Hola, soy ${this.nombre}`);
    },
    saludarFlecha: () => {
        console.log(`Hola, soy ${this.nombre}`);
    }
    //  En objetos: this apunta al objeto que llama al método. por eso acá nombre seria undefine
};

persona.saludar(); // ✅ Hola, soy Ana
persona.saludarFlecha(); // ❌ Hola, soy undefined
// ➡️ La flecha hereda this del contexto superior, por eso no reconoce this.nombre dentro de persona.

// 🧭 🔑 2. "this" en profundidad
// -- Global: En modo no estricto, this apunta a window en el navegador.
// -- En objetos: this apunta al objeto que llama al método.
// -- Flechas: No crean this propio → heredan el de fuera.
// -- En clases y React: Muy importante para manejar props y métodos.

// 📌 Por qué this.nombre es undefined
// 👉 Las funciones flecha (=>) NO tienen su propio this.
// En lugar de eso, heredan this del contexto exterior donde fueron definidas.

// En un objeto literal, si usas flecha así:
const persona2 = {
    nombre: "Luis",
    saludarFlecha: () => {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
// ✅ Aquí this NO apunta al objeto persona, sino al this del ámbito global (o módulo si usas ES Modules).
// Por eso:
// this.nombre // => undefined

// -------------------------------------
// ✅ Cómo solucionarlo
// 🚫 NO uses flechas para métodos de objeto que necesiten this.
// 👉 Usa función normal:
const persona3 = {
    nombre: "Luis",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
// 📌 Aquí:
// this dentro de saludar apunta a persona.

// ⚡ ¿Cuándo usar flecha entonces?
// ✅ Bien para callbacks donde no quieres un this propio.

// ❌ Mal para métodos que necesitan this del objeto.

// ✅ Tip: Si quieres usar flecha PERO conservar this
// 👉 Hazlo dentro de una función normal:

// const persona4 = {
//     nombre: "Luis",
//     saludar() {
//         setTimeout(() => {
//             console.log(`Hola, soy ${this.nombre}`);
//         }, 1000);
//     }
// };
// persona4.saludar(); // ✅ Hola, soy Luis


// 🎯 🔑 3. Scope y closures
// Scope: Es el contexto donde tus variables viven.

// var → function scope
// let y const → block scope

// Closure: Es cuando una función “recuerda” su contexto externo.
function crearContador() {
    let cuenta = 0;
    return function () {
        cuenta++;
        return cuenta;
    }
}

const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2

// ✅ 1️⃣ ¿Qué significa snippet?
// Un snippet es simplemente un fragmento corto de código, como un mini-ejemplo aislado.
// Lo usas para practicar o ilustrar un concepto específico (en este caso, this + flechas).

// Ejemplo:
const obj = {
    nombre: "Ana",
    mostrar: () => console.log(this.nombre)
};
// Esto es un snippet: un bloque pequeño que puedes ejecutar para ver cómo se comporta this.

