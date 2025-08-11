console.clear()

/*
💼 Reto de entrevista 2: “Inventario de Productos”
🧠 Objetivo:
Practicar la desestructuración de objetos y arrays en el parámetro de la función, con valores por defecto, sin acceder directamente a propiedades dentro del cuerpo de la función.

🧾 Enunciado:
Tienes una función llamada mostrarInventario que recibe como argumento un objeto con la siguiente estructura:
*/
const respuestaAPI = {
    data: {
        productos: [
            {
                nombre: "Laptop",
                precio: 1500,
                detalles: {
                    stock: 10,
                    categoria: "Tecnología"
                }
            },
            {
                nombre: "Silla",
                detalles: {
                    categoria: "Muebles"
                }
            },
            // ...otros productos
        ]
    }
};

// Pero a veces el objeto puede llegar incompleto o vacío, y necesitas evitar errores usando valores por defecto.

/*
✅ Tu tarea:
1- Define la función mostrarInventario con desestructuración profunda directamente en el parámetro de la función.

2- Extrae de cada producto:

nombre → default: "Sin nombre"
precio → default: 0
stock → default: 0
categoria → default: "Sin categoría"

3- Imprime una línea por cada producto con este formato:
Producto: Laptop, Precio: $1500, Stock: 10, Categoría: Tecnología

🔒 Restricciones:

❌ No accedas con objeto.propiedad dentro del cuerpo de la función.
✅ Usa solo desestructuración en el parámetro de la función y dentro del .map() si lo usas.
✅ Usa valores por defecto correctamente para evitar errores si falta algún campo.
*/

function mostrarInventario({ data: { productos = [] } = {} }) {
    productos.forEach(({
        nombre = "Sin nombre",
        precio = 0,
        stock = 0,
        categoria = "Sin categoria"
    }) => {
        console.log(`Producto: ${nombre}, Precio: ${precio}, Stock: ${stock}, Categoría: ${categoria}`)
    });
}

mostrarInventario(respuestaAPI)