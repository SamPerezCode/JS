console.clear();
/*
🚀 Ejercicio práctico
Imagina que tienes una API que devuelve un array de usuarios, y quieres extraer solo algunos valores:
*/
const usuarios = [
    { id: 1, nombre: "Sam", edad: 25 },
    { id: 2, nombre: "Ana", edad: 30 },
    { id: 3, nombre: "Luis", edad: 22 },
];

// Destructuring dentro de un loop
usuarios.forEach(({ id, nombre }) => {
    console.log(`ID: ${id}, Nombre: ${nombre}`);
});



// -------------------------------------------------------
// 🏋️ Ejercicio práctico
// 🔹 Enunciado

// Tienes un objeto usuario y un array colores.

// 1. Usa destructuring para obtener nombre y edad del objeto.

// 2. Renombra edad a anios.

// 3. Pon un valor por defecto para pais si no existe.

// 4. Del array colores, obtén el primer y segundo color, y guarda el resto en otra variable.

// 5. Muestra todo en consola.

// 🔹 Código de partida:
const usuario = {
    nombre: "Sam",
    edad: 28,
    profesion: "Programador"
};

const colores = ["Rojo", "Verde", "Azul", "Amarillo"];




// 1.
// const { nombre, edad } = usuario;

// 2.
// const { edad: anios } = usuario;


// 3. 
// const { pais = 'Colombia' } = usuario;
// console.log(pais)

// 4.

// const [a, ...rest] = colores
// console.log(a)
// console.log(rest)
// 5.

// console.log(`Nombre: ${nombre}`);
// console.log(`Años: ${anios}`);
// console.log(`País: ${pais}`);
// console.log(`Color favorito: ${a}`);
// console.log(`Segundo color: ${rest[0]}`);
// console.log(`Otros colores: ${rest}`)


// --------------------------------------------------
// 📝 Ejercicio propuesto
// Tienes este objeto y array:
const persona = {
    nombre: "Laura",
    edad: 25,
    direccion: {
        ciudad: "Bogotá",
        pais: "Colombia"
    }
};

const hobbies = ["leer", "correr", "programar", "viajar"];

/*
👉 Tarea:
1. Usa destructuring para obtener:
--El nombre y edad.
--La ciudad dentro de direccion.
--El primer hobby como hobbiePrincipal y el resto en un array otrosHobbies.
2. Muestra en consola algo así:

Nombre: Laura
Edad: 25
Ciudad: Bogotá
Hobbie principal: leer
Otros hobbies: correr, programar, viajar
*/
// 1.
// const { nombre, edad, direccion: { ciudad } } = persona;
// const [a, ...rest] = hobbies;
// const hobbiePrincipal = a;
// const otrosHobbies = rest;

// console.log(`Nombre: ${nombre}`);
// console.log(`Edad: ${edad}`);
// console.log(`Ciudad: ${ciudad}`);
// console.log(`Hobbie principal: ${hobbiePrincipal}`);
// console.log(`Otros hobbies: ${rest}`);


// ----------------------------------------------------
// Tenemos un objeto que representa una película:
// const pelicula = {
//     titulo: "Inception",
//     director: "Christopher Nolan",
//     anio: 2010,
//     genero: "Ciencia ficción"
// };

// 👉 Crea una función llamada mostrarPelicula que reciba ese objeto como parámetro y, usando destructuring en los parámetros, muestre un console.log con el título y el director.

// function mostrarPelicula({ titulo, director }) {
//     return console.log(`Titulo: ${titulo}, Director: ${director}`);
// }
// mostrarPelicula(pelicula)


// -------------------------------------------
// Perfecto Sam 🚀, vamos a mezclar arrays + objetos con destructuring.
// Imagina que tienes un array de películas, donde cada elemento es un objeto con título y director:
const peliculas = [
    { titulo: "Inception", director: "Christopher Nolan" },
    { titulo: "Interstellar", director: "Christopher Nolan" },
    { titulo: "The Matrix", director: "Wachowskis" }
];

// 👉 El reto es:

// 1. Extraer la primera y la tercera película del array con destructuring.
// 2. De cada una, obtener solo el título y mostrarlo por consola.

// Pista: puedes usar saltos en el array y destructuring anidado de objetos 😉.

const [a, , c] = peliculas;
console.log(a, c)


