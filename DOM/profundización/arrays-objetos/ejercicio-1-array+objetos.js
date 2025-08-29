// 💡 Ejercicio Propuesto (arrays + objetos)
// Crea un array de objetos con 3 usuarios:

const usuarios = [
    { id: 1, nombre: "Ana", edad: 20 },
    { id: 2, nombre: "Luis", edad: 25 },
    { id: 3, nombre: "Marta", edad: 30 }
];

// Usa:

// 1. .map → lista de nombres.
// 2. .filter → usuarios mayores de 22.
// 3. .find → el usuario con id = 2.
// 4. .some → ¿alguno tiene menos de 18?
// 5. .reduce → promedio de edades.
console.clear()

const listaNombres = usuarios.map(u => u.nombre);
console.log(listaNombres);

const usuariosMayores22 = usuarios.filter(u => u.edad > 22);
console.log(usuariosMayores22)

const usuarioId2 = usuarios.find(u => u.id === 2);
console.log(usuarioId2);

const usuarioMenor18 = usuarios.some(u => u.edad < 18);
console.log(usuarioMenor18)

const sumaEdades = usuarios.reduce((acc, u) => acc + u.edad, 0);
const promedioSumaEdades = sumaEdades / usuarios.length

console.log(promedioSumaEdades)


