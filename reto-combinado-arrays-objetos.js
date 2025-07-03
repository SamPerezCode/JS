/*
Reto Práctico Completo donde vas a aplicar Arrays + Objetos al estilo de una mini aplicación de gestión de productos.

🛒 RETO: Sistema de Inventario y Pedidos
Tendrás un inventario de productos, una lista de pedidos y precios. Deberás realizar operaciones clave como agregar, editar, eliminar y calcular totales.

const inventario = [
    { id: 1, nombre: "Pan", stock: 20 },
    { id: 2, nombre: "Leche", stock: 10 },
    { id: 3, nombre: "Queso", stock: 5 }
];

const precios = {
    Pan: 1500,
    Leche: 2500,
    Queso: 3000
};

const pedidos = [
    { cliente: "Luis", producto: "Pan", cantidad: 2 },
    { cliente: "Ana", producto: "Queso", cantidad: 1 }
];

*/
const inventario = [
    { id: 1, nombre: "Pan", stock: 20 },
    { id: 2, nombre: "Leche", stock: 10 },
    { id: 3, nombre: "Queso", stock: 5 }
];

const precios = {
    Pan: 1500,
    Leche: 2500,
    Queso: 3000
};

const pedidos = [
    { cliente: "Luis", producto: "Pan", cantidad: 2 },
    { cliente: "Ana", producto: "Queso", cantidad: 1 }
];

/*
🎯 Tareas que debes resolver (sin mencionar métodos):
1. Agrega un nuevo pedido: el cliente "Carlos" pidió 3 "Leche".
2. Resta la cantidad correspondiente del stock de ese producto en el inventario.
3. Crea un array con los nombres de productos sin stock (stock = 0).
4. Calcula el total a pagar por cada cliente.
5. Elimina el pedido de "Ana" del array de pedidos.
6. Muestra en consola todas las propiedades de cada producto del inventario con su stock actualizado.
7. Agrega al inventario un nuevo producto: { id: 4, nombre: "Mantequilla", stock: 8 }
8. Verifica si "Queso" aún está disponible (stock mayor a 0).
*/

// 1.Agrega un nuevo pedido: el cliente "Carlos" pidió 3 "Leche".
pedidos.push({ cliente: "Carlos", producto: "Leche", cantidad: 3 });
console.log(pedidos)

// 2. Resta la cantidad correspondiente del stock de ese producto en el inventario.
// ✅ 2. Resta esa cantidad del stock en el inventario
// 
// Usamos .find() dos veces:
// Para encontrar el producto en el inventario ("Leche")
// Para encontrar el pedido hecho por "Carlos"

const productoLeche = inventario.find(p => p.nombre === "Leche");
const pedidoCarlos = pedidos.find(p => p.cliente === "Carlos");

productoLeche.stock -= pedidoCarlos.cantidad
console.log(productoLeche);

// ✅ 3. Crear array con nombres de productos con stock = 0
// Aquí usamos .filter() para quedarnos con los objetos con stock 0, y luego .map() para quedarnos con sus nombres:

const sinStock = inventario
    .filter(p => p.stock === 0)
    .map(p => p.nombre);
console.log("Productos sin stock: ", sinStock);

// ✅ 4. Calcular el total a pagar por cada cliente
// Recorremos pedidos y para cada uno:
// --Accedemos al producto
// --Buscamos el precio unitario
// --Multiplicamos por la cantidad

pedidos.forEach(pedido => {
    const precio = precios[pedido.producto];
    const total = precio * pedido.cantidad;
    console.log(`${pedido.cliente} debe pagar $${total}`);
});

// ✅ 5. Eliminar el pedido de Ana
// Usamos .findIndex() para saber en qué posición está su pedido, y luego .splice() para eliminarlo:
const indexAna = pedidos.findIndex(p => p.cliente === "Ana");
if (indexAna !== -1) {
    pedidos.splice(indexAna, 1);
}

// ✅ 6. Mostrar todas las propiedades del inventario actualizado
// Usamos for...of + Object.entries() para recorrer cada producto y mostrarlo:
for (let producto of inventario) {
    console.log("Producto:");
    for (let [clave, valor] of Object.entries(producto)) {
        console.log(`  ${clave}: ${valor}`);
    }
}

