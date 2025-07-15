// 🚀 Ejercicios nivel pro: Funciones Flecha, this y Scope
// ✅ 1️⃣ Herencia de this en callbacks
// js
// Copiar
// Editar

// -------------------------------------------------------------------
// 1️⃣ Crea un objeto `usuario` con:
// nombre: "Ana"
// método `presentarse` (función normal) que dentro haga un `setTimeout` de 1 seg
// Dentro del `setTimeout`, usa una flecha para imprimir: "Hola, soy Ana"

const usuario = {
    nombre: "Ana",
    presentarse() {
        setTimeout(() => {
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000);
    },
    saludar: function () {
        console.log(`Hola soy ${this.nombre}`)
    }
};

usuario.presentarse();
usuario.saludar();


// -------------------------------------------------------------------
// ✅ 2️⃣ Error común usando flecha en método
/*
// 2️⃣ Corrige este error:
// ¿Qué imprime y por qué?
const persona = {
    nombre: "Carlos",
    saludar: () => {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

persona.saludar();

Analiza: ¿Qué es this aquí?

Reescríbelo correctamente.

*/

const persona2 = {
    nombre: "Carlos",
    saludar() {
        setTimeout(() => {
            console.log(`Hola, soy ${this.nombre} `)
        })
    }
}
persona2.saludar();

// -------------------------------------------------------------------
// ✅ 3️⃣ Callback con flecha en Array
// 3️⃣ Dado un array:
const numeros = [1, 2, 3, 4];

// Usa map con flecha para duplicar cada número
// Resultado: [2, 4, 6, 8]

// const duplicados = numeros.map(num => num * 2);
// console.log(duplicados);

const duplicados = () => {
    return numeros.map(num => num * 2)
}

console.log(duplicados())

// Otra forma s que sea la flecha sin bloque {}, osea directamente:

// const duplicados = () => numeros.map(num => num * 2);


// -------------------------------------------------------------------
// 5️⃣ ¿Qué imprime y por qué?
// var nombre = "Global"; SI es var no seria undefine window.nombre existe
let nombre = "Global"; // undefined, window.nombre no existe

const obj = {
    nombre: "Objeto",
    mostrar: () => {
        console.log(this.nombre);
    }

    // mostrar() {
    //     setTimeout(() => {
    //         console.log(this.nombre)
    //     })
    // }
};

obj.mostrar();

// -------------------------------------------------------------------
// 🗂️ Reto Combinado
// 🏆 Desafío final: Combina flecha + callbacks + this

const tarea = {
    descripcion: "Hacer ejercicios",
    mostrar() {
        console.log(`Descripción: ${this.descripcion}`);
        setTimeout(() => {
            console.log(`Recordatorio: ${this.descripcion}`);
        }, 500);
    }
};

tarea.mostrar();

// ✅ 2️⃣ Tu mini reto combinado:
// ✔️ Analizar cada snippet: ¿Dónde la flecha hereda this de forma correcta y dónde no?
// ✔️ Detectar: ¿Cuándo usar flecha o cuándo es mejor una función normal?
// ✔️ Corregir: Si ves undefined inesperado, cambia la estructura.

// // Método: función regular
// mostrar() {
//   console.log(this.nombre); // ✅ this = objeto
// }

// // Callback dentro del método: flecha
// mostrar() {
//   setTimeout(() => {
//     console.log(this.nombre); // ✅ hereda this del método
//   }, 1000);
// }

// ⚡ Conclusión clara:
/*
| DÓNDE                                       | QUÉ USAR        | POR QUÉ                               |
| ------------------------------------------- | --------------- | ------------------------------------- |
| Método de objeto                            | Función normal  | Para que `this` apunte al objeto      |
| Callback interno (setTimeout, map, forEach) | Flecha          | Para heredar `this` del método        |
| Fuera de un objeto                          | Flecha o normal | Depende si quieres `this` global o no |

✅ Tu síntesis es de nivel Pro:
“Si necesito this del objeto, no uso flecha para declarar métodos.” → CORRECTO.
“Dentro de callbacks asíncronos sí puedo usar flecha para no perder this.” → CORRECTO.
“Si no necesito un callback, la flecha dentro de un método es innecesaria.” → CORRECTO.


*/

