/**** EVENTOS ****/

/*** EVENTOS DEL MOUSE ***/


// Mostrar mensaje en una alerta -- Haciendo referencia a la función
const alerta = document.querySelector('#alerta');
// console.log(alerta)

// Asignar un evento a un elemento

// Forma 1: (Más recomendada)
// Agregamos el escuchador de evectos
alerta.addEventListener('click', () => {
    mostrarAlerta();
});

function mostrarAlerta() {
    alert('Hola, mundo')
}

// Forma 2: (No tan recomendada)
// alerta.onclick = () => {
//     alert('Hola, mundo')
// }

// Forma 3, directamente en el html (no recomendada)
{/* <button id="alerta" class="btn" onclick="alert('Hola, mundo')">Alerta</button> */ }

// Mostrar mensaje en la consola -- Escribir una función anónima
const consola = document.querySelector('#consola');
consola.addEventListener('click', () => {
    console.log('Hola, mundo')
})

// ----------------------------------------------------------
// Agregar clase a un elemento -- Switch Color Mode
const colorModeButton = document.querySelector('#color-mode');
const body = document.body;

colorModeButton.addEventListener('click', () => {
    cambiarModoColor();
})

function cambiarModoColor() {
    // body.classList.add('dark-mode'); // Solo funciona para accionar el botón pero la mejor opcion seria usar toggle
    body.classList.toggle('dark-mode');
    if (body.classList.contains("dark-mode")) {
        colorModeButton.innerText = 'Cambiar a Ligth Mode';
    } else {
        colorModeButton.innerText = 'Cambiar a Dark Mode';
    }
}

// otra clase de eventos serian :
// onmouseover: El usuario mueve el ratón sobre un elemento HTML
// onmouseout: El usuario aleja el ratón de un elemento HTML


// ---------------------------------------------------
// Como mostrar el texto de un input en un alert:

const alertaForm = document.querySelector('#alerta-form');
const alertaInput = document.querySelector('#alerta-input');


// alertaInput.addEventListener('click', () => {
//     console.log('Hola, mundo');
// })

// Eventos en los form
// Mostrar un input en alerta
alertaForm.addEventListener('submit', (e) => {
    e.preventDefault()
    alert(alertaInput.value)
    alertaInput.value = ''; // tambien podria hacer alertaInput.reset();
})

// ----------------------------------------------------------
// mostrar contenido de bajo del input

const abajoInput = document.querySelector('#abajo-input');
const abajo = document.querySelector('#abajo')

abajoInput.addEventListener('input', () => {
    abajo.innerText = abajoInput.value;
})

// evento change en input: captura cuando un input cambia el foco o salimos de este y dejemos de escribir este se ejecuta

//  el evento keydown escucha cuando presionamo la tecla y keyup lo escucha cuando lo suelto


// --------------------------------------------------------
// Agregar ítems a una lista

const agregarForm = document.querySelector('#agregar-form');
const agregarInput = document.querySelector('#agregar-input');
const agregar = document.querySelector('#agregar');


agregarForm.addEventListener('submit', (e) => {
    e.preventDefault()
    agregarItems();
})

function agregarItems() {

    if (agregarInput.value !== '') {
        let item = document.createElement('li');
        item.innerText = agregarInput.value;
        agregar.append(item)
    } else {
        alert('Campo vacío!!')
    }

    agregarInput.focus();
    agregarForm.reset();

}