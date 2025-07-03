/*
🔹 4. .filter()
🧠 ¿Qué hace?
Crea un nuevo array con solo los elementos que cumplan una condición.
⚙️ Ejemplo técnico:
*/
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 0); // [2, 4]
console.log(pares)

// 🌍 Ejemplo real:
// Lista de alumnos, quieres solo los aprobados:

const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Sara", nota: 9 },
];

const aprobados = alumnos.filter(alumno => alumno.nota >= 6);
console.log(aprobados)

// 🧪 Ejercicio guiado:
const palabras = ["mesa", "sol", "ventana"];
const largas = palabras.filter(p => p.length > 4);
console.log(largas); // ["ventana"]


// 🎯 Mini reto:
// Crea un array numeros = [5, 12, 18, 3, 9] y usa filter() para quedarte con los números mayores a 10.

const numeros2 = [5, 12, 18, 3, 9] ;
const numMayores = numeros2.filter(numero => numero > 10);
console.log(numMayores)