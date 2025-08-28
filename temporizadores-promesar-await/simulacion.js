// Base de datos simulada
const peliculasDB = [
    { id: 1, titulo: "Inception", anio: 2010 },
    { id: 2, titulo: "Interstellar", anio: 2014 },
    { id: 3, titulo: "The Dark Knight", anio: 2008 }
];

// Función que simula pedir películas al "servidor"
function obtenerPeliculas() {
    return new Promise((resolve, reject) => {
        console.log("📡 Consultando servidor de películas...");

        setTimeout(() => {
            if (peliculasDB.length > 0) {
                resolve(peliculasDB);
            } else {
                reject("❌ No hay películas disponibles");
            }
        }, 2000);
    });
}

// Usando then/catch

// obtenerPeliculas(peliculasDB)
//     .then(peliculas => {
//         console.log('Lista de peliculas recibidas:');
//         peliculas.forEach(p => console.log(`${p.titulo} estrenada en el año ${p.anio}`));
//     })
//     .catch(error => console.log('Error', error))


async function mostrarPeliculas() {
    try {
        let peliculas = await obtenerPeliculas();
        console.log("\n📀 Mostrando películas con async/await:");
        peliculas.forEach(p => console.log(`- ${p.titulo} (${p.anio})`));
    } catch (error) {
        console.error('Error', error)
    }
}
mostrarPeliculas()