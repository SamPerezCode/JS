// 🚀 MiniReto PRO: Plataforma de Cursos
// 📚 Escenario
const estudiantes = [
    {
        nombre: "Ana",
        cursos: [
            { nombre: "React", calificacion: 85 },
            { nombre: "JS", calificacion: 90 }
        ]
    },
    {
        nombre: "Luis",
        cursos: [
            { nombre: "React", calificacion: 70 },
            { nombre: "JS", calificacion: 65 }
        ]
    },
    {
        nombre: "Pedro",
        cursos: [
            { nombre: "React", calificacion: 95 },
            { nombre: "JS", calificacion: 88 }
        ]
    },
    {
        nombre: "Sara",
        cursos: [
            { nombre: "React", calificacion: 60 },
            { nombre: "JS", calificacion: 75 }
        ]
    }
];

// 🎯 Tareas


// ----------------------------------------------------------------
// 1️⃣ Filtra los estudiantes que tienen todas sus calificaciones mayores o iguales a 70. (Hint: combina filter + every)
const estudiantesAprobados = estudiantes.filter(estudiante => {
    return estudiante.cursos.every(curso => curso.calificacion >= 70)
})
console.log(estudiantesAprobados)


// ----------------------------------------------------------------

// 2️⃣ Crea un nuevo array con objetos:
// { nombre: "Ana", promedio: 87.5 }
// Para cada estudiante, calcula el promedio usando reduce.
const promedios = estudiantes.map(estudiante => {
    const suma = estudiante.cursos.reduce((acc, curso) => acc + curso.calificacion, 0);
    const promedio = suma / estudiante.cursos.length;

    return {
        nombre: estudiante.nombre,
        promedio: promedio
    };
});

console.log(promedios);

// ----------------------------------------------------------------

// 3️⃣ Verifica si al menos un estudiante sacó 100 en alguno de sus cursos. (Hint: some + some anidado)

const verfEstudiante = estudiantes.some(est => {
    return est.cursos.some(curso => curso.calificacion === 100);
})
console.log(verfEstudiante)
// ----------------------------------------------------------------
// 4️⃣ Crea un array solo con los nombres de estudiantes reprobados (promedio < 70).

const reprobados = promedios
    .filter(est => est.promedio < 70)
    .map(est => est.nombre);

console.log(reprobados);
// 🔑 Clave mental:
// .filter → reduce la lista a los que cumplen la condición.
// .map → transforma la lista filtrada para devolver solo lo que quieres ver (en este caso, nombres).


// ----------------------------------------------------------------
// 5️⃣ Recorre con forEach y muestra:
// "Ana tiene un promedio de 87.5: Aprobado"
// o
// "Sara tiene un promedio de 67.5: Reprobado"
// según su promedio.

promedios.forEach(est => {
    if (est.promedio > 70) {
        console.log(`${est.nombre} tiene un promedio de ${est.promedio}: Aprobado`)
    } else {
        console.log(`${est.nombre} tiene un promedio de ${est.promedio}: Reprobado`)
    }
})
