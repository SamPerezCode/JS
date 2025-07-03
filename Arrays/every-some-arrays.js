/*
🔍 ¿Qué son .every() y .some()?
Ambos son métodos de arrays en JavaScript que sirven para validar condiciones sobre los elementos.

✅ .every():
¿Todos los elementos cumplen con la condición?
Devuelve true si TODOS cumplen.
*/
const edades = [20, 25, 30];
const todosMayoresDe18 = edades.every(edad => edad >= 18);
console.log(todosMayoresDe18); // true ✅

// ✅ .some():
// ¿Al menos uno cumple con la condición?
// Devuelve true si ALGUNO cumple.
const edades2 = [15, 16, 18];
const hayMayoresDe18 = edades2.some(edad => edad >= 18);
console.log(hayMayoresDe18); // true ✅

/*
| Método     | Devuelve `true` si...            | Devuelve `false` si... |
| ---------- | -------------------------------- | ---------------------- |
| `.every()` | Todos cumplen la condición       | Uno o más NO cumplen   |
| `.some()`  | Al menos uno cumple la condición | Ninguno cumple         |

*/

// 🛠️ Mini práctica paso a paso
// 🔧 Base de datos:

const usuarios = [
    { nombre: "Ana", activo: true },
    { nombre: "Luis", activo: true },
    { nombre: "Pedro", activo: false },
];

// 🔹 Paso 1: Verificar si todos los usuarios están activos
const usuariosActivos = usuarios.every(usuario => usuario.activo === true);
console.log(usuariosActivos)

// 🔹 Paso 2: Verificar si al menos uno está activo
const usuarioActivo = usuarios.some(user => user.activo === true);
console.log(usuarioActivo)