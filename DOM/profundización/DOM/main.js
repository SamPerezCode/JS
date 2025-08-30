const estudiantes = [
    { id: 1, nombre: "Ana", edad: 20, curso: "React", calificaciones: [90, 80, 70] },
    { id: 2, nombre: "Luis", edad: 22, curso: "JavaScript", calificaciones: [85, 95, 100] },
    { id: 3, nombre: "María", edad: 19, curso: "React", calificaciones: [70, 75, 80] },
    { id: 4, nombre: "Pedro", edad: 25, curso: "Node", calificaciones: [60, 65, 70] },
    { id: 5, nombre: "Lucía", edad: 21, curso: "JavaScript", calificaciones: [88, 92, 90] },
    { id: 6, nombre: "Carlos", edad: 23, curso: "React", calificaciones: [95, 90, 85] },
    { id: 7, nombre: "Sofía", edad: 18, curso: "Node", calificaciones: [75, 80, 70] },
    { id: 8, nombre: "Miguel", edad: 24, curso: "React", calificaciones: [85, 89, 90] },
    { id: 9, nombre: "Valeria", edad: 22, curso: "JavaScript", calificaciones: [95, 93, 96] },
    { id: 10, nombre: "Andrés", edad: 20, curso: "Node", calificaciones: [70, 72, 68] }
];

document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.querySelector('#buscador');
    const listaEstudiantes = document.querySelector('#lista-estudiantes');
    const tbody = document.getElementById('tbody');
    const table = document.querySelector('table');
    const paginacion = document.querySelector('#paginacion');

    const promedioCalEstudiante = estudiantes.map(e => {
        const sumaCalificaciones = e.calificaciones.reduce((acc, suma) => acc + suma, 0);
        const promedioCalificaiones = sumaCalificaciones / e.calificaciones.length;
        return promedioCalificaiones;
    })

    console.log(promedioCalEstudiante)
    estudiantes.forEach((e, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        // Haciendo como unas cards
        card.innerHTML = `
            <h3>${e.nombre} (${e.edad} años)</h3>
            <p>Curso: ${e.curso}</p>
            <p>Nota promedio: ${promedioCalEstudiante[index]}</p>
        `;

        // Haciendolo como tabla
        // tbody.innerHTML += `
        //     <tr>
        //         <td><h3>${e.nombre}</h3></td>
        //         <td>${e.edad} años</td>
        //         <td>${e.curso}</td>
        //         <td>${promedioCalEstudiante[index]}</td>
        //     </tr>
        // `;
        // table.appendChild(tbody);
        listaEstudiantes.appendChild(card)
    })
})