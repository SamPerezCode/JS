async function obtenerPokemones() {
    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
        let data = await respuesta.json();

        const { results } = data;
        console.log(results);

        // Mapeamos results -> array de detalles con otro fetch
        const detalles = await Promise.all(
            results.map(async ({ name, url }) => {
                const res = await fetch(url);
                const dataPoke = await res.json();

                return {
                    name,
                    imagen: dataPoke.sprites.other['official-artwork'].front_default
                };
            })
        );

        renderPokemon(detalles);
    } catch (error) {
        console.error("Error al obtener el Pokémon", error);
    }
}

const renderPokemon = (pokemones) => {
    const containerPokemones = document.querySelector('.pokemons');
    containerPokemones.innerHTML = '';

    pokemones.forEach(({ name, imagen }) => {
        const cardPokemon = document.createElement('div');
        cardPokemon.classList.add('card-pokemon');

        const titulo = document.createElement('h3');
        titulo.textContent = name;

        const imagenPoke = document.createElement('img');
        imagenPoke.src = imagen;
        imagenPoke.alt = name;

        cardPokemon.appendChild(titulo);
        cardPokemon.appendChild(imagenPoke);

        containerPokemones.appendChild(cardPokemon);
    });
};

obtenerPokemones();
