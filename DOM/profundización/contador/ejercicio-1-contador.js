document.addEventListener("DOMContentLoaded", () => {
    const valorContador = document.getElementById("valor-contador");
    const btnSumar = document.getElementById("sumar");
    const btnReiniciar = document.getElementById("reiniciar");
    const btnRestar = document.getElementById("restar");

    let contador = 0;

    btnSumar.addEventListener("click", () => {
        contador++;
        valorContador.textContent = `Contador: ${contador}`;
        valorContador.classList.add("positivo");
    });

    // btnRestar.addEventListener("click", () => {
    //     contador--;
    //     valorContador.textContent = `Contador =  ${contador}`;
    //     if (contador < 0) {
    //         valorContador.classList.remove("positivo");
    //         valorContador.classList.add("negativo");
    //     } else if (contador == 0) {
    //         valorContador.classList.remove("negativo");
    //         valorContador.classList.add("inicio");
    //         // alert('El contador está en 0')
    //     } else {
    //         valorContador.classList.remove("inicio");
    //         valorContador.classList.add("positivo");
    //     }
    // })


    // btnReiniciar.addEventListener("click", () => {
    //     if (contador >= 1 || contador < 0) {
    //         contador = 0;
    //         valorContador.textContent = `Contador: ${contador}`;
    //     } else {
    //         alert('El contador ya está en 0');
    //     }

    // });


});
