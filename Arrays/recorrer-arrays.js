/*
🔁 Formas de recorrer un Array en JavaScript
Te dejo aquí las 5 formas más comunes para que las tengas claras, con ejemplos:
*/

// 1. for clásico
// ✅ Útil cuando necesitas el índice o control total.

const frutas = ["manzana", "pera", "kiwi"];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

// 2. for...of
// ✅ Más limpio. Recorre directamente los valores.

for (let fruta of frutas) {
    console.log(fruta)
}

// 3. forEach()
// ✅ Forma moderna. No devuelve nada, solo ejecuta una función.

frutas.forEach(fruta => {
    console.log(fruta)
})

// 4. map()
// ✅ Ideal para transformar datos (crea un nuevo array).

const frutasMayus = frutas.map(f => f.toUpperCase());
console.log(frutasMayus)

// 5. for...in
// 🚫 No es lo ideal para arrays (se usa para objetos), pero es posible:

for (let i in frutas) {
    console.log(i, frutas[i])
}

/*
🧠 ¿Cuándo usar cuál?
| Caso                               | Recomendación           |
| ---------------------------------- | ----------------------- |
| Necesitas el índice                | `for`, `forEach`, `map` |
| Solo recorrer valores              | `for...of`, `forEach`   |
| Crear un nuevo array               | `map()`                 |
| Necesitas `break` o `continue`     | `for` clásico           |
| Solo ejecutar una función por cada | `forEach()`             |

*/