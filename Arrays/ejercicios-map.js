/*
🔹 3. .map()
🧠 ¿Qué hace?
Crea un nuevo array transformando cada elemento con una función.
⚙️ Ejemplo técnico:
*/
const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2); // [2, 4, 6]
console.log(dobles);

// 🌍 Ejemplo real:
// Lista de precios, quieres aplicar IVA del 19%:

const precios = [1000, 2000, 3000];
const conIVA = precios.map(precio => precio*1.19);
console.log(conIVA);

// 🧪 Ejercicio guiado:
const nombres = ["ana", "carlos", "lucía"];
const mayus = nombres.map(nombre => nombre.toUpperCase());
console.log(mayus); // ["ANA", "CARLOS", "LUCÍA"]

/*
🎯 Mini reto:
Tienes un array edades = [10, 20, 30]. Usa map() para crear un nuevo array que diga "Edad: X".

Resultado esperado: ["Edad: 10", "Edad: 20", "Edad: 30"]
*/
const edades = [10, 20, 30];
const edadX = edades.map(ed => `Edad: ${ed}`)
console.log(edadX)

const carros = ["mercedes" , "toyota", "ferrary"];
const carrosMayu = carros.map(car => car.toUpperCase());
console.log(carrosMayu);

