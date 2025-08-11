// 🧠 Mini Reto: Desestructuración de Parámetros en Funciones
// Dada la siguiente estructura que podrías recibir desde una API:
console.clear()
const respuestaServidor = {
    status: 200,
    data: {
        usuario: {
            id: 123,
            nombre: "Carla Gómez",
            contacto: {
                email: "carla@example.com",
                telefono: "123456789"
            },
            direccion: {
                ciudad: "Bogotá",
                pais: "Colombia"
            }
        }
    }
};

// 👉 Tu reto es crear una función llamada formatearUsuario() que reciba directamente el objeto respuestaServidor como argumento y, utilizando desestructuración en el parámetro, imprima este texto exactamente así (usando template literals):
// Usuario: Carla Gómez
// Email: carla@example.com
// Ciudad: Bogotá
// País: Colombia

/*
⚠️ Requisitos:
--No accedas directamente con objeto.propiedad dentro del cuerpo.
--Usa desestructuración profunda en el parámetro de la función.
--Define valores por defecto para las propiedades si no existieran (por ejemplo, "Sin nombre", "Sin email", "Sin ciudad", "Sin país").
*/


function formatearUsuario({
    data: {
        usuario: {
            nombre = "Sin nombre",
            contacto: {
                email = "Sin email",
            } = {},

            direccion: {
                ciudad = "Sin ciudad",
                pais = "Sin pais"
            } = {}

        } = {}
    }
} = {}) {
    console.log(`Usuario: ${nombre}, Email: ${email}, Ciudad: ${ciudad}, País: ${pais}`);
}

formatearUsuario(respuestaServidor)

// Otra forma :
/*
function formatearUsuario(respuesta = {}) {
    const {
        data: {
            usuario: {
                nombre = "Sin nombre",
                contacto: { email = "Sin email" } = {},
                direccion: { ciudad = "Sin ciudad", pais = "Sin pais" } = {}
            } = {}
        } = {}
    } = respuesta;

    console.log(`Usuario: ${nombre}, Email: ${email}, Ciudad: ${ciudad}, País: ${pais}`);
}
*/