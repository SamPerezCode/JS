// 📝 Ejercicio: Renderizar publicaciones de la API

// 1. Consumir los posts desde la API de prueba:
// 👉 https://jsonplaceholder.typicode.com/posts

// 2. Renderizar un listado de los primeros 10 posts.

// 3. Cada post debe mostrar:

// -Título (title) en un <h3>.

// -Contenido (body) en un <p>.

// 4. Agregar un botón debajo de cada post que diga "Ver más".

// -Cuando se haga clic en ese botón, muestra en consola el id del post seleccionado.

document.addEventListener('DOMContentLoaded', () => {
    const containerPost = document.getElementById('container-posts');


    async function getPost() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            renderPost(data)

            console.log(data)
        } catch (error) {
            console.error('Error', error)
        }
    }

    getPost();

    function renderPost(data) {
        data.forEach(p => {

            const post = document.createElement('div');
            post.classList.add('post');
            post.innerHTML = '';

            post.innerHTML = `
                <h3>${p.title}</h3>
                <p>${p.body}</p>
                <button data-id="${p.id}" class='btn-ver-mas'>Ver más</button> 
            `;
            // data-id="${p.id}" → inserta el id del post en un atributo personalizado
            containerPost.appendChild(post);

        });
    }

    containerPost.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-ver-mas')) {
            const postId = e.target.dataset.id; // e.target.dataset.id → recupera ese id fácilmente.
            console.log("ID del post seleccionado:", postId); // classList.contains('btn-ver-mas') → asegura que el click vino del botón.
            const morePost = document.createElement('div');
            morePost.classList.add('mostrar-mas');
            morePost.innerHTML = `<p>ID del post: ${postId}</p>`;

            // Insertamos el div justo debajo del botón clickeado
            e.target.parentElement.appendChild(morePost);


        }
    })

    // Otra manera de hacerlo

    // containerPost.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('btn-ver-mas')) {
    //         const postId = e.target.getAttribute('data-id'); // ⬅ aquí obtenemos el id Recuperamos el id con getAttribute('data-id').
    //         console.log("Click en botón, id del post:", postId);
    //     }
    // });


})

