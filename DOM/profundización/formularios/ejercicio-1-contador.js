/*

📝 Ejercicio: Contador con botones

Objetivo: Practicar la manipulación de elementos del DOM (crear, modificar y escuchar eventos).

1. Crea un HTML con un div que muestre un número (inicialmente en 0).
2. Agrega dos botones:

+ → Aumenta el contador.

- → Disminuye el contador.

3. Cada clic debe actualizar el número en pantalla sin recargar la página.
4. Extra: No permitas que el contador baje de 0.

*/

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos los elementos del DOM
    const valorContador = document.getElementById("valor-contador");
    const btnSumar = document.getElementById("sumar");
    const btnRestar = document.getElementById("restar");

    // Inicializamos el contador
    let contador = 0;

    // Evento para sumar
    btnSumar.addEventListener("click", () => {
        contador++;
        valorContador.textContent = `Contador: ${contador}`;
    });

    // Evento para restar
    btnRestar.addEventListener("click", () => {
        contador--;
        valorContador.textContent = `Contador: ${contador}`;
    });

});




