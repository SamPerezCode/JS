// 🔍 ¿Qué es la destructuración en JavaScript?
// La destructuración te permite extraer valores de arrays u objetos y asignarlos a variables de forma más concisa y legible.

// ✅ 1. Destructuración de Arrays
// 📦 Ejemplo básico:
const numeros = [1, 2, 3];
const [a, b, c] = numeros;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// 🎯 Puedes saltar valores:
const [primero, , tercero] = [10, 20, 30];
console.log(tercero); // 30

console.clear()


// 🎯 Puedes usar valores por defecto:

const [x = 1, y = 2] = [];
console.log(x); // 1

// ---------------------------------------------------------------------------------
// ✅ 2. Destructuración de Objetos
// 📦 Ejemplo básico:

const persona = {
    nombre: "Juan",
    edad: 30
};

const { nombre, edad } = persona;
console.log(nombre); // "Juan"
console.log(edad);   // 30

// 🎯 Puedes renombrar variables:
const { nombre: nombreUsuario } = persona;
console.log(nombreUsuario); // "Juan"

// 🎯 Puedes usar valores por defecto:
const { profesion = "Desconocida" } = persona;
console.log(profesion); // "Desconocida"


// ---------------------------------------------------------------------------------
// ✅ 3. Destructuración Anidada
// 📦 Cuando los objetos tienen estructuras internas, puedes hacer destructuración dentro de destructuración:

const persona2 = {
    nombre: "Ana",
    direccion: {
        ciudad: "Bogotá",
        zip: "110111"
    }
};

const { direccion: { ciudad, zip } } = persona2;
console.log(ciudad); // "Bogotá"
console.log(zip)

const datos = {
    usuario: "Pedro",
    cursos: ["JS", "React"]
};

const { cursos: [curso1, curso2] } = datos;
console.log(curso1); // "JS"
console.log(curso2)


// // ---------------------------------------------------------------------------------
// ✅ 4. En los parámetros de funciones
// 🎯 Puedes destructurar directamente al recibir argumentos:

const mostrarNombre = ({ nombre, edad }) => {
    console.log(`EL nombre es: ${nombre} y su edad es: ${edad}`);
};

const persona3 = { nombre: "Luis", edad: 28 };
mostrarNombre(persona3); // EL nombre es: Luis y su edad es: 28

console.clear()

console.log(persona3)
