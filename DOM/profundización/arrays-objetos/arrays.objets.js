
console.log('Hola')
console.clear()

/*
📌 Repaso de Arrays y Objetos
1. Arrays

Un array es una lista ordenada de elementos. Ejemplo:
const frutas = ["🍎 Manzana", "🍌 Banana", "🍇 Uva"];
📍 Métodos importantes de arrays:

--.forEach() → recorrer sin devolver nada.
--.map() → recorrer y devolver un nuevo array transformado.
--.filter() → devuelve un nuevo array con los que cumplen condición.
--.find() → devuelve el primer elemento que cumple condición.
--.some() → devuelve true si algún elemento cumple condición.
--.every() → devuelve true si todos cumplen condición.
--.reduce() → acumula valores en una sola salida.
*/

const numeros = [1, 2, 3, 4, 5];
// forEach → recorrer
numeros.forEach(n => console.log(n))

// map → transformar
const dobles = numeros.map(n => n * 2);
console.log(dobles);

// filter → filtrar pares
const pares = numeros.filter(n => n % 2 === 0)
console.log(pares);

// find → primer mayor que 3
const mayorQue3 = numeros.find(n => n > 3)
console.log(mayorQue3);

// some → hay algún número mayor a 4?
const algunoMayor4 = numeros.some(n => n > 4);
console.log(algunoMayor4);

// every → todos son mayores a 0?
const todosPositivos = numeros.every(n => n > 0);
console.log(todosPositivos);

// reduce → suma todos
const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log(suma)

/*
2. Objetos
Un objeto agrupa propiedades con clave-valor.
📍 Métodos útiles:

Object.keys(obj) → devuelve un array con las claves.
Object.values(obj) → devuelve un array con los valores.
Object.entries(obj) → devuelve array de pares [clave, valor].
*/
const usuario = {
    id: 1,
    nombre: "Sam",
    edad: 25,
    activo: true
};
console.clear()

const arrayUsuario = Object.keys(usuario) // claves
console.log(arrayUsuario);

const arrayUsuarioValor = Object.values(usuario); //valores
console.log(arrayUsuarioValor)

const arrayUsuarioCompleto = Object.entries(usuario); // array de pares
console.log(arrayUsuarioCompleto)