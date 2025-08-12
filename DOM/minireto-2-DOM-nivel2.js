


// document.addEventListener(`DOMContentLoaded`, () => {
//     const btnContar = document.getElementById("btn-contar");
//     const btnRestar = document.getElementById("btn-restar")
//     const btnReiniciar = document.getElementById("btn-reiniciar")
//     const pCOntador = document.getElementById("contador");

//     let contador = 0;

//     const actualizarContador = () => {
//         pCOntador.textContent = contador;
//     }
//     btnContar.addEventListener(`click`, (e) => {
//         contador++;
//         actualizarContador();
//     })

//     btnRestar.addEventListener('click', (e) => {
//         if (contador > 0) {
//             contador--;
//             actualizarContador();
//         }
//     })

//     btnReiniciar.addEventListener('click', (e) => {
//         if (contador > 0) {
//             contador = 0;
//             actualizarContador();
//         }
//     })

//     actualizarContador();

// })

// Usando el localStorage 


document.addEventListener('DOMContentLoaded', () => {
    const btnContar = document.getElementById("btn-contar");
    const btnRestar = document.getElementById("btn-restar");
    const btnReiniciar = document.getElementById("btn-reiniciar");
    const pContador = document.getElementById("contador");
    const pUltima = document.getElementById("ultima-actualizacion")

    // Recuperar datos del localStorage si existen
    let contador = localStorage.getItem("contador")
        ? parseInt(localStorage.getItem("contador"))
        : 0;
    let ultimaFecha = localStorage.getItem("ultimaFecha") || "--";

    pContador.textContent = contador;
    pUltima.textContent = `Última actualización: ${ultimaFecha}`;

    // Función para guardar en localStorage
    const actualizarContador = () => {
        const fechaActual = new Date().toLocaleString();
        localStorage.setItem("contador", contador);
        localStorage.setItem("ultimaFecha", fechaActual);
        pUltima.textContent = `Última actualización: ${fechaActual}`;
        pContador.textContent = contador;
    };

    btnContar.addEventListener('click', () => {
        contador++;
        actualizarContador();
    });

    btnRestar.addEventListener('click', () => {
        if (contador > 0) {
            contador--;
            actualizarContador();
        }
    });

    btnReiniciar.addEventListener('click', () => {
        contador = 0;
        actualizarContador();
    });
});


