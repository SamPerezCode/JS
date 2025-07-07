/*
🏆 Desafío Final Arrays + Objetos
🎓 Nivel: Prueba Técnica

🗂️ Contexto
Eres el encargado de gestionar una plataforma de cursos online.
Tienes arrays de estudiantes y cursos con propiedades clave.
*/
const estudiantes = [
    { nombre: "Ana", edad: 20, curso: "JS", activo: true },
    { nombre: "Luis", edad: 17, curso: "React", activo: false },
    { nombre: "Carlos", edad: 25, curso: "Node", activo: true },
    { nombre: "María", edad: 19, curso: "React", activo: true },
    { nombre: "Pedro", edad: 22, curso: "JS", activo: true }
];

const cursos = [
    { nombre: "JS", cupos: 5, nivel: "Básico", edadMinima: 18 },
    { nombre: "React", cupos: 3, nivel: "Intermedio", edadMinima: 18 },
    { nombre: "Node", cupos: 2, nivel: "Avanzado", edadMinima: 21 }
];

/*
🎯 Tareas Nivel PRO
1️⃣ Buscar y activar a Luis → Si Luis existe, cámbialo a activo: true.

2️⃣ Verificar si Luis cumple la edad para su curso.
➜ Usa find para traer el curso de Luis y compara edad.

3️⃣ Si cumple, descuenta 1 cupo en React.

4️⃣ Crea un array con los nombres de los estudiantes activos mayores de edad.

5️⃣ Usa every para validar que todos los cursos tengan cupos > 0.

6️⃣ Suma la edad total de los estudiantes activos usando reduce.

7️⃣ Agrega la propiedad nivel: "Intermedio" a todos los estudiantes de React.

8️⃣ Agrega un método describir a cada estudiante:
Devuelve:
"Ana está inscrito en JS, tiene 20 años y está activo."
➜ Llama ese método con forEach y muestra todos.

9️⃣ Crea un array con los cursos que aún tienen cupos usando filter.

10️⃣ Extra PRO: Usa map para crear un array con strings de este estilo:
"Curso JS (Nivel: Básico) — Cupos: 5".
*/

// 1.
const luis = estudiantes.find(est => est.nombre === "Luis");
console.log(luis)
luis.activo = true;
console.log(luis);

// 2.
const cursoLuis = cursos.find(curso => curso.nombre === luis.curso);
console.log(cursoLuis)

if (luis.edad >= cursoLuis.edadMinima) {
    console.log(`luis cumple con la edad minima`)
} else {
    console.log('Luis no cumple con la edad minima')
}

// 3.
cursoLuis.cupos = cursoLuis.cupos - 1;
console.log(cursos)

// 4.

const estudiantesActivos = estudiantes
    .filter(est => est.activo === true)
    .filter(est => est.edad >= 18);

console.log(estudiantesActivos);

// 5.
const cuposCursos = cursos.every(curso => curso.cupos > 0);
console.log(cuposCursos);

// 6.
const estActivos = estudiantesActivos.reduce((acc, est) => {
    return est.edad + acc;
}, 0)

console.log(estActivos);

// 7.

const estReact = estudiantes.filter(est => est.curso === "React");

estReact.forEach(est => {
    est.nivel = "Intermedio"
})
console.log(estReact)
console.log(estudiantes)

// 8.

estudiantes.forEach(est => {
    est.describirEstudiantes = function () {
        console.log(`${this.nombre} está inscrito en ${this.curso} tiene ${this.edad} y está ${this.activo}`)
    }
})

estudiantes.forEach(est => {
    est.describirEstudiantes();
});

// 9.

const cursosConCupos = cursos.filter(curso => curso.cupos >= 0);

console.log(cursosConCupos);

// 10.

const descripcionCurso = cursos.map(curso => {
    return `Curso ${curso.nombre} —  (Nivel: ${curso.nivel}) — Cupos: ${curso.cupos}`

})

console.log(descripcionCurso)