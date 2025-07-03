/*
🧱 PARTE 1: Fundamentos de los Objetos

🔹 ¿Qué es un objeto?
Un objeto es una colección de pares clave: valor.
Se usa para representar entidades completas, como un usuario, un producto, un carro, etc.
*/

const usuario = {
    nombre: "Ana",
    edad: 25,
    activo: true
};

console.log(usuario)

/*
🔹 ¿Cómo acceder a sus datos?
| Tipo de acceso | Sintaxis           | Ejemplo                    |
| -------------- | ------------------ | -------------------------- |
| Punto          | `obj.propiedad`    | `usuario.nombre` → `"Ana"` |
| Corchetes      | `obj["propiedad"]` | `usuario["edad"]` → `25`   |
| Dinámico       | `obj[variable]`    | `usuario[prop]`            |

🛠️ Parte práctica rápida
*/

const persona = {
    nombre: "Carlos",
    profesion: "Diseñador"
};

console.log(persona.nombre);         // Carlos
console.log(persona["profesion"]);  // Diseñador

// let clave = "nombre";
// console.log(persona[clave]);        // Carlos

/*
✏️ Mini ejercicios (resuélvelos tú)
Crea un objeto libro con propiedades: titulo, autor, paginas, publicado.

Imprime el autor usando acceso con punto.

Imprime el título usando acceso con corchetes.

Crea una variable clave = "paginas" y accede dinámicamente.
*/

const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel Garcia Marquez",
    paginas: 200,
    publicado: 2002
}

console.log(libro.autor);
console.log(libro["titulo"]);

let clave = "paginas";
console.log(libro[clave]);

// 🧱 PARTE 2: Modificar, agregar y eliminar propiedades
// 🛠️ Agregar propiedad:
persona.edad = 30;
console.log(persona);

// 🛠️ Modificar propiedad:
persona.nombre = "Andrés";
console.log(persona);

// 🛠️ Eliminar propiedad:

delete persona.profesion;
console.log(persona)

// ✏️ Mini reto de edición
// Dado este objeto:

const mascota = {
    nombre: "Luna",
    tipo: "Perro",
    edad: 4
};

/*
Haz lo siguiente:

--Cambia el nombre a "Max".
--Agrega una propiedad vacunado en true.
--Elimina la propiedad edad.
*/

mascota.nombre = "Max";
console.log(mascota)
mascota.vacunado = true;
console.log(mascota);
delete mascota.edad;
console.log(mascota)

const clave1 = "tipo";
console.log(mascota[clave1])
