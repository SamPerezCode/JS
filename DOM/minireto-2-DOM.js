// 🟢 Nivel 1 – Manipulación básica
// Cambiar texto y color

//1.  Haz que al dar clic en el botón cambie el texto y color del párrafo.

// --Ejemplo: “Hola mundo” → “Texto cambiado” y de negro → azul.

// --Mostrar / Ocultar elemento

// 2. Un botón que oculte y muestre el párrafo con cada clic (toggle).

// --Contador de clics

// Muestra cuántas veces se ha pulsado un botón.



document.addEventListener('DOMContentLoaded', () => {
    const parrafo = document.getElementById("texto-color");
    const btn = document.getElementById("btn-color");
    const parrafoOculto = document.getElementById("texto-oculto");
    const btnMostrar = document.getElementById("btn-mostrar");
    const contador = document.getElementById("contador");
    const btnContar = document.getElementById("btn-contar");
    const btnReinicar = document.getElementById("btn-reiniciar")
    const btnDecrementar = document.getElementById("decrementar")
    let cuenta = 0;

    const actualizarContador = () => {
        contador.textContent = `Contador: ${cuenta}`;
    };


    btn.addEventListener("click", (e) => {
        e.preventDefault();
        // parrafo.style.color = "blue";
        parrafo.classList.toggle("newClass") // Con el toggle me sirve ara poner o quitar una clase, es ma spractico.
    })

    btnMostrar.addEventListener("click", (e) => {
        e.preventDefault();
        // parrafoOculto.style.display = "block";
        parrafoOculto.classList.toggle("ocultar")
    })

    btnContar.addEventListener("click", (e) => {
        e.preventDefault();

        cuenta++;
        contador.textContent = `Contador: ${cuenta}`;
    })

    btnReinicar.addEventListener("click", (e) => {
        e.preventDefault();
        cuenta = 0;
        contador.textContent = `Contador: ${cuenta}`;
    })

    btnDecrementar.addEventListener("click", (e) => {
        e.preventDefault();

        if (cuenta > 0) {
            cuenta--
        } else {
            alert("EL contador debe ser mayor a 0")
        }

        contador.textContent = `Contador: ${cuenta}`

        actualizarContador();
    })






})

