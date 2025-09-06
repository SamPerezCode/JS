const estudiantes = [
    { id: 1, nombre: "Ana", edad: 20, curso: "React", calificaciones: [90, 80, 70] },
    { id: 2, nombre: "Luis", edad: 22, curso: "JavaScript", calificaciones: [85, 95, 100] },
    { id: 3, nombre: "María", edad: 19, curso: "React", calificaciones: [70, 75, 80] },
    { id: 4, nombre: "Pedro", edad: 25, curso: "Node", calificaciones: [60, 65, 70] },
    { id: 5, nombre: "Lucía", edad: 21, curso: "JavaScript", calificaciones: [88, 92, 90] },
    { id: 6, nombre: "Carlos", edad: 23, curso: "React", calificaciones: [95, 90, 85] },
    { id: 7, nombre: "Sofía", edad: 18, curso: "Node", calificaciones: [75, 80, 70] },
    { id: 8, nombre: "Miguel", edad: 24, curso: "React", calificaciones: [85, 89, 90] },
    { id: 9, nombre: "Valeria", edad: 22, curso: "JavaScript", calificaciones: [95, 93, 96] },
    { id: 10, nombre: "Andrés", edad: 20, curso: "Node", calificaciones: [70, 72, 68] }
];

document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.querySelector('#buscador');
    const listaEstudiantes = document.querySelector('#lista-estudiantes');
    const btnAnterior = document.querySelector('#prev');
    const btnSiguiente = document.querySelector('#next');
    const actual = document.querySelector('#pagina-actual');

    let paginaActual = 1;
    const itemsPorPagina = 3;
    let listaActiva = [...estudiantes]; // <-- puede ser el array completo o el filtrado

    // función que pinta cards (recibe el array a pintar)
    function renderEstudiantes(lista) {
        listaEstudiantes.innerHTML = ""; // limpio antes de renderizar
        lista.forEach(e => {
            const suma = e.calificaciones.reduce((acc, c) => acc + c, 0);
            const promedio = (suma / e.calificaciones.length).toFixed(2);

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${e.nombre} (${e.edad} años)</h3>
                <p>Curso: ${e.curso}</p>
                <p>Nota promedio: ${promedio}</p>
            `;
            listaEstudiantes.appendChild(card);
        });
    }

    // devuelve la porción de listaActiva correspondiente a la página
    function obtenerPagina(pagina) {
        const inicio = (pagina - 1) * itemsPorPagina;
        const fin = inicio + itemsPorPagina;
        return listaActiva.slice(inicio, fin);
    }

    // actualiza UI: número de página, estado botones y renderiza la página
    function renderPaginaActual() {
        const totalPaginas = Math.max(1, Math.ceil(listaActiva.length / itemsPorPagina));
        // corregir paginaActual si quedó fuera de rango
        if (paginaActual > totalPaginas) paginaActual = totalPaginas;
        if (paginaActual < 1) paginaActual = 1;

        // mostrar número y estado botones
        actual.textContent = `Página ${paginaActual} / ${totalPaginas}`;
        btnAnterior.disabled = paginaActual === 1;
        btnSiguiente.disabled = paginaActual === totalPaginas;

        // obtener items de la página y renderizarlos (o mensaje si no hay)
        const paginaItems = obtenerPagina(paginaActual);
        if (paginaItems.length === 0) {
            listaEstudiantes.innerHTML = '<p>No hay resultados.</p>';
        } else {
            renderEstudiantes(paginaItems);
        }
    }

    // manejador del buscador: actualiza listaActiva y reinicia paginaActual
    buscador.addEventListener('input', () => {
        const texto = buscador.value.trim().toLowerCase();

        if (texto === '') {
            // vuelta al listado completo (paginar sobre el original)
            listaActiva = [...estudiantes];
        } else {
            // filtrar y paginar sobre el filtrado
            listaActiva = estudiantes.filter(e =>
                e.nombre.toLowerCase().includes(texto) ||
                e.curso.toLowerCase().includes(texto)
            );
        }

        paginaActual = 1; // siempre empezar en página 1 tras filtrar
        renderPaginaActual();
    });

    // navegación
    btnAnterior.addEventListener('click', () => {
        if (paginaActual > 1) {
            paginaActual--;
            renderPaginaActual();
        }
    });

    btnSiguiente.addEventListener('click', () => {
        const totalPaginas = Math.ceil(listaActiva.length / itemsPorPagina);
        if (paginaActual < totalPaginas) {
            paginaActual++;
            renderPaginaActual();
        }
    });

    // render inicial
    renderPaginaActual();
});






