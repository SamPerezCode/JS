// 📝 Mini desafío
// Dado este objeto:

const producto = {
    nombre: "Laptop",
    precio: 3500,
    disponible: true,
    marca: "Lenovo"
};

// Haz lo siguiente:

// 1. Recorre el objeto usando for...in e imprime cada clave y valor.

for (let clave in producto) {
    console.log(clave + " : " + producto[clave])
}

// 2. Usa Object.keys() y muestra todas las claves.
Object.keys(producto).forEach(clave => {
    console.log(clave)
})

for (let [clave, valor] of Object.entries(producto)) {
    console.log(clave + " : " + valor);
}