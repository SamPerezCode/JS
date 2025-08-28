/*
📚 Plan (continuando por donde vamos)
2. Asincronía en JavaScript

👉 Estamos en esto ahora, reforzando Promesas / async / await.

3. Formularios y validaciones (pendiente antes de React)

📌 Lo metemos aquí como un puente entre DOM y asincronía, porque:

--Te obliga a capturar datos del usuario.
--Validar (que no estén vacíos, que sean correctos).
--Usar preventDefault() para controlar el comportamiento del formulario.
--Renderizar dinámicamente los datos ingresados.
--(Opcional) Guardarlos en localStorage para persistencia.

--------------------------------------------
🎯 Teoría de Formularios en JS

1. Capturar el formulario y los inputs

--Se usa querySelector o getElementById.
--Se escucha el evento submit.

const form = document.querySelector('#miFormulario');
const input = document.querySelector('#nombre');

--------------------------------------------

2. Evitar el refresh por defecto

--Los formularios hacen un refresh automático.
--Usamos event.preventDefault() en el evento submit para controlarlo con JS.
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita recargar la página
    console.log('Formulario enviado');
});

--------------------------------------------

3. Validaciones básicas

--Chequear que los campos no estén vacíos.
--Usar condiciones (if) para mostrar mensajes de error.

if (input.value.trim() === '') {
    alert('El campo no puede estar vacío');
    return;
}

4. Acceder a todos los valores del formulario

--Se puede acceder input por input con form.querySelector('input')
--O usando el objeto FormData

const datos = new FormData(form);
console.log(datos.get('nombre')); // obtiene el valor del input con name="nombre"


5. Renderizar lo ingresado
--Una vez validado, se puede mostrar en pantalla creando elementos dinámicamente.
*/
