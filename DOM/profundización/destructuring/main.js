/*
📌 ¿Qué es Destructuring?

Es una sintaxis de JavaScript que permite extraer valores de arrays u objetos y asignarlos a variables de manera más clara y rápida.
En lugar de acceder uno por uno con obj.prop o arr[index], puedes desestructurar directamente.
*/


// --------------------------------------------
// 📝 Ejemplo con Arrays
console.clear()
const numeros = [10, 20, 30];

// Sin destructuring
const primero = numeros[0];
const segundo = numeros[1];

// Con destructuring
const [a, b, c] = numeros;

console.log(primero); // 10
console.log(b); // 20
console.log(c); // 30


// --------------------------------------------
// También puedes saltar valores:
const [x, , z] = numeros;
console.log(x, z);

// --------------------------------------------
// 📝 Ejemplo con Objetos

const persona = {
    nombre: "Sam",
    edad: 25,
    pais: "Colombia"
};

// Sin destructuring
const nombre1 = persona.nombre;
const edad1 = persona.edad;

// Con destructuring
const { nombre, edad, pais } = persona;

console.log(nombre); // "Sam"
console.log(pais);   // 25


// --------------------------------------------
// Puedes también renombrar variables:
const { nombre: userName, pais: country } = persona;
console.log(userName); // "Sam"
console.log(country);  // "Colombia"

// --------------------------------------------
// 📝 Ejemplo en Funciones
// Muy útil para parámetros:
function mostrarUsuario({ nombre, edad }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const usuario = { nombre: "Sam", edad: 25, pais: "Colombia" };
mostrarUsuario(usuario);
// "Nombre: Sam, Edad: 25"
