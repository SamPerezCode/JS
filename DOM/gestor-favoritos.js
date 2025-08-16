/*
Ejercicio: Gestor de Favoritos

Enunciado:
Crea una pequeña aplicación web que permita a un usuario guardar sus películas favoritas en una tabla.

Requisitos:

1. HTML:

--Un formulario con un <input> para el nombre de la película y un botón "Agregar".
--Una tabla con columnas: Nombre, Acciones.

2. JS:

--Cuando el usuario agregue una película, esta debe guardarse en un array.
--Mostrar todas las películas en la tabla.

--Cada fila debe tener:
    --Botón "Eliminar" → borra la película del array y de la tabla.
    --Botón "Ver" → muestra un alert con el nombre de la película.

--Persistencia: Las películas deben guardarse en localStorage y cargarse al iniciar la página.

3. Restricciones:

--No se permiten películas con el mismo nombre (case-insensitive).
--El array debe contener objetos { id, nombre } (el id puede ser un número autoincremental o Date.now()).

4. Extras opcionales (para puntos extra en una entrevista):

--Botón "Editar" para modificar el nombre.
--Campo de búsqueda en tiempo real para filtrar las películas en la tabla.
--Guardar también la fecha de agregado y mostrarla en otra columna.

5. 💡 Pistas que esperarían que uses en una entrevista:

-- addEventListener para manejar clicks.
-- Delegación de eventos para botones dentro de la tabla.
-- localStorage.setItem() y localStorage.getItem() para persistencia.
-- .toLowerCase() para comparar nombres sin importar mayúsculas/minúsculas.
-- Manipulación del DOM con createElement o innerHTML.

*/
