// 🎯 Ejercicio: Mostrar usuarios desde una API

// Usaremos la API pública JSONPlaceholder, que devuelve datos falsos para pruebas.

// Endpoint:
// https://jsonplaceholder.typicode.com/users

// Objetivo:

// --Hacer un fetch a la API.
// --Convertir la respuesta en JSON.
// --Renderizar en el DOM una lista con:
// ---Nombre del usuario
// ---Email
// ---Ciudad donde vive

async function getUsuarios() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        console.log(data)
        renderUsers(data)
    } catch (error) {
        console.error('Error', error);
    }
}

getUsuarios();

function renderUsers(data) {
    const listUsers = document.querySelector('#container-lista');

    listUsers.innerHTML = '';

    data.forEach(u => {
        const item = document.createElement('div');
        item.classList.add('user-card');
        item.innerHTML = `
        <ul>
            <h4>User ${u.id}</h4>
            <li>${u.name}</li>
            <li>${u.email}</li>
            <li>${u.address.city}</li>
        </ul>
        `;
        listUsers.appendChild(item);

    });
}
document.querySelector('#reload').addEventListener('click', getUsuarios);
