/*
💼 Ejercicio tipo entrevista: Manipulación básica del DOM
Enunciado:
Tienes el siguiente HTML:

<body>
    <h1 id="titulo">Hola Mundo</h1>
    <p class="descripcion">Este es un párrafo.</p>
    <button id="cambiarTexto">Cambiar Texto</button>
</body>

Requerimientos:

1. Al hacer clic en el botón, el texto del <h1> debe cambiar a "Título actualizado".
2. También debe cambiar el contenido del párrafo a "Texto modificado con JavaScript".
3. No debes usar librerías como jQuery, solo JavaScript puro.
4. Evita usar onclick en HTML, el evento debe ser manejado desde JavaScript.

Salida esperada:

-- Antes de hacer clic, ves el HTML original.
-- Después de hacer clic, el título y el párrafo cambian al nuevo contenido.

💡 Tip para resolver:
Piensa en:

document.getElementById() y document.querySelector()
textContent o innerText
addEventListener("click", ...)
*/


// --------------------------------------------------------
/*
💻 Ejercicio tipo entrevista — DOM & Eventos

Enunciado:
Crea un botón que, al hacer clic, cambie el texto de un párrafo en la página.
--El párrafo debe tener inicialmente el texto "Hola Mundo".
--Al hacer clic, debe cambiar a "Texto modificado".
--Debes hacerlo sin usar frameworks (solo JavaScript puro).
--El código debe estar separado en HTML y JavaScript.


*/

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("mi-boton");
    const newParrafo = document.getElementById("mi-parrafo")
    console.log({ btn, newParrafo })

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        newParrafo.textContent = "Texto modificado";

        console.log("click detectado")

    });
})
// --------------------------------------------------------------------

