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
// -------------------------------------------------------

// 2.
const estudiantesReact = estudiantes.filter(e => e.curso === "React");
console.log(estudiantesReact);
// -------------------------------------------------------

// 3.

const estudianteId3 = estudiantes.find(e => e.id === 3);
console.log(estudianteId3);
// -------------------------------------------------------

// 4. 
const estudianteMenor18 = estudiantes.some(e => e.edad < 18);
console.log(estudianteMenor18);
// -------------------------------------------------------

// 5. 
function promedioCalificaciones() {
    const sumaCalificaciones = estudiantes.reduce((acc, e) => {
        const sumaAlumno = e.calificaciones.reduce((suma, c) => suma + c, 0);

        return acc + sumaAlumno;
    }, 0);

    const totalNotas = estudiantes.reduce((acc, e) => acc + e.calificaciones.length, 0);

    const promedioGeneral = sumaCalificaciones / totalNotas
    console.log(promedioGeneral)

}
promedioCalificaciones()

// -------------------------------------------------------
// .6

const promedioTotal = estudiantes.map(e => {
    const sumaNotas = e.calificaciones.reduce((acc, nota) => acc + nota, 0)
    const promedio = sumaNotas / e.calificaciones.length
    return {
        nombre: e.nombre,
        curso: e.curso,
        promedio: promedio
    }
})
console.log(promedioTotal)

// Ordenar de mayor a menor 
const promedioTotalOrdenado = promedioTotal.sort((a, b) => b.promedio - a.promedio);
console.log(promedioTotalOrdenado)

// promedioPorEstudiante()
console.clear()


// 7
function mejorEstReact() {
    const estReact = promedioTotalOrdenado.filter(est => est.curso === 'React');
    console.log(estReact)
    const mejor = estReact.reduce((max, est) => {
        return (est.promedio > max.promedio) ? est : max;
    });

    console.log("El mejor estudiante de React es:", mejor.nombre, "con promedio:", mejor.promedio);
}

mejorEstReact()

/*
1. ¿Qué es .reduce?

--reduce recorre un array y acumula un solo valor.
--Ese valor acumulado puede ser un número, un objeto o lo que quieras.

----Se usan dos parámetros principales:
----max → el acumulador (lo que llevas hasta ahora).

est → el elemento actual del array.

2. Cómo funciona en este caso

--estReact es un array de estudiantes de React.

--Queremos quedarnos con el que tenga el promedio más alto.

En cada iteración:

--Compara est.promedio (promedio del estudiante actual) con max.promedio (el mejor promedio encontrado hasta ahora).
--Si el promedio del actual (est) es mayor → lo devuelve como el nuevo max.
--Si no → mantiene el que ya estaba (max).

otra forma con un for

function mejorEstReactFor() {
    const estReact = promedioTotalOrdenado.filter(est => est.curso === 'React');

    let mejor = estReact[0]; // arrancamos suponiendo que el primero es el mejor

    for (let i = 1; i < estReact.length; i++) {
        if (estReact[i].promedio > mejor.promedio) {
            mejor = estReact[i]; // reemplazo al mejor actual
        }
    }

    console.log("El mejor estudiante de React es:", mejor);
}


*/

