/*
 El siguiente paso lógico (y pedagógico) es capturar el submit del formulario, leer el valor del input y crear la tarea en memoria y en la vista (tabla). Hacemos eso primero; después añadimos borrar, marcar como completada, editar y finalmente localStorage.

Paso 1 — Objetivo
--Escuchar el submit del formulario.
--Validar que el input no esté vacío.
--Crear un objeto task con id, texto y completed: false.
--Guardarlo en un array tasks.
--Renderizar la nueva fila en la tabla (tbody).

Explicación breve de las piezas importantes
--formTarea.addEventListener('submit', ...) — usamos submit porque es accesible por teclado (Enter) y es buena práctica con formularios.

--Date.now().toString() da un id único simple (no importa si queda numérico).

--renderTarea usa createElement para que entiendas la API DOM real (más segura que innerHTML).

--tr.dataset.id y btnCompletar.dataset.id nos permiten identificar filas/botones después, sin depender del texto.

--tasks por ahora está en memoria; luego lo guardamos en localStorage.
 */





document.addEventListener('DOMContentLoaded', () => {

    const formTarea = document.getElementById('form-tarea');
    const inputTarea = document.getElementById('input-tarea');
    const tbodyTareas = document.getElementById('tbody-tareas');

    // 🔹 Array en memoria (se llenará desde localStorage si hay datos)
    let tasks = [];

    // 🔹 Guardar en localStorage
    function guardarEnLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // 🔹 Cargar desde localStorage
    function cargarDesdeLocalStorage() {
        const datos = localStorage.getItem('tasks');
        if (datos) {
            tasks = JSON.parse(datos);
        }
    }

    // 🔹 Crear tarea
    const crearTarea = (texto) => ({
        id: Date.now().toString(),
        texto: texto.trim(),
        completed: false
    });

    // 🔹 Renderiza una fila
    const renderTarea = (task) => {
        const tr = document.createElement('tr');
        tr.dataset.id = task.id;

        const tdTexto = document.createElement('td');
        tdTexto.textContent = task.texto;
        if (task.completed) tdTexto.classList.add('completada');

        const tdAcciones = document.createElement('td');

        const btnCompletar = document.createElement('button');
        btnCompletar.type = 'button';
        btnCompletar.textContent = task.completed ? 'Desmarcar' : 'Completar';
        btnCompletar.className = 'btn-completar';
        btnCompletar.dataset.id = task.id;

        const btnEliminar = document.createElement('button');
        btnEliminar.type = 'button';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn-eliminar';
        btnEliminar.dataset.id = task.id;

        tdAcciones.appendChild(btnCompletar);
        tdAcciones.appendChild(document.createTextNode(' '));
        tdAcciones.appendChild(btnEliminar);

        tr.appendChild(tdTexto);
        tr.appendChild(tdAcciones);

        tbodyTareas.appendChild(tr);
    };

    // 🔹 Renderizar todo el array
    const renderAll = () => {
        tbodyTareas.innerHTML = '';
        tasks.forEach(renderTarea);
    };

    // 🔹 Agregar nueva tarea
    formTarea.addEventListener('submit', (e) => {
        e.preventDefault();
        const texto = inputTarea.value;
        if (!texto.trim()) {
            alert('Agregue una tarea válida');
            return;
        }
        const nueva = crearTarea(texto);
        tasks.push(nueva);
        guardarEnLocalStorage(); // Guardar cambios
        renderTarea(nueva);
        inputTarea.value = '';
        inputTarea.focus();
    });

    // 🔹 Manejo de clicks (delegación)
    tbodyTareas.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const id = btn.dataset.id;
        if (!id) return;

        if (btn.classList.contains('btn-eliminar')) {
            eliminarTarea(id);
        } else if (btn.classList.contains('btn-completar')) {
            toggleCompletar(id);
        }
    });

    function eliminarTarea(id) {
        tasks = tasks.filter(t => t.id !== id);
        guardarEnLocalStorage();
        renderAll();
    }

    function toggleCompletar(id) {
        const task = tasks.find(t => t.id === id);
        if (!task) return;
        task.completed = !task.completed;
        guardarEnLocalStorage();
        renderAll();
    }

    // 🔹 Inicialización: cargar y renderizar
    cargarDesdeLocalStorage();
    renderAll();

    window._tasksDebug = tasks; // para inspección en consola
});




/*
📌 Próximo paso lógico según nuestro plan:
Eliminar tarea con delegación de eventos.

1️⃣ ¿Qué es delegación de eventos?
En lugar de agregar un addEventListener a cada botón de eliminar, le ponemos un solo listener a la tabla (o al <tbody>), y verificamos dónde ocurrió el click.
Esto es más eficiente y no requiere volver a añadir listeners cuando agregamos nuevas tareas.

2️⃣ Lógica que implementaremos
1. Detectar el click en un botón Eliminar usando e.target.
2. Confirmar que es realmente el botón de eliminar (por ejemplo, verificando una clase o texto).
3. Obtener el índice de la tarea o un id único.
4. Eliminar la tarea del array tasks.
5. Volver a renderizar la tabla.

Explicación corta — por qué funciona y por qué es buena práctica
--Delegación: sólo hay un addEventListener en tbodyTareas. Cuando haces click en cualquier botón nuevo (incluso creado después), el listener lo detecta y actúa. Evita tener que añadir listeners a cada botón individualmente.

--dataset.id: cada botón lleva data-id con el id de la tarea; así se identifica la tarea sin leer texto o posición.

--renderAll(): simplifica la sincronización DOM ↔ array. No es la solución más optimizada si tienes miles de filas, pero para un gestor de tareas es clara y evita bugs sutiles.

--Mutación del array: uso splice para eliminar por índice, find para modificar completed. Mantienes tasks en memoria (más tarde lo persistiremos).
*/

/*
Guardar en localStorage
Cada vez que modifiquemos el array tasks (ya sea agregar, eliminar o marcar completada), debemos guardar su estado en localStorage así:

function guardarEnLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

🔹 JSON.stringify(tasks) → convierte el array en texto JSON porque localStorage solo guarda cadenas.
🔹 "tasks" → es la clave donde se guardará la información.

Ejemplo de uso al agregar una tarea:

tasks.push(nuevaTarea);
guardarEnLocalStorage();

2️⃣ Leer desde localStorage al cargar la página
Cuando la página cargue, debemos revisar si hay datos guardados y, si los hay, recuperarlos:

function cargarDesdeLocalStorage() {
    const tareasGuardadas = localStorage.getItem("tasks");
    if (tareasGuardadas) {
        tasks = JSON.parse(tareasGuardadas); // Convertir de texto a array
    }
}

3️⃣ Integrarlo al flujo
En tu código, esto iría así:
let tasks = [];

function guardarEnLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function cargarDesdeLocalStorage() {
    const tareasGuardadas = localStorage.getItem("tasks");
    if (tareasGuardadas) {
        tasks = JSON.parse(tareasGuardadas);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarDesdeLocalStorage();
    renderTasks(); // Mostrar lo que haya guardado
});



4️⃣ Cada vez que cambies el array…
Agregar tarea: guardar después del push.

Eliminar tarea: guardar después de quitarla.

Marcar completada: guardar después de cambiar task.completed.

Así aseguramos que siempre se actualice lo que hay en memoria.
*/