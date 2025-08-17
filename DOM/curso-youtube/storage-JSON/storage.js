// que es Storage
/*
¿Este funcionará como un objeto en JS, nos permite guardar información en el navegador del usuario, para mas adelante el usuario pueda encontrarlos  mas adelante cuando vuelva a entrar.

*/

// Forma de guardar en en el LocalStorage. Tenemos dos storages:

// LocalStorage (ALMACENAMIENTO DE LOCAL, nunca se va a borrar si no lo vaciamos)
// sessionStorage (ALMACENAMIENTO DE SESION, Esta se borra al cerrar sesión)
// Son dos objetos parecidos, estos nos permiten guardar arrays o infromacion dentro del navegador para que la informacion pueda persistir.

// Como usar el localStorage:
// 1. Llamamos al localStorage
// 2. metodo setItem (Para guardar un elemento en el objeto), dentro del parentesis va un nombre que representa lo que estamos guardando seguido de un valor
// 3. ne pocas palabras estaremos armando un objeto con la palabra iva y el valor 21

// localStorage.setItem("iva", 21);
// localStorage.setItem('nombre', 'Sam')

// todo lo que se guarde lo convertira en un string

// Como guardar una variable?
// let usuario = "Sam Perez";
// localStorage.setItem('usuario', usuario);

// Como acceder al localStorage?
// let usuarioLocalStorage = localStorage.getItem('usuario') // Usamos la clave con que este se guardó
// console.log(usuarioLocalStorage)


// --------------------------------------------------------------------------------------
// ejemplo: Guardar en el localStorage y como recuperarlo, no necesariamente debe hacerse con estos paso pero es para ser explisitos
// let usuarioIngresado = prompt('Ingrese un usuario');
// localStorage.setItem('UIngresado', usuarioIngresado);

// let usuarioIngresadoLocalStorage = localStorage.getItem('UIngresado');
// console.log(usuarioIngresadoLocalStorage);



// ----------------------------------------------------------------------------------
// Como agregar un objeto al localStorage?
// OBJETOS
const usuario = {
    nombre: "Sam",
    edad: 32
}

// debemos convertir nuesro objeto a JSON(texto plano o string)
// Los pasos podrian ser:
// 1. Convertir el objet a JSON:
// Opción 1:
// const usuarioJSON = JSON.stringify(usuario);
// console.log(usuarioJSON)
// 2. Ahora si lo podemos guardar
// localStorage.setItem('usuario', usuarioJSON)

// Opción 2 (La mejor y mas simplificada):
localStorage.setItem('usuario', JSON.stringify(usuario));


// 3. Ahora para llamar ese JSON no lo podemos hacer solo con el getItem, pues nos lo va a mandar como JSON; tenemos que convertirlo a un Objeto JS;
// opción 1:
// const usuarioEnLocalStorage = localStorage.getItem('usuario');
// Lo convertimos con JSON.parse
// const usuarioObjet = JSON.parse(usuarioEnLocalStorage);
// console.log(usuarioObjet)

// opción 2 (La más usada):

const usuarioLS = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioLS);


// ----------------------------------------------------------
// ARRAY DE OBJETOS
const productos = [
    { nombre: "Silla", precio: 1500 },
    { nombre: "Sillón", precio: 1500 },
    { nombre: "Mesa", precio: 1500 },
];

// Lo guardamos en JSON Como
localStorage.setItem('productos', JSON.stringify(productos));

const productosLS = JSON.parse(localStorage.getItem('productos'));
console.log(productosLS)

/*** EJEMPLO DE DARK MODE con localStorage ***/

const botonColorMode = document.querySelector('#color-mode');
const body = document.body;

let darkMode = localStorage.getItem('dark-mode');

function activarDarkMode() {
    // agrgamos una clase dark-mode al body
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'activado')
}

function desactivarDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'desactivado');
}

// Para que cargue el modo por defecto como activado
if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode')
    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})

