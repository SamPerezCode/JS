

document.addEventListener('DOMContentLoaded', () => {
    const movieName = document.querySelector('#nombre-pelicula');
    const movieGenero = document.querySelector('#genero');
    const movieAñoEstreno = document.querySelector('#año-estreno');
    const movieForm = document.querySelector('#form-pelis');
    const tbody = document.querySelector('#tbody-peliculas');

    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    function renderMovies() {


        tbody.innerHTML = '';

        movies.forEach((movie, index) => {

            const { nombre, genero, año } = movie
            const row = `
                <tr>
                    <td>${nombre}</td>
                    <td>${genero}</td>
                    <td>${año}</td>
                    <td><button class="delete-btn" data-index="${index}">Eliminar</button></td>
                </tr>
            `;
            tbody.innerHTML += row;

        });
        console.log(movies)

        localStorage.setItem('movies', JSON.stringify(movies));
    };


    function addMovie() {
        const newMovieName = movieName.value.trim();
        const newMovieGenero = movieGenero.value.trim();
        const newMovieAñoEstreno = movieAñoEstreno.value.trim();

        if (newMovieName && newMovieAñoEstreno && newMovieGenero) {
            movies.push({
                nombre: newMovieName,
                genero: newMovieGenero,
                año: newMovieAñoEstreno
            });

            movieName.value = '';
            movieGenero.value = '';
            movieAñoEstreno.value = '';

            renderMovies();
        }
    }

    movieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addMovie();
    })


    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            movies.splice(index, 1);
            renderMovies();
        }
    })


    renderMovies();
})