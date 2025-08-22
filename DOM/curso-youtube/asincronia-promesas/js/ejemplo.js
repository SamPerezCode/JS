const baseDeDatos = [
    { id: "1", nombre: "Silla", precio: 1500 },
    { id: "2", nombre: "Sillón", precio: 2500 },
    { id: "3", nombre: "Puerta", precio: 3500 },
    { id: "4", nombre: "Ventana", precio: 4500 }
];


const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(baseDeDatos)
        }, 2000);
    })
}


let productos = [];
const lista = document.querySelector('#lista-productos');

function mostrarProductos(array) {
    array.forEach(item => {
        const li = document.createElement('li');
        li.id = item.id;
        li.textContent = `${item.nombre} - ${item.precio}`
        lista.append(li)
    });
}

pedirProductos()
    .then((res) => {
        productos = res;
        console.log(productos)
        mostrarProductos(productos);
    })