// ✅ 7. Agregar nuevo producto: Mantequilla
// Usamos .push() para agregar al array:
inventario.push({ id: 4, nombre: "Mantequilla", stock: 8 });

// ✅ 8. Verificar si "Queso" está disponible
// Usamos .find() para buscar el producto "Queso" y comprobar su stock > 0:

const queso = inventario.find(p => p.nombre === "Queso");
const disponible = queso && queso.stock > 0;
console.log("¿Queso disponible?", disponible);

// ✅ Resultado Final
// Ya aplicaste:

// Arrays de objetos

// .find(), .findIndex(), .filter(), .map(), .push(), .splice()

// Object.entries() y for...of

// Manipulación de stock, eliminación de elementos y cálculo de totales




// -----------------------------------------------------------------------------
// Reto combinado 2

// 🎓 RETO: Sistema de Inscripciones a Cursos

// 🔧 Datos base:
const cursos = [
    { id: 1, nombre: "Biblia 1", cupos: 5 },
    { id: 2, nombre: "Teología", cupos: 3 },
    { id: 3, nombre: "Evangelismo", cupos: 2 }
];

const estudiantes = [
    { nombre: "Ana", curso: "Teología", edad: 23 },
    { nombre: "Luis", curso: "Biblia 1", edad: 20 }
];

const edadesPermitidas = {
    "Biblia 1": 18,
    "Teología": 21,
    "Evangelismo": 25
};

/*
🎯 Tareas:
1. Agrega un nuevo estudiante: "Carlos" se inscribe en "Evangelismo" y tiene 27 años.

2. Resta un cupo en el curso correspondiente por la inscripción de Carlos.

3. Verifica si todos los cursos tienen al menos 1 cupo disponible.

4. Crea un array con los nombres de estudiantes mayores de 22 años.

5. Calcula la edad promedio de todos los estudiantes inscritos.

6. Elimina la inscripción de "Luis" del array de estudiantes.

7. Agrega un nuevo curso al catálogo: "Misiones" con 4 cupos.

8. Verifica si "Carlos" cumple con la edad mínima para el curso en el que está inscrito (usa edadesPermitidas).
*/


// 1. Agrega un nuevo estudiante: "Carlos" se inscribe en "Evangelismo" y tiene 27 años.

estudiantes.push({nombre: "Carlos" , curso: "Evangelismo", edad: 27});
console.log(estudiantes)

// 2. Resta un cupo en el curso correspondiente por la inscripción de Carlos.
const cupoCurso = cursos.find(curso => curso.nombre === "Evangelismo")
console.log(cupoCurso)
cupoCurso.cupos - 1;
console.log(cupoCurso)
// 3. Verifica si todos los cursos tienen al menos 1 cupo disponible.
const cursosDisponibles = cursos.filter(curso => curso.cupos >= 1);
console.log(cursosDisponibles)
// 4. Crea un array con los nombres de estudiantes mayores de 22 años.
const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 22);
console.log(estudiantesMayores);
// 5. Calcula la edad promedio de todos los estudiantes inscritos.
const totalEdades = estudiantes.reduce((acomulador, estudiante) => {
    return acomulador + estudiante.edad;
}, 0)
console.log(totalEdades)
const promedioEdades = totalEdades / estudiantes.length;
console.log(promedioEdades);
// 6. Elimina la inscripción de "Luis" del array de estudiantes.
const indexEstudiante = estudiantes.findIndex(estudiante => estudiante.nombre === "Luis");
if(indexEstudiante !== -1){
    estudiantes.splice(indexEstudiante, 1);
}
console.log(estudiantes)
// 7. Agrega un nuevo curso al catálogo: "Misiones" con 4 cupos.
cursos.push({id: 4, nombre: "Misiones", cupos: 4})
console.log(cursos)

// 8. Verifica si "Carlos" cumple con la edad mínima para el curso en el que está inscrito (usa edadesPermitidas).

const Carlos = estudiantes.find(estudiante => estudiante.nombre === "Carlos");
console.log(Carlos) 
if(Carlos) {
    const cursoCarlos = Carlos.curso;
    const edadRequerida = edadesPermitidas[cursoCarlos];
    const cumpleEdad = Carlos.edad >= edadRequerida;

    console.log(
        cumpleEdad ? "Carlos cumple con la edad mínima" : "Carlos no cumple con la edad mínima"
    );
} else  {
    console.log("Carlos no está inscrito")
}


