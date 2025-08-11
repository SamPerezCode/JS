// 🧩 Mini Reto #1 — Destructuración de Arrays
// 📦 Datos base:
console.clear()

const colores = ["rojo", "verde", "azul"];

// 🎯 1️⃣ Requerimiento
// Crea una función llamada mostrarColores que:
// Reciba el array colores como argumento.
// Use destructuración para obtener los tres colores.
// Imprima:

// Primer color: rojo
// Segundo color: verde
// Tercer color: azul

function mostrarColores(colores) {
    const [color1, color2, color3] = colores;
    // const [color1 = "N/A", color2 = "N/A", color3 = "N/A"] = colores; // Extra PRO: Con valores por defecto
    console.log(`Primer color: ${color1}`);
    console.log(`Segundo color: ${color2}`);
    console.log(`Tercer color: ${color3}`);
}


mostrarColores(["rojo", "verde", "azul"]);


// --------------------------------------------------------

// 🧩 Mini Reto #2 — Destructuración de Objetos en Parámetros
// 📦 Datos base:

const persona = {
    nombre: "Carla",
    edad: 29,
    ciudad: "Cali"
};

console.clear()

// 🎯 1️⃣ Requerimiento
// Crea una función presentarPersona que:
// Reciba un objeto como argumento
// Desestructure directamente en los parámetros
// Imprima: Hola, me llamo Carla, tengo 29 años y vivo en Cali.


function presentarPersona(persona) {
    const { nombre, edad = "Sam", ciudad } = persona;
    console.log(`Hola, me llamo ${nombre}, tengo ${edad} años  y vivo en ${ciudad}`)
}
presentarPersona(persona)

function presentarPersona2({ nombre = "Desconocido", edad = 0, ciudad = "Sin ciudad" } = {}) {
    console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
}

// presentarPersona2()
// presentarPersona2({ nombre: "Lucas",  });

// -----------------------------------------------------------------
// 🧩 Mini Reto #3 — Función segura con parámetros incompletos o vacíos
// 📦 Tu base:

const usuario1 = { nombre: "Laura", ciudad: "Bogotá" };
const usuario2 = { edad: 35 };
const usuario3 = {};

/*
🎯 Requerimiento
Crea una función llamada infoUsuario que:
Reciba un objeto con posibles propiedades: nombre, edad, ciudad
Desestructure los valores directamente en los parámetros
Use valores por defecto:

nombre → "Desconocido"
edad → 0
ciudad → "Sin ciudad"
Imprima: Nombre: X, Edad: Y, Ciudad: Z

*/

function infoUsuario({ nombre = "Desconocido", edad = 0, ciudad = "Sin ciudad" } = {}) {
    console.log(`Nombre: ${nombre} , Edad: ${edad}, Ciudad: ${ciudad}`)
}

infoUsuario(usuario1)
infoUsuario(usuario2)
infoUsuario(usuario3)
infoUsuario()
console.clear()
// -----------------------------------------------------------------

// 🧩 Mini Reto #4 — Mezclando Objetos y Arrays (ahora combinando objetos con arrays anidados, para entrenar la destructuración mixta.)
// 📦 Datos base:
const curso = {
    titulo: "JavaScript Pro",
    duracion: "4 semanas",
    estudiantes: ["Ana", "Carlos", "Luis"]
};

/*
🎯 Requerimiento
Crea una función llamada mostrarCurso que:

Reciba el objeto curso
Desestructure:
el titulo
la duracion
y el primer estudiante del array estudiantes

Imprima:
Curso: JavaScript Pro
Duración: 4 semanas
Primer estudiante: Ana

*/

// function mostrarCurso(curso) {
//     const { titulo, duracion, estudiantes: [estudiante1] } = curso;
//     // const {estudiante1, estudiante2, estudiante3} = estudiantes;
//     console.log(`Curso: ${titulo} \n Duración: ${duracion} \n Primer estudiante: ${estudiante1}`)

// }
// mostrarCurso(curso)

// opcion 2 Si no existe estudiantes:

function mostrarCurso2({
    titulo,
    duracion,
    estudiantes: [estudiante1 = "Sin estudiantes"] = []
} = {}) {
    console.log(`Curso: ${titulo} \n Duración: ${duracion} \n Primer estudiante: ${estudiante1}`)
}

mostrarCurso2(curso)

/*
¡Esooo, Sam! 🚀 Estás avanzando a toda máquina. Vamos con el Mini Reto #5, donde combinamos:

✅ Destructuración anidada
✅ Renombramiento de variables
✅ Valores por defecto
✅ Todo dentro del parámetro de la función

Esta es una práctica realista: así llegan los datos desde APIs en proyectos React. 💡

🧩 Mini Reto #5 — Nivel Pro
📦 Datos base:
*/

const respuestaAPI = {
    data: {
        usuario: {
            nombre: "Mariana",
            edad: 32,
            contacto: {
                email: "mariana@mail.com",
                telefono: "123456789"
            }
        }
    }
};

// 🎯 Requerimiento
// Crea una función llamada mostrarInfoUsuario que:
// Reciba el objeto respuestaAPI
// Desestructure directamente en los parámetros:

// nombre
// email (desde contacto)
// Renombre nombre como nombreUsuario
// Use valores por defecto si algo no viene:
// nombre = "Sin nombre"
// email = "Sin email"
// Imprima:
// Usuario: Mariana
// Email: mariana@mail.com

function mostrarInfoUsuario({
    data: {
        usuario: {
            nombre: nombreUsuario = "Sin nombre",
            contacto: {
                email = "Sin email"
            } = {}
        } = {}
    } = {}
} = {}) {
    console.log(` Usuario: ${nombreUsuario}, Email: ${email}`)
}

mostrarInfoUsuario(respuestaAPI)
