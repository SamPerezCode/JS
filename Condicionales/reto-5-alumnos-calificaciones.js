// 🎯 MiniReto
// MiniReto Pro para reforzar: .filter(), .map(), .reduce(), .some(), .every() — todo en un solo escenario práctico.

const alumnos = [
    { nombre: "Ana", calificacion: 85 },
    { nombre: "Luis", calificacion: 72 },
    { nombre: "Pedro", calificacion: 95 },
    { nombre: "María", calificacion: 60 },
    { nombre: "Sara", calificacion: 78 }
];

/*
📌 Tareas
1️⃣ Filtra solo a los alumnos que aprobaron (nota ≥ 70).
2️⃣ Crea un nuevo array con objetos:
{ nombre: "Ana", estado: "Aprobado" }
    Si la nota es ≥ 70, estado es "Aprobado", si no "Reprobado".
3️⃣ Calcula el promedio general de calificaciones con .reduce().
4️⃣ Verifica si al menos un alumno sacó más de 90.
5️⃣ Verifica si todos los alumnos pasaron.
6️⃣ Muestra un mensaje por cada alumno así:
"Ana tiene 85 puntos: Aprobado"
Usa .forEach().
*/
// 1.
const alumnosAprobados = alumnos.filter(alumno => alumno.calificacion >= 70);
console.log(alumnosAprobados);

// 2.
const newAlumnosAprobados = alumnos.map(alumno => {
    let estadoEstudiante;
    if (alumno.calificacion >= 70) {
        estadoEstudiante = "Aprobado"
    } else {
        estadoEstudiante = "Reprobado"
    }
    // 💡 TIP: Podrías simplificar usando ternario:
    // estado: alumno.calificacion >= 70 ? "Aprobado" : "Reprobado"

    return {
        nombre: alumno.nombre,
        estado: estadoEstudiante
    }
})

console.log(newAlumnosAprobados);

// 3.
const promedio = alumnos
    .reduce((acc, item) => acc + item.calificacion, 0)
const promedioCalificaciones = promedio / alumnos.length;
console.log(promedioCalificaciones);

// 4.
const alumno90 = alumnos
    .some(alumno => alumno.calificacion > 90);
console.log(alumno90);

// 5.

const verifAlumnosPasaron = alumnos.every(alumno => alumno.calificacion >= 70);
console.log(verifAlumnosPasaron)

// 6.

alumnos.forEach(alumno => {
    if (alumno.calificacion >= 70) {
        console.log(`${alumno.nombre} tiene ${alumno.calificacion} puntos: Aprobado`)
    } else {
        console.log(`${alumno.nombre} tiene ${alumno.calificacion} puntos: Reprobado`)
    }
})
