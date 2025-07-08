/*
🗂️ 1️⃣ Tabla RESUMEN — Condicionales y Operadores

| Estructura              | ¿Qué hace?                                               | Ejemplo base                                           |         
| ----------------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| `if`                    | Evalúa una condición; si es `true`, ejecuta un bloque    | `if (edad >= 18) { console.log("Mayor de edad"); }`    |    
| `else if`               | Opciones adicionales si la condición anterior es `false` | `else if (edad >= 13) { console.log("Adolescente"); }` | 
| `else`                  | Si ninguna condición se cumple                           | `else { console.log("Niño"); }`                        |       
| `switch`                | Evalúa varias opciones de un solo valor                  | `switch (dia) { case "Lunes": ... }`                   | 
| Operador ternario `? :` | Condición corta para asignar o imprimir algo             | `const mensaje = edad >= 18 ? "Mayor" : "Menor";`      |  
| Operadores lógicos      | Conecta condiciones: `&&` (y), \`                        |  `if (edad >= 18 && activo)`                           |
*/

// ⚡ 3️⃣ Mini ejemplos prácticos
const edad = 20;
const activo = true;

// if - else if - else
if (edad >= 18 && activo) {
    console.log("Acceso permitido");
} else if (edad >= 18) {
    console.log("Activo requerido");
} else {
    console.log("Acceso denegado");
}

// switch
// const rol = "admin";
// switch (rol) {
//     case "admin":
//         console.log("Acceso total");
//         break;
//     case "editor":
//         console.log("Acceso limitado");
//         break;
//     default:
//         console.log("Sin acceso");
// }

// Ternario
const permiso = (edad >= 18) ? "Sí puede" : "No puede";
console.log(permiso);


// 🎯 4️⃣ Mini Reto Paso a Paso
// Escenario
const usuario = {
    nombre: "Sara",
    edad: 19,
    rol: "editor",
    activo: false
};

// ✅ 1. Si edad es mayor o igual a 18 y está activo, imprime "Acceso autorizado".
// ✅ 2. Si tiene rol "admin" pero está inactivo, imprime "Admin inactivo".
// ✅ 3. Si nada se cumple, imprime "Acceso denegado".
// ✅ 4. Usa un switch para mostrar permisos según el rol:
// --admin → "Permisos totales"
// -editor → "Permisos de edición"
// -viewer → "Permisos de solo lectura"
// ✅ 5. Usa operador ternario para decir: "Sara está activa" o "Sara no está activa".

if (usuario.edad >= 18 && usuario.activo) { // 1.
    console.log("Acceso autorizado");
} else if (usuario.rol === "admin" && !usuario.activo) { //2.
    console.log("Admin inactivo");
} else { //3.
    console.log("Acceso denegado");
}

// 4. 
const rol = usuario.rol;
switch (rol) {
    case "admin":
        console.log("Permisos totales")
        break;
    case "editor":
        console.log("Permisos de edición")
        break;
    case "viewer":
        console.log("Permisos de solo lectura")
        break;
    default:
        console.log("Sin acceso")
}

const sara = (usuario.activo === true) ? "Sara está activa" : "Sara no está activa";
console.log(sara)
