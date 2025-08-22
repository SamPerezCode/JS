/*
js trabaja de forma sincronica: Todo funciona una tras de otra, y si hay algún error esto bloqueara las demas

La asincronía es la capacidad de ejecutar tareas sin bloquear la ejecución del resto del programa.
➡️ Ejemplo:

--Imagina que tu app hace una petición a un servidor que tarda 3 segundos.
--Si fuera síncrono, el navegador quedaría “congelado” hasta recibir la respuesta.
--Con asincronía, JS sigue ejecutando otras tareas mientras espera el resultado.

Esto lo maneja el Event Loop de JS, que coloca las tareas en una cola y las va resolviendo sin detener el flujo principal.

*/

// // ejemplo:
// console.log("Hola")
// console.log("Estoy en el medio");
// console.log("Chau!")

// -------------------------------------------------------

// 1. Ejemplo de trabajo asincronico:
// setTmeout

// setTimeout(() => {
//  // contenido de la funcion
// }, timeout);
// timeout: tiempo que declarar (Se hace en milisegundos)

// console.log("Hola")
// setTimeout(() => {
//     console.log("Estoy por la mitad")
// }, 3000); // tardará 3 segundos en salir
// console.log("Chau!")
// siempre ejecuta al final las funciones asincronicas


// --------------------------------------------------------
// 2. setInterval: es practicamnete lo mismo, solo que se ejecutara cada sierto tiempo según el que yo le ponga, seria un loop infinito
// setInterval(() => {
//     console.log('Hola')
// }, 1000);

// Ejemplo del contador

// let contador = 0;

// const intervalo = setInterval(() => {
//     contador++;
//     console.log(contador);

// lo podemos frenar de la siguiente manera
// clearInterval(intervalo)
// pero para poder usarlo de una manera más tecnica y aprovhcar esa funcion:
//     if (contador === 5) {
//         clearInterval(intervalo);
//         console.log('El contador se frenó')
//     }
// }, 1000)


/*
Promesas: Es un objeto que representa un evento a futuro, y puede venir de una base de datos, no sabems aun que es o cuanto es, puede ser un array con objetos, etc.

*/
// el new promise recibe dos parametros que son: resolve (Cuando la promesa traiga lo que queremos), reject (Cuando se rechase o llegue con algún error)
// new Promise((resolve, reject) => {

// })

// ejemplo:
const eventoFuturo = (res) => {
    return new Promise((resolve, reject) => {
        if (res === true) {
            resolve("Promesa resuelta")
        } else {
            reject('Promesa rechazada')
        }
    })
}

// const valor = false     // si es false me mostrará promesa rechazada

const valor = true // si es true sera promoesa resuelta

console.log(eventoFuturo(valor)) // Si no tiene nada mostrara pendiente


// -------------------------------------------------
// Como usar el then, catch y finaly?

eventoFuturo(valor)
    .then((respuesta) => { //para esperar a tener la respuesta
        console.log(respuesta)
    })
    .catch((respuesta) => { // EN caso de que sea rechazada o haya un error
        console.log(respuesta)
    })
    .finally(() => {
        console.log('Finalizó el proceso') // Se ejecuta se resuelva o no
    })


// cuando la promeza es rechazada para que nuestro proyecto no entre a un error es cuando usamos el catch

