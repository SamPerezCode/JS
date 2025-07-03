/*
🔹 1. .push() y .pop()
🧠 ¿Qué hacen?
push() ➜ Agrega un elemento al final del array.
pop() ➜ Elimina el último elemento del array.
*/

// ⚙️ Ejemplo técnico:
const frutas = ["manzana", "pera"];
frutas.push("banano")

console.log(frutas)
frutas.pop();
console.log(frutas)

// 🌍 Ejemplo real:
// Tienes una fila en una tienda:

let fila = ["cliente1", "cliente2"];

fila.push("cliente3", "cliente4"); //agrego 2 elementos nuevos al final de la lista
console.log(fila);
fila.pop(); // Elimino el ultimo elemento
console.log(fila);

// 🧪 Ejercicio guiado:
const tareas = ["lavar platos", "sacar la basura"];
tareas.push("hacer la cama")
console.log(tareas)
tareas.pop();
console.log(tareas)

// 🎯 Mini reto:
// Crea un array vacío llamado compras. Agrega 3 productos y luego elimina el último. Imprime el resultado.

const compras = [];
compras.push("Arroz", "papa", "platano");
console.log(compras);
compras.pop();
console.log(compras);

const regalos = ["zapatos", "carro", "casa", "$10.000"];
regalos.push("elicoptero")
console.log(regalos)
regalos.pop()
console.log(regalos)
