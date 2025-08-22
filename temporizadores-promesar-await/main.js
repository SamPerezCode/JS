// 🟡 Paso 1: Temporizadores (setTimeout y setInterval)

// 👉 setTimeout ejecuta una función después de cierto tiempo (solo una vez).

// console.log("Inicio");

// setTimeout(() => {
//     console.log("Esto se ejecuta después de 2 segundos");
// }, 2000);

// console.log("Fin");

// 🔎 Observa que "Fin" aparece antes, porque JS no se queda esperando, sigue ejecutando el resto del código.

// 👉 setInterval repite una acción cada cierto intervalo de tiempo.
// let contador = 0;

// const intervalo = setInterval(() => {
//     contador++;
//     console.log("Contador:", contador);

//     if (contador === 5) {
//         clearInterval(intervalo); // detenemos el intervalo
//         console.log("Intervalo detenido");
//     }
// }, 1000);
// Esto imprimirá los números del 1 al 5 cada segundo, y luego se detendrá.

// -------------------------------------------------------------------


// 🟡 Paso 2: Promesas

// Las promesas son la forma moderna de manejar operaciones que tardan tiempo (asincronía).
// Ejemplo:

// const tarea = new Promise((resolve, reject) => {
//     let exito = Math.random() > 0.5; // 50% de éxito

//     setTimeout(() => {
//         if (exito) {
//             resolve("La operación fue exitosa ✅");
//         } else {
//             reject("Ocurrió un error ❌");
//         }
//     }, 2000);
// });

// tarea
//     .then(resultado => console.log("Éxito:", resultado))
//     .catch(error => console.log("Error:", error));

// 👉 Aquí la promesa puede resolverse o rechazarse después de 2 segundos.

// -------------------------------------------------------------------


// 🟡 Paso 3: async/await
// Una forma más legible de manejar promesas.


const tareaAsync = async () => {
    try {
        let resultado = await new Promise((resolve, reject) => {
            setTimeout(() => resolve("Todo salió bien ✅"), 1500);
        });

        console.log(resultado);
    } catch (error) {
        console.log("Error:", error);
    }
};

tareaAsync();


// 👉 Aquí usamos await para esperar la promesa sin necesidad de .then().

