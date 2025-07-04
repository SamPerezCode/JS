/*
🗂️ Plan de Objetos (nivel PRO)
1️⃣ Recordatorio rápido: qué son, cómo se crean y cómo se accede.
2️⃣ Operaciones clave: agregar, actualizar, eliminar propiedades.
3️⃣ Recorrer objetos: for...in, Object.keys(), Object.values(), Object.entries().
4️⃣ Combinar objetos y arrays: objetos dentro de arrays, arrays dentro de objetos.
5️⃣ Destructuración: cómo sacar propiedades fácilmente.
6️⃣ Métodos de objetos: cómo un objeto puede tener funciones internas.
7️⃣ Mini retos guiados: situaciones realistas de nivel pro.
8️⃣ Reto final: mezcla todo: recorrer, modificar, filtrar, sumar, validar claves, etc.


// -------------------------------------------------------------------------

✅ 1️⃣ Recordatorio rápido
Un objeto es una colección de pares clave : valor.
*/
const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Bogotá",
};
console.log(persona)

//-- Accedes con punto: persona.nombre

//--O con corchetes: pers--ona["nombre"]
// -------------------------------------------------------------------------
// ✅ 2️⃣ Operaciones clave
// 🟢 Agregar propiedad
persona.profesion = "Ingeniera";

// 🟢 Actualizar propiedad
persona.edad = 26;

// 🟢 Eliminar propiedad
delete persona.ciudad;

// -------------------------------------------------------------------------
// ✅ 3️⃣ Recorrer un objeto
// for...in
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
// nombre: Ana
// edad: 26
// profesion: Ingeniera
// ---------------------

// Object.keys()
Object.keys(persona).forEach(clave => {
    console.log(clave);
});
// nombre
// edad
// profesion
// ---------------------

// Object.values()
Object.values(persona).forEach(valor => {
    console.log(valor);
});
// Ana
// 26
// Ingeniera
// ---------------------

// Object.entries()
Object.entries(persona).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});
// nombre: Ana
// edad: 26
// profesion: Ingeniera

// ✅ 4️⃣ Objetos y arrays combinados
// Array de objetos 

const personas = [
    { nombre: "Luis", edad: 20 },
    { nombre: "Ana", edad: 25 }
];

// Objeto con array
const estudiante = {
    nombre: "Carlos",
    cursos: ["JS", "React", "Node"]
};

// ✅ 5️⃣ Destructuración
// Extrae propiedades en variables:
const { nombre, edad } = persona;
console.log(nombre); // Ana
console.log(edad);   // 26

// ✅ 6️⃣ Métodos dentro de objetos
// Un objeto puede tener funciones:
const mascota = {
    nombre: "Fido",
    ladrar() {
        console.log("Guau Guau!");
    }
};

mascota.ladrar(); // Guau Guau!

// 🚀 Reto combinado: Gestión de Biblioteca
const biblioteca = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", disponible: true },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", disponible: false },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", disponible: true },
];

// 🎯 Tareas
// 1️⃣ Agrega un nuevo libro:
// "Crónica de una muerte anunciada", autor "Gabriel García Márquez", disponible true.
// 2️⃣ Cambia la disponibilidad de "Don Quijote de la Mancha" a true.
// 3️⃣ Elimina el libro "El Principito".
// 4️⃣ Recorre la biblioteca y muestra:
// "El libro '...' de ... está disponible" o "no está disponible".
// 5️⃣ Crea un array con solo los títulos de los libros disponibles.
// 6️⃣ Usa find() para ubicar un libro de "Gabriel García Márquez".
// 7️⃣ Crea una propiedad nueva genero para todos los libros restantes y ponles "Literatura".

// 1.
biblioteca.push({ titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", disponible: true });
console.log(biblioteca);

// 2.

const libroDonQuijote = biblioteca.find(libro => libro.titulo === "Don Quijote de la Mancha");
libroDonQuijote.disponible = true;

console.log(biblioteca);

// 3.
const indicePrincipito = biblioteca.findIndex(libro => libro.titulo === "El Principito");
console.log(indicePrincipito)

if (indicePrincipito !== -1) {
    biblioteca.splice(indicePrincipito, 1); // 1 elemento desde ese índice
}
console.log(biblioteca);

// ⚡ Clave mental
// find() → devuelve el objeto que cumple la condición.
// findIndex() → devuelve la posición (número).
// splice() → elimina posiciones específicas.

// 4. 
for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].disponible === true) {
        console.log(`El libro de ${biblioteca[i].titulo} de ${biblioteca[i].autor} esta disponible`)
    } else {
        console.log(`El libro de ${biblioteca[i].titulo} de ${biblioteca[i].autor} no esta disponible`)
    }
}

