// 🧪 RETO 3: Gestión de Talleres y Participantes
// Estás construyendo una app para gestionar inscripciones a talleres en una iglesia. Hay cupos limitados, edades mínimas, y participantes inscritos.

/*
🎯 Tareas que debes resolver:
1. Inscribe a "Samuel" (19 años) al taller de "Alabanza" y descuéntale el cupo correspondiente.

2. Verifica si "Samuel" cumple con la edad mínima para ese taller.

3. Elimina del array al participante "Laura" (se retiró del taller).

4. Crea un array con los nombres de los talleres sin cupos disponibles.

5. Calcula cuántos participantes hay por taller (muestra el total por cada uno).

6. Verifica si todos los talleres tienen al menos un participante.

7. Agrega un nuevo taller llamado "Evangelismo" con 5 cupos y edad mínima de 17.

8. Recorre el array participantes y muestra en consola:

---"María está inscrita en Discipulado y tiene 17 años"

---etc.
*/

// 🔧 Datos base:
const talleres = [
    { id: 1, nombre: "Discipulado", cupos: 4 },
    { id: 2, nombre: "Alabanza", cupos: 2 },
    { id: 3, nombre: "Oración", cupos: 6 }
];

const edadesMinimas = {
    Discipulado: 16,
    Alabanza: 18,
    Oración: 15
};

const participantes = [
    { nombre: "María", edad: 17, taller: "Discipulado" },
    { nombre: "Pedro", edad: 20, taller: "Alabanza" },
    { nombre: "Laura", edad: 15, taller: "Oración" }
];
// 1. Inscribe a "Samuel" (19 años) al taller de "Alabanza" y descuéntale el cupo correspondiente.

participantes.push({nombre: "Samuel", edad: 19, taller:"Alabanza" });
console.log(participantes)

// 2. Verifica si "Samuel" cumple con la edad mínima para ese taller.

const samuel = participantes.find(participante => participante.nombre === "Samuel");
console.log(samuel);
if(samuel) {
    const tallerSamuel = samuel.taller;
    const edadRequerida = edadesMinimas[tallerSamuel];
    const cumpleEdad = samuel.edad >= edadRequerida;

    console.log(
        cumpleEdad ? "Samuel cumple con la edad" : "Samuel no cumple con la edad minima"
    );
}else {
    console.log("Samuel no está inscrito");
}

// 3. Elimina del array al participante "Laura" (se retiró del taller).

const indexLaura = participantes.findIndex(participante => participante.nombre === "Laura");
if(indexLaura !==  -1) {
    participantes.splice(indexLaura, 1)
};

console.log(participantes);


// 4. Crea un array con los nombres de los talleres sin cupos disponibles.
const sinCupos = talleres 
    .filter(taller => taller.cupos === 0)
    .map(taller => taller.nombre)
console.log("Talleres sin cupo: ", sinCupos);

// 5. Calcula cuántos participantes hay por taller (muestra el total por cada uno).

talleres.forEach(taller => {
    const inscritos = participantes.filter( participante => participante.taller === taller.nombre);
    console.log(`El el taller ${taller.nombre} hay ${inscritos.length} participantes` )
})

// 6. Verifica si todos los talleres tienen al menos un participante. 
const todosCubiertos = talleres.every(taller =>
    participantes.some(p => p.taller === taller.nombre)
);

console.log(
    todosCubiertos
        ? "✅ Todos los talleres tienen al menos un participante."
        : "❌ Hay talleres sin participantes."
);

console.log(participantes)


// 7. Agrega un nuevo taller llamado "Evangelismo" con 5 cupos y edad mínima de 17.
talleres.push({ id: 4, nombre: "Evangelismo", cupos: 5 });
console.log(talleres)

// 8. Recorre el array participantes y muestra en consola: 
// "María está inscrita en Discipulado y tiene 17 años"...etc
participantes.forEach(participante => {
    console.log(`${participante.nombre} está inscrito en ${participante.taller} y tiene ${participante.edad}`);
});