// 🗂️ 🔥 RETO 3: Menú de acciones
// Escenario
let actionUser = prompt("Escribe una accion: crear, eliminar o actualizar")
const accion = "eliminar";
// 🎯 Lo que debes hacer:
// 1️⃣ Usa switch para imprimir:
// --"Crear elemento" si accion = "crear"
// --"Actualizar elemento" si accion = "actualizar"
// --"Eliminar elemento" si accion = "eliminar"
// "Acción no reconocida" si ninguna coincide

// 2️⃣ Usa ternario para decir: "Acción segura" si accion es "crear" o "actualizar", de lo contrario "Acción crítica".

switch (actionUser) {
    case "crear":
        console.log("Crear elemento")
        break;
    case "actualizar":
        console.log("Actualizar elemento")
        break;
    case "eliminar":
        console.log("Eliminar elemento")
        break;
    default:
        console.log("Acción no reconocida")
}

const condition =
    actionUser === "crear" || actionUser === "actualizar"
        ? "Acción segura"
        : "Acción crítica"
console.log(condition)