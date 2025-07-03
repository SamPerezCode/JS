const usuarios = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 30 }
];

// Puedes recorrerlo como un array normal:
usuarios.forEach(u => {
    // console.log(u.nombre + " tiene " + u.edad + " años");
    console.log(`${u.nombre} tiene ${u.edad} años`)
});

