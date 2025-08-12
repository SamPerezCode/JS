document.addEventListener('DOMContentLoaded', () => {
    // 1) Selecciones del DOM (según tu HTML adaptado)
    const formTarea = document.getElementById('form-tarea');
    const inputTarea = document.getElementById('input-tarea');
    const tbodyTareas = document.getElementById('tbody-tareas');

    // 2) Array en memoria para almacenar tareas (más tarde lo persistiremos)
    const tasks = [];

    // 3) Función para crear un objeto tarea
    const crearTarea = (texto) => {
        return {
            id: Date.now().toString(), // id único simple
            texto: texto.trim(),
            completed: false
        };
    };

    // 4) Función que renderiza UNA fila en la tabla (crea elementos DOM)
    const renderTarea = (task) => {
        const tr = document.createElement('tr');
        tr.dataset.id = task.id; // data-id para búsquedas
        // celda texto (puede llevar clase si está completada)
        const tdTexto = document.createElement('td');
        tdTexto.textContent = task.texto;
        if (task.completed) tdTexto.classList.add('completada');

        // celda acciones (botones: completar / eliminar)
        const tdAcciones = document.createElement('td');

        // botón completar
        const btnCompletar = document.createElement('button');
        btnCompletar.type = 'button';
        btnCompletar.textContent = task.completed ? 'Desmarcar' : 'Completar';
        btnCompletar.className = 'btn-completar';
        btnCompletar.dataset.id = task.id;

        // botón eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.type = 'button';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn-eliminar';
        btnEliminar.dataset.id = task.id;

        // agregamos botones a la celda acciones
        tdAcciones.appendChild(btnCompletar);
        tdAcciones.appendChild(document.createTextNode(' ')); // espacio
        tdAcciones.appendChild(btnEliminar);

        // ensamblamos fila
        tr.appendChild(tdTexto);
        tr.appendChild(tdAcciones);

        // añadimos la fila al tbody
        tbodyTareas.appendChild(tr);
    };

    // Renderiza todo el array (útil al borrar o toggle)
    const renderAll = () => {
        tbodyTareas.innerHTML = '';
        tasks.forEach(renderTarea);
    };


    // 5) Manejo del submit: crear tarea → push al array → render → limpiar input
    formTarea.addEventListener('submit', (e) => {
        e.preventDefault();

        const texto = inputTarea.value;
        if (!texto.trim()) {
            // validación simple
            alert('Ingrese una tarea válida');
            return;
        }

        const nueva = crearTarea(texto);
        tasks.push(nueva);       // guardamos en memoria
        renderTarea(nueva);      // la mostramos en la tabla
        inputTarea.value = '';   // limpiamos input
        inputTarea.focus();      // volvemos el foco al input
    });

    // 6)  Delegación de eventos sobre tbody
    tbodyTareas.addEventListener('click', (e) => {
        // si el click no vino desde un botón, buscar el botón más cercano
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

    // Eliminar tarea por id
    function eliminarTarea(id) {
        const index = tasks.findIndex(t => t.id === id);
        if (index === -1) return;
        tasks.splice(index, 1); // borra del array
        renderAll();            // re-render completo (sencillo y seguro)
    }

    // Alterna completed y re-renderiza
    function toggleCompletar(id) {
        const task = tasks.find(t => t.id === id);
        if (!task) return;
        task.completed = !task.completed;
        renderAll();
    }

    // (Opcional) Exponer tasks para debugging en consola
    window._tasksDebug = tasks;
});
