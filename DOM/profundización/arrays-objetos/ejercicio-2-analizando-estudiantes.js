console.clear()

// 🚀 Ejercicio: "Analizando estudiantes"
// Imagina que tienes este arreglo de estudiantes:

const estudiantes = [
    { id: 1, nombre: "Ana", edad: 20, curso: "React", calificaciones: [4.5, 3.8, 4.2] },
    { id: 2, nombre: "Luis", edad: 23, curso: "Node.js", calificaciones: [3.5, 4.0, 3.9] },
    { id: 3, nombre: "Marta", edad: 19, curso: "React", calificaciones: [4.8, 4.7, 4.9] },
    { id: 4, nombre: "Pedro", edad: 25, curso: "JavaScript", calificaciones: [3.2, 3.6, 3.9] },
    { id: 5, nombre: "Laura", edad: 22, curso: "React", calificaciones: [4.1, 4.3, 4.0] }
];

/*
🎯 Retos:

1. Lista de nombres de estudiantes → usando map.
2. Filtrar los estudiantes del curso "React" → usando filter.
3. Encontrar al estudiante con id = 3 → usando find.
4. Saber si existe algún estudiante menor de 18 años → usando some.
5. Calcular el promedio de todas las calificaciones de todos los estudiantes → usando reduce.
6. Crear un ranking de estudiantes con su promedio de notas
    → map para sacar el promedio de cada uno y ordenar de mayor a menor con sort.
7. Obtener el nombre del mejor estudiante del curso React
    → combinación de filter, map y reduce o sort.
*/

// 1.
const listaNombresEstudiantes = estudiantes.map(e => e.nombre);
console.log(listaNombresEstudiantes);
// 2.
const estudiantesReact = estudiantes.filter(e => e.curso === "React");
console.log(estudiantesReact);
// 3.

const estudianteId3 = estudiantes.find(e => e.id === 3);
console.log(estudianteId3);
// 4. 
const estudianteMenor18 = estudiantes.some(e => e.edad < 18);
console.log(estudianteMenor18);
// 5. 
function promedioCalificaciones() {
    const sumaCalificaciones = estudiantes.reduce((acc, e) => acc + e.calificaciones.forEach, 0)
    console.log(sumaCalificaciones)
}
promedioCalificaciones()
