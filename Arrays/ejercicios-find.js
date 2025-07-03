/*

🔹 5. .find()
🧠 ¿Qué hace?
Devuelve el primer elemento que cumple una condición. Solo uno.

⚙️ Ejemplo técnico:
*/
const numeros = [5, 10, 15, 20];
const mayorA10 = numeros.find(n => n > 10); // 15
console.log(mayorA10)

// 🌍 Ejemplo real:
// Buscar un usuario por nombre:
const usuarios = [
    { nombre: "Laura" },
    { nombre: "Carlos" },
    { nombre: "Pedro" },
];
const resultado = usuarios.find(u => u.nombre === "Carlos");
console.log(resultado)

// 🧪 Ejercicio guiado:
const colores = ["verde", "rojo", "azul"];
const encontrado = colores.find(c => c.startsWith("r"));
console.log(encontrado); // "rojo"


// 🎯 Mini reto:
// Tienes productos = ["pan", "queso", "jamón", "leche"]. Usa find() para encontrar el primer producto que tenga más de 5 letras.

// esta primera opcion no funciona porque  estás usando letras especiales como ó y é, lo cual afecta el .length, porque los caracteres acentuados pueden contar diferente dependiendo del entorno (por temas de codificación UTF-16).

// nos tocariaquitarle las acentuaciones a los elementos del array.
// const productos = ["pan", "queso", "jamón", "leche"];
// const result = productos.find(p => p.length > 5);
// console.log(result) // Undefined

// usaremso al segunda opción
const productos = ["pan", "queso", "jamón", "leche", "mayonesa"];
const result = productos.find(p => p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").length > 5);
console.log(result); // "mayonesa"
