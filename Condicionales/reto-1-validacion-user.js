// 🗂️ 🔥 RETO 1: Validación de usuario
// Escenario

const user = {
    nombre: "Mateo",
    edad: 17,
    activo: true,
    rol: "viewer"
};

/*
🎯 Lo que debes hacer
1️⃣ Si es mayor de 18 y activo, imprime "Acceso concedido"
2️⃣ Si es menor de 18, imprime "Acceso denegado por edad"
3️⃣ Si es inactivo, imprime "Usuario inactivo"
4️⃣ Usa switch para mostrar permisos:

--admin → "Admin total"
--editor → "Puede editar"
--viewer → "Solo lectura"
5️⃣ Usa un ternario para decir: "Mateo está activo" o "Mateo está inactivo"

*/

if (user.edad > 18 && user.activo === true) {
    console.log("Acceso concedido")
} else if (user.edad < 18) {
    console.log("Acceso denegado por edad")
} else {
    console.log("Usuario inactivo")
}

let rol = user.rol
switch (rol) {
    case "Admin":
        console.log("Admin total")
        break;
    case "editor":
        console.log("Puede editar")
        break;
    case "viewer":
        console.log("Solo lectura")
        break;
    default:
        console.log("Sin acceso")
}

const mateoActivo = (user.activo === true) ? "Mateo está activo" : "Mateo está inactivo";
console.log(mateoActivo)