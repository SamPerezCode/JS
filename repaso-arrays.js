/*
✅ Plan de repaso: ARRAYS — Nivel PRO
📌 1️⃣ Métodos básicos de mutación
Estos cambian el array original.

| Método      | Qué hace           | Ejemplo               |
| ----------- | ------------------ | --------------------- |
| `push()`    | Agrega al final    | `arr.push("uva")`     |
| `pop()`     | Elimina el último  | `arr.pop()`           |
| `shift()`   | Elimina el primero | `arr.shift()`         |
| `unshift()` | Agrega al inicio   | `arr.unshift("kiwi")` |

*/

const frutas = ["manzana", "pera"];
// 1. Agrega "uva" al final
// 2. Elimina el primero
// 3. Agrega "kiwi" al inicio
// 4. Elimina el último
frutas.push("uva");
frutas.shift();
frutas.unshift("kiwi");
frutas.pop();

console.log(frutas)

/*
📌 2️⃣ Métodos de transformación
No modifican el original (devuelven nuevo array).
| Método       | Qué hace                                   | Ejemplo                               |
| ------------ | ------------------------------------------ | ------------------------------------- |
| `map()`      | Transforma cada elemento                   | `arr.map(x => x.toUpperCase())`       |
| `filter()`   | Filtra según condición                     | `arr.filter(x => x !== "pera")`       |
| `find()`     | Busca el **primero** que cumpla            | `arr.find(x => x.includes("a"))`      |
| `reduce()`   | Reduce todos los elementos a un solo valor | `arr.reduce((acc, val) => acc + val)` |
| `includes()` | Verifica si existe un elemento exacto      | `arr.includes("pera")`                |
| `some()`     | Devuelve `true` si **alguno** cumple       | `arr.some(x => x.length > 5)`         |
| `every()`    | Devuelve `true` si **todos** cumplen       | `arr.every(x => x.length > 1)`        |
*/

const numeros = [1, 2, 3, 4, 5];
// 1. Crea un nuevo array multiplicando cada número por 2 (usa map)
// 2. Filtra los números mayores o iguales a 5 (usa filter)
// 3. Busca el primer número mayor a 4 (usa find)
// 4. Suma todos los números usando reduce
// 5. Verifica si incluye el número 3 (includes)
// 6. Verifica si alguno es mayor a 4 (some)
// 7. Verifica si todos son mayores a 0 (every)

const numPor2 = numeros.map(num => num * 2);
console.log(numPor2);

const numMayores = numPor2.filter(num => num >= 5);
console.log(numMayores);

const numMayorA4 = numeros.find(num => num > 4);
console.log(numMayorA4);

const sumaNum = numeros.reduce((acomulado, num) => {
    return acomulado + num
}, 0);
console.log(sumaNum);

console.log(numeros.includes(3));

const mayorA4 = numeros.some(numero => numero > 4);
console.log(mayorA4);

const mayorA0 = numeros.every(num => num > 0);
console.log(mayorA0);


/*
🧩 ¿Qué es un callback?
Un callback es una función que se pasa como argumento a otra función
para que esa función la ejecute cuando sea necesario.

➡️ En otras palabras:

“Toma esta función y ejecútala dentro de tu proceso.”
-----------------------------------------------------------------
// Esta es la función callback:
const decirHola = () => {
  console.log("¡Hola!");
};

// Esta es una función que recibe una callback:
function procesarSaludo(callback) {
  console.log("Voy a saludar...");
  callback(); // aquí se ejecuta
}

procesarSaludo(decirHola);
// Output:
// Voy a saludar...
// ¡Hola!
-----------------------------------------------------------------
⚡ ¿Dónde aparecen los callbacks en arrays?
Métodos como forEach, map, filter, find, reduce, some, every
usan callbacks: les pasas una función que se ejecuta para cada elemento del array.

🟢 Ejemplo real:
const numeros = [1, 2, 3];

numeros.forEach(num => {
  console.log(num * 2); // ← esto es la callback
});

// Output: 2, 4, 6
Aquí:

--forEach recorre numeros.
--Para cada num, ejecuta la función flecha: (num) => { ... }
--Esa función es tu callback.

-----------------------------------------------------------------
🔑 Clave mental
Un callback:
✅ Es una función que se pasa como parámetro.
✅ Se invoca dentro de la función receptora.
✅ Te da control: decides qué hacer por cada elemento.
-----------------------------------------------------------------
📌 Por eso map y forEach usan callbacks
forEach: recorre y ejecuta la callback por cada item (pero no devuelve nada).

map: recorre, ejecuta la callback y arma un nuevo array con los resultados.
-----------------------------------------------------------------

📌 3️⃣ Recorrer un array
--for
--forEach
--map

👉 Todos sirven para recorrer, pero:

--forEach y map usan callbacks.
--map devuelve un nuevo array, forEach no.
*/
const nombres = ["Ana", "Luis", "Pedro"];
// 1. Recorre con for y muestra cada nombre
// 2. Recorre con forEach e imprime: "Hola, Ana" ...
// 3. Usa map para crear un nuevo array con nombres en mayúsculas

