/*
✅ Módulo 3: DOM y Eventos
1. ¿Qué es el DOM?
El DOM (Document Object Model) es una representación en forma de árbol de todo el contenido HTML de la página.

Es lo que nos permite leer, modificar y escuchar eventos en la página con JavaScript.

📌 Ejemplo de acceso:
*/

const titulo = document.querySelector("h1");
console.log(titulo.textContent);

/*
2. Seleccionar elementos del DOM
--getElementById
--getElementsByClassName
--querySelector
--querySelectorAll

📌 Ejemplo:
*/
const btn = document.querySelector("#btn");
/*

3. Modificar elementos (propiedades y estilos)
--textContent, innerText, innerHTML
--classList, style, setAttribute, removeAttribute

📌 Ejemplo:
*/
titulo.textContent = "Hola DOM!";
titulo.classList.add("activo");

/*

4. Crear y eliminar elementos

--createElement, appendChild, removeChild, replaceChild
--insertBefore, append, prepend, remove

📌 Ejemplo:
*/

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Nuevo párrafo dinámico";
document.body.appendChild(nuevoParrafo);

/*
5. Eventos
addEventListener

--Tipos: click, submit, keydown, keyup, mouseover, etc.
--El objeto event

📌 Ejemplo:
*/

btn.addEventListener("click", (event) => {
    console.log("¡Hiciste click!", event);
});


/*
6. Propagación de eventos

--Burbuja (bubbling) y captura
--stopPropagation()
*/

/*
7. Delegación de eventos
Ideal para listas o elementos que se crean dinámicamente

📌 Ejemplo:
*/
document.querySelector("#lista").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("seleccionado");
    }
});
/*
8. Formulario y eventos asociados

--submit, change, input, focus, blur
--Validaciones básicas

📌 Ejemplo:
*/
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
});