// otra versióon del punto 4:
for (let i = 0; i < biblioteca.length; i++) {
    const libro = biblioteca[i];
    if (libro.disponible) {
        console.log(`El libro '${libro.titulo}' de ${libro.autor} está disponible`);
    } else {
        console.log(`El libro '${libro.titulo}' de ${libro.autor} no está disponible`);
    }
}

// 5.
const librosDisponibles = biblioteca
    .filter(libro => libro.disponible === true)
    .map(libro => libro.titulo)
console.log(librosDisponibles)

// 🔑 Punto PRO
// filter filtra objetos.
// map transforma cada objeto a lo que quieras devolver.
// Encadenar los dos es patrón PRO y se usa muchísimo en React (cuando filtramos listas de datos antes de renderizar).

// 6.
const libroGabrielGarcia = biblioteca.find(libro => libro.autor === "Gabriel García Márquez");
console.log(libroGabrielGarcia);


for (let i = 0; i < biblioteca.length; i++) {
    biblioteca[i].genero = "Literatura"
}
console.log(biblioteca)
// Opción 2:
// biblioteca.forEach(libro => {
//     libro.genero = "Literatura";
// });

// console.log(biblioteca);


// 📚 Reto Avanzado — Nivel PRO
// 🧩 Contexto: Gestión de Estudiantes

const estudiantes = [
    { nombre: "Ana", edad: 17, curso: "JS Básico", activo: true },
    { nombre: "Luis", edad: 20, curso: "React", activo: false },
    { nombre: "Carlos", edad: 22, curso: "Node.js", activo: true },
    { nombre: "María", edad: 19, curso: "React", activo: true }
];

const cursos = [
    { nombre: "JS Básico", cupos: 10, edadMinima: 16 },
    { nombre: "React", cupos: 5, edadMinima: 18 },
    { nombre: "Node.js", cupos: 7, edadMinima: 18 }
];

/*
🎯 Tareas nivel PRO
1️⃣ Usa find() para ubicar a "Luis" y cambiar su estado activo a true.
2️⃣ Verifica si "Luis" cumple con la edad mínima de su curso (React). Usa find() para traer su curso y comparar.
3️⃣ Resta 1 cupo en el curso "React" solo si "Luis" está activo y cumple la edad.
4️⃣ Crea un array nuevo con los nombres de estudiantes activos mayores de edad.
5️⃣ Usa every() para validar que todos los cursos tengan cupos > 0.
6️⃣ Usa reduce() para sumar la edad de todos los estudiantes activos.
7️⃣ Agrega una propiedad nueva nivel: "Intermedio" a todos los estudiantes del curso "React".
8️⃣ Crea una función describirEstudiante() dentro de cada objeto estudiante que imprima:
"Luis está inscrito en React, tiene 20 años y está activo."
(💡 Solo agrégala a uno de ellos como prueba.)
*/
// 1.
const findLuis = estudiantes.find(estudiante => estudiante.nombre === "Luis");
console.log(findLuis)
findLuis.activo = true;
console.log(estudiantes);
// 2.
const cursoReact = cursos.find(curso => curso.nombre === "React");
console.log(cursoReact)
if (findLuis.edad >= cursoReact.edadMinima) {
    console.log(`Luis cumple con la edad minima`)
} else {
    console.log("Luis no cumple con la edad minima")
}
// 3. 
if (findLuis.activo === true && findLuis.edad >= cursoReact.edadMinima) {
    cursoReact.cupos = cursoReact.cupos - 1
    console.log(cursoReact.cupos);
} else {
    console.log(`Luis no esta activo o no cumple la edad`)
}

// 4.
const nuevosEstudiantes = estudiantes
    .filter(estudiante => estudiante.activo === true)
    .filter(estudiante => estudiante.edad >= 18);

console.log(nuevosEstudiantes);

// 5.
const cursosConCupos = cursos.every(curso => curso.cupos > 0);
console.log(cursosConCupos)

// 6.
const estudiantesActivos = estudiantes.filter(estudiante => estudiante.activo === true);
const edadEstudiantesActivos = estudiantesActivos.reduce((acc, estudiante) => {
    return acc + estudiante.edad;
}, 0)

console.log(edadEstudiantesActivos)

// ✅ Ahora:
// acc = acumulador
// estudiante = cada objeto filtrado
// estudiante.edad = el número que necesitas sumar

// 7.
cursoReact.nivel = "Intermedio";
console.log(cursos);

estudiantes.forEach() {

}