for (let i = 0; i < nombres.length; i++) {
    console.log(`${nombres[i]}`)
}

nombres.forEach(nombre => {
    console.log(`Hola, ${nombre}`)
});

const nombresMayus = nombres.map(nombre => nombre.toUpperCase())
console.log(nombresMayus)


// -----------------------------------------------------------------
// 🚀 Desafío: Lista de alumnos en talleres
const alumnos = [
    { nombre: "Ana", edad: 20, taller: "Oración" },
    { nombre: "Luis", edad: 17, taller: "Alabanza" },
    { nombre: "Pedro", edad: 21, taller: "Discipulado" },
    { nombre: "Sara", edad: 19, taller: "Oración" },
    { nombre: "Marta", edad: 16, taller: "Alabanza" },
];

const talleres = ["Oración", "Alabanza", "Discipulado"];

/*
🎯 Tareas
1️⃣ Recorre todos los alumnos y muestra:
"Ana está inscrita en Oración y tiene 20 años" para cada uno.

2️⃣ Filtra a los alumnos mayores o iguales a 18 años y crea un nuevo array. Muéstralo.

3️⃣ Usa find() para ubicar al alumno llamado "Pedro" y muestra solo su taller.

4️⃣ Usa map() para crear un array de nombres en mayúsculas de todos los alumnos.

5️⃣ Verifica con some() si hay alumnos menores de 18 años.

6️⃣ Verifica con every() si todos los alumnos están inscritos en un taller válido (usa la lista talleres).

7️⃣ Usa reduce() para sumar la edad total de todos los alumnos.

8️⃣ BONUS: Usa includes() para comprobar si existe el taller "Evangelismo" en la lista talleres.
*/
// 1.
for (let i = 0; i < alumnos.length; i++) {
    console.log(`${alumnos[i].nombre} esta inscrito en ${alumnos[i].taller} y tiene ${alumnos[i].edad} años de edad`)
}
// 2. 
const alumnosMayores = alumnos.filter(alumno => alumno.edad >= 18);
console.log(alumnosMayores)
// 3.
const findPedro = alumnos.find(alumno => alumno.nombre === "Pedro");
console.log(findPedro.taller);

// 4.
const nombresMayusAlumnos = alumnos.map(nom => nom.nombre.toUpperCase());
console.log(nombresMayusAlumnos)

// 5.
const alumnosMayoresDe18 = alumnos.some(alum => alum.edad > 18);
console.log(alumnosMayoresDe18)

// 6. 
// ✅ ¿Qué lógica necesitas?
// 1️⃣ Para cada alumno, debes revisar:

// Que su taller esté incluido en la lista talleres.

// 2️⃣ Para saber si todos cumplen, usas .every():

// Retorna true solo si todos cumplen.

// Retorna false si al menos uno NO cumple.

const todosValidos = alumnos.every(alumno =>
    talleres.includes(alumno.taller)
);
console.log(todosValidos);

// 7.
const edadAlumnos = alumnos.reduce((acc, alumno) => {
    return acc + alumno.edad
}, 0)
console.log(edadAlumnos)

console.log(talleres.includes("Evangelismo"))

// Lista de menores de edad:
const menoresDeEdad = alumnos.filter(alumno => alumno.edad < 18);
console.log(menoresDeEdad)
/*
🚀 Lo que acabas de demostrar
🔥 Manejas:

Recorridos básicos (for)

Callbacks (forEach, map, filter, find, reduce)

Métodos de verificación (some, every, includes)

Combinación de arrays con otros arrays (includes con every)

*/