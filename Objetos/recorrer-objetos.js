/*
🔁 PARTE 3: Recorrer un objeto
🛠️ Usar for...in
*/
const persona = {
    nombre: "Luis",
    edad: 28,
    ciudad: "Medellín"
};

for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

// // 🛠️ También puedes usar:
// Object.keys(obj)     // array de claves
// Object.values(obj)   // array de valores
// Object.entries(obj)  // array de pares [clave, valor]


// 🔁 FORMAS DE RECORRER UN OBJETO
// Supongamos este objeto:
const usuario = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Cali"
};

console.log(usuario)

/*

✅ 1. Usar for...in
Recorre todas las claves (keys) del objeto.
*/

for (let clave in usuario) {
    console.log(clave + ":" + usuario[clave])
}


// ✅ 2. Usar Object.keys(objeto)
// Devuelve un array con todas las claves → puedes usar forEach o for...of.

Object.keys(usuario).forEach(clave => {
    console.log(clave + ":" + usuario[clave])
})

// ✅ 3. Usar Object.values(objeto)
// Devuelve un array con todos los valores.

Object.values(usuario).forEach(valor => {
    console.log(valor);
});

// ✅ 4. Usar Object.entries(objeto)
// Devuelve un array de pares [clave, valor].
for (let [clave, valor] of Object.entries(usuario)) {
    console.log(clave + ": " + valor);
}


/*
| Necesitas...                     | Usa...             |
| -------------------------------- | ------------------ |
| Solo las claves                  | `Object.keys()`    |
| Solo los valores                 | `Object.values()`  |
| Clave y valor juntos             | `Object.entries()` |
| Recorrido rápido sin transformar | `for...in`         |
*/