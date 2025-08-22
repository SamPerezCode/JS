// trabajaremos con la  pokeapi

// Metodo sin async 
// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("Terminó")
//     })



const listaPoke = document.querySelector('#lista-poke');

// Función para traer los datos
const fetchPoke = async () => {
    try {
        const pokeapi = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        const data = await pokeapi.json();
        console.log(data); // 👀 para ver la estructura
        renderPoke(data);
    } catch (err) {
        console.log(err);
    }
};

// Función para renderizar
function renderPoke(data) {
    // 'forms' es un array dentro de data
    data.forms.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name;
        listaPoke.appendChild(li);
        console.log(data.forms)
    });
}

// Ejecutamos la petición
fetchPoke();

