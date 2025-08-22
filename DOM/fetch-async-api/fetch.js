/*
🟡 Uso real con APIs (fetch + render dinámico con async/await)

Este es un punto clave porque aquí se une:

--Asincronía (async/await)
--Consumo de APIs (fetch)
--Render dinámico en el DOM

Tal cual como se usa en apps modernas y en React (useEffect + map).

🔹 Paso 1: Entender fetch

fetch devuelve una Promise, que representa la petición HTTP.
El flujo básico es:
const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
const data = await respuesta.json();
console.log(data);

*/

// const listaPoke = document.querySelector('#lista-poke');

// const fetchPokemos = async () => {
//     try {
//         const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
//         const data = await respuesta.json();


//         // Aquí data.results es un array con los nombres + URLs de detalle
//         const detalles = await Promise.all(
//             data.results.map(async (poke) => {
//                 const resPoke = await fetch(poke.url);
//                 return await resPoke.json();
//             })
//         );
//         console.log(detalles)

//         renderPokemos(detalles);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };

// function renderPokemos(pokemons) {
//     listaPoke.innerHTML = '';

//     pokemons.forEach(p => {

//         const card = document.createElement('div');
//         card.classList.add('cards');
//         card.innerHTML = `
//         <h3>${p.name}</h3>
//         <img src="${p.sprites.front_default}" alt="${p.name}">
//         <p>Tipo: ${p.types.map(t => t.type.name).join(", ")}</p>
//         <p>Peso: ${p.weight}</p>
//         <p>Peso: ${p.species}</p>
//     `;
//         listaPoke.appendChild(card);
//     });
// }

const listaPoke = document.querySelector('#lista-poke');
const fetchPikachu = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        const data = await res.json();

        console.log(data)
        console.log(data.name);
        console.log(data.sprites.front_default);
        console.log(data.types.map(t => t.type.name))

        renderPikachu(data)
    } catch (error) {
        console.error('Error', error)
    }
}

const renderPikachu = (poke) => {
    listaPoke.innerHTML = '';
    // 1. creo el elemento donde se agregara el contenido
    const card = document.createElement('div');
    card.classList.add('cards');
    card.innerHTML = `
        <h3>${poke.name}</h3>
        <img src="${poke.sprites.front_default}" alt="">
        <p>${poke.types.map(t => t.type.name).join(',')}</p>
        <p></p>

    `;
    listaPoke.appendChild(card);


}

fetchPikachu();
