/*
🔹 2. .shift() y .unshift()
🧠 ¿Qué hacen?
shift() ➜ Elimina el primer elemento. contrario de "pop"
unshift() ➜ Agrega al inicio del array. contrario de "push"

⚙️ Ejemplo técnico:
*/
let colores = ["rojo", "verde"];
colores.unshift("azul"); // ["azul", "rojo", "verde"]
colores.shift();         // ["rojo", "verde"]

console.log(colores)

/*

🌍 Ejemplo real:
Cola para pagar en el supermercado:
*/
let cola = ["persona1", "persona2"];
cola.unshift("perosona3") // agrega al principio
console.log(cola);
cola.shift(); // Elimina el primero
console.log(cola)

// 🧪 Ejercicio guiado:
let mensajes = ["mensaje2", "mensaje3"];
mensajes.unshift("mensaje1");
mensajes.shift();
console.log(mensajes); // ["mensaje2", "mensaje3"]

// 🎯 Mini reto:
// Crea un array invitados, agrega 2 personas al inicio, elimina la primera, y muestra el array resultante.

const invitados = ["invitado2", "invitado3", "invitado4"];

invitados.unshift("invitado1")
console.log(invitados)
invitados.shift();
console.log(invitados)


const calles = ["santana", "puertas", "simon bolivar"];
calles.unshift("La sabana");
console.log(calles)
calles.shift();
console.log(calles)