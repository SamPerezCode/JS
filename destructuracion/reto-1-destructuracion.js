// 🏆 Mini reto destructuración en parámetros
const respuestaAPI = {
    status: 200,
    data: {
        usuario: {
            nombre: "Luis",
            edad: 25,
            correo: "luis@example.com"
        },
        token: "abc123xyz"
    }
};

// ----------------------------------------
// 🎯 1️⃣ Función mostrarUsuario
// Requerimiento:

// --Recibe { data } de respuestaAPI
// --Imprime: Usuario: Luis, Edad: 25
// 💡 Pista: Desestructura data y luego usuario dentro del parámetro.

const { data } = respuestaAPI;
console.log(data)

function mostrarUsuario({ data }) {
    const { nombre, edad } = data.usuario
    console.log(`Usuario: ${nombre}, Edad: ${edad}`)
}
// mostrarUsuario(respuestaAPI);

// ----------------------------------------
// 🎯 2️⃣ Función mostrarToken
// Requerimiento:
// --Recibe { data } y muestra el token
// --Si no hay token, muestra "Sin token disponible" (usa valor por defecto)

function mostrarToken({ data }) {
    const { token } = data;
    if (token) {
        console.log(`Token: ${token}`)
    } else {
        console.log("Sin token disponible")
    }
}
// Para no usar un if:
// function mostrarToken({ data }) {
//     const { token = "Sin token disponible" } = data;
//     console.log(`Token: ${token}`);
// }
// 🔍 Esto evita usar if, ya que si token no existe, mostrará directamente el texto por defecto.


// mostrarToken(respuestaAPI)

// ----------------------------------------
// 🎯 3️⃣ Llama a ambas funciones
// Ejecuta:
mostrarUsuario(respuestaAPI);
mostrarToken(respuestaAPI);


