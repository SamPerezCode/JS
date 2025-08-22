const apiUrl = 'https://rickandmortyapi.com/api/character';

async function getCharacters() {
    // todas las peticiones por defecto con fetch don GET
    // fetch me devuelve una promesa ue puede ser exitosa o null, async me permite usaar el await

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const { results } = data //aquí destructuro dat para obtener solo los resultados
        console.log(results)
        renderCardsApi(results);
        // throw new Error('Error: Api')  con esto pruebo si el error funciona
    } catch (error) {
        console.error(error)
    }

}


const renderCardsApi = (results) => {

    const cardsContainer = document.querySelector('#container-cards');
    cardsContainer.innerHTML = '';

    results.forEach(({ name, species, status, image }) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h5');
        title.textContent = name;

        const statusCards = document.createElement('p');
        statusCards.textContent = `Status: ${status}`;

        const speciesCards = document.createElement('p');
        speciesCards.textContent = `Species: ${species}`;

        const imageCards = document.createElement('img');
        imageCards.src = image;
        imageCards.alt = name;
        imageCards.classList.add('logo');

        card.appendChild(title);
        card.appendChild(statusCards);
        card.appendChild(speciesCards);
        card.appendChild(imageCards);

        cardsContainer.appendChild(card);



    });


}

getCharacters();