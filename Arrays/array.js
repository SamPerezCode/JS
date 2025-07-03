
// 🧠 PARTE 1: Arrays en JavaScript
// 🔹 ¿Qué es un array?
// Un array (o arreglo) es una lista ordenada de elementos. Sirve para agrupar varios valores bajo una sola variable.
const frutas = ["manzana", "pera", "naranja"];
console.log(frutas)

/*
Es como una bandeja donde cada fruta tiene una posición:

-rutas[0] → "manzana"
-frutas[1] → "pera"
-frutas[2] → "naranja"

🔹 Métodos principales
| Método      | ¿Qué hace?                                                      | Ejemplo práctico                    |
| ----------- | --------------------------------------------------------------- | ----------------------------------- |
| `push()`    | Agrega un elemento al final                                     | `frutas.push("uva")`                |
| `pop()`     | Elimina el último elemento                                      | `frutas.pop()`                      |
| `shift()`   | Elimina el primer elemento                                      | `frutas.shift()`                    |
| `unshift()` | Agrega un elemento al principio                                 | `frutas.unshift("kiwi")`            |
| `map()`     | Recorre y transforma cada elemento                              | `frutas.map(f => f.toUpperCase())`  |
| `filter()`  | Crea un nuevo array con los que cumplan cierta condición        | `frutas.filter(f => f !== "pera")`  |
| `find()`    | Devuelve el primer elemento que cumpla una condición            | `frutas.find(f => f.includes("n"))` |
| `every()`   | Devuelve `true` si **todos** los elementos cumplen la condición | `edades.every(e => e >= 18)`        |
| `some()`    | Devuelve `true` si **al menos uno** cumple la condición         | `edades.some(e => e < 18)`          |


*/

// 🔹 Ejemplo guiado: map()
const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(num => num * 2);
console.log(dobles); // [2, 4, 6, 8, 10]
// 🧠 Estamos creando un nuevo array con los elementos multiplicados por 2.

/*
🧪 Ejercicio guiado 1
Crea un array de nombres y devuelve un nuevo array con solo los nombres que tengan más de 5 letras.
*/

const nombres = ["Ana", "Sebastian", "Luis", "Valentina", "Carlos"];

const largos = nombres.filter(nombre => nombre.length > 5);
console.log(largos)

/*
🔁 ¿Cómo se usa esto en React?
React trabaja con arrays todo el tiempo, especialmente para mostrar listas dinámicas:

const frutas = ["manzana", "pera", "naranja"];

return (
    <ul>
    {frutas.map((f, index) => (
        <li key={index}>{f}</li>
    ))}
    </ul>
);
*/
