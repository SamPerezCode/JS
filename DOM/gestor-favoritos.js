/*
Ejercicio: Gestor de Favoritos

Enunciado:
Crea una pequeña aplicación web que permita a un usuario guardar sus películas favoritas en una tabla.

Requisitos:

1. HTML:

--Un formulario con un <input> para el nombre de la película y un botón "Agregar".
--Una tabla con columnas: Nombre, Acciones.

2. JS:

--Cuando el usuario agregue una película, esta debe guardarse en un array.
--Mostrar todas las películas en la tabla.

--Cada fila debe tener:
    --Botón "Eliminar" → borra la película del array y de la tabla.
    --Botón "Ver" → muestra un alert con el nombre de la película.

--Persistencia: Las películas deben guardarse en localStorage y cargarse al iniciar la página.

3. Restricciones:

--No se permiten películas con el mismo nombre (case-insensitive).
--El array debe contener objetos { id, nombre } (el id puede ser un número autoincremental o Date.now()).

4. Extras opcionales (para puntos extra en una entrevista):

--Botón "Editar" para modificar el nombre.
--Campo de búsqueda en tiempo real para filtrar las películas en la tabla.
--Guardar también la fecha de agregado y mostrarla en otra columna.

5. 💡 Pistas que esperarían que uses en una entrevista:

-- addEventListener para manejar clicks.
-- Delegación de eventos para botones dentro de la tabla.
-- localStorage.setItem() y localStorage.getItem() para persistencia.
-- .toLowerCase() para comparar nombres sin importar mayúsculas/minúsculas.
-- Manipulación del DOM con createElement o innerHTML.

*/


document.addEventListener('DOMContentLoaded', () => {

    const formPelis = document.getElementById('form-pelis');
    const inputPelis = document.getElementById('input-pelicula');
    const tbodyPelis = document.getElementById('tbody-pelis');

    let movies = [];

    function crearPelis(nombre) {
        return {
            id: Date.now().toString(),
            nombre: nombre.trim()
        }
    };

    // Renderizar una pelicula
    function renderPelis(peli) {
        const tr = document.createElement('tr');
        tr.dataset.id = peli.id;

        const tdNombre = document.createElement('td');
        tdNombre.textContent = peli.nombre;

        const tdAcciones = document.createElement('td');
        const btnEliminar = document.createElement('button');
        const btnEditar = document.createElement('button');


        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = 'btn-eliminar';
        btnEliminar.dataset.id = peli.id;

        // btnEditar.textContent = 'Editar';
        // btnEditar.className = 'btn-editar';
        // btnEditar.dataset.id = peli.id;

        tdAcciones.appendChild(btnEliminar);
        // tdAcciones.appendChild(btnEditar);

        tr.appendChild(tdNombre);
        tr.appendChild(tdAcciones);

        tbodyPelis.appendChild(tr)

    }

    // 🔹 Guardar en localStorage
    function saveMovies() {
        localStorage.setItem("movies", JSON.stringify(movies));
    }

    // 🔹 Cargar desde localStorage
    function loadMovies() {
        const stored = localStorage.getItem("movies");
        if (stored) {
            movies = JSON.parse(stored);
            movies.forEach(renderPelis);
        }
    }



    // manejo del submit
    formPelis.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = inputPelis.value;
        if (!nombre.trim()) {
            alert("Ingrese un nombre valido")
            return;
        }

        const nueva = crearPelis(nombre);
        movies.push(nueva);
        renderPelis(nueva);
        saveMovies();


        inputPelis.value = '';
        inputPelis.focus();


        console.log(movies);

    });

    // Eliminar
    // Escuchar clicks en el tbody (delegación)
    tbodyPelis.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-eliminar')) {
            const id = e.target.dataset.id; // obtenemos el id de la peli

            // quitar del array
            movies = movies.filter(peli => peli.id !== id);

            // quitar del array
            e.target.closest('tr').remove();

            // quitar del DOM
            saveMovies();

            console.log("Película eliminada:", id, movies);
        }


    });

    // Cargar al inciar la app, cargamos desde el localStorage
    loadMovies();

});