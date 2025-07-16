/*
📌 Tabla PRO: Destructuración en JavaScript

| 🏷️                                   | ¿Qué hace?                                  | Sintaxis                             | Ejemplo básico                         | Resultado                     |
| ------------------------------------- | ------------------------------------------- | ------------------------------------ | -------------------------------------- | ----------------------------- |
| **1️⃣ Destructuración de Arrays**     | Extrae valores por posición.                | `const [a, b] = array`               | `const [x, y] = [10, 20]`              | `x = 10`, `y = 20`            |
| **2️⃣ Destructuración de Objetos**    | Extrae propiedades por nombre.              | `const {prop} = obj`                 | `const {nombre} = user`                | `nombre = "Ana"`              |
| **3️⃣ Renombrar variables**           | Cambia nombre de la variable que extraes.   | `const {prop: alias} = obj`          | `const {nombre: nombreUsuario} = user` | `nombreUsuario = "Ana"`       |
| **4️⃣ Valores por defecto**           | Asigna valor si la propiedad no existe.     | `const {prop = valor} = obj`         | `const {edad = 18} = user`             | `edad = 18` si `edad` no está |
| **5️⃣ Destructuración en parámetros** | Extrae directo en la definición de función. | `function saluda({nombre}) {}`       | `saluda({ nombre: "Ana" })`            | Usa `nombre` directo          |
| **6️⃣ Destructuración anidada**       | Extrae de objetos/arrays dentro de otros.   | `const {dirección: {ciudad}} = user` | `{ direccion: { ciudad: "Bogotá" } }`  | `ciudad = "Bogotá"`           |

*/
// ✅ Datos base
// Arrays
const numeros = [10, 20, 30, 40];

const coordenadas = [5, 15, 25];

// Objeto simple
const usuario = {
    nombre: "Luis",
    edad: 25,
    direccion: {
        ciudad: "Bogotá",
        pais: "Colombia"
    }
};

// Objeto API simulado
const respuesta = {
    status: "success",
    data: {
        id: 1,
        email: "luis@example.com",
        rol: "admin"
    }
};

// 🔹 Mini-retos
// ----------------------------------------------------------------------
// 🥇 1️⃣ Destructuración de arrays
// Extrae el primer y tercer número de numeros y guárdalos en primero y tercero.

// 🗝️ ¿Cómo funciona la destructuración de arrays?
// 👉 La sintaxis es:
// const [primerElemento, segundoElemento, ...] = array;

// 🔑 Paso a paso mental
// const [ ] = numeros; → abres corchetes para asignar por posición.
// Pones variables en el orden: [primero, , tercero]
// primero toma 10 (posición 0)
// saltas 20 (posición 1)
// tercero toma 30 (posición 2)

const [a, , c] = numeros;
console.log(a)
console.log(c)

// ----------------------------------------------------------------------
// 🥈 2️⃣ Destructuración de objetos
// Extrae nombre y edad de usuario.
const { nombre, edad } = usuario

console.log(nombre);
console.log(edad)
// ----------------------------------------------------------------------

// 🥉 3️⃣ Renombrar + valor por defecto
// Extrae pais de usuario.direccion y renómbralo como paisUsuario.
// Además extrae telefono y ponle valor por defecto 000-000.

const { pais: paisUsuario } = usuario.direccion
const { telefono = 5566 } = usuario.direccion
console.log(paisUsuario);
console.log(telefono)
// ----------------------------------------------------------------------

// 🏅 4️⃣ Destructuración en parámetros
// Crea una función mostrarEmail que reciba { data } de respuesta y muestre data.email.

function mostrarEmail({ data }) {
    console.log(data.email)
}
mostrarEmail(respuesta)