// 🗂️ 🔥 RETO 2: Descuentos
// Escenario

const carrito = [
    { producto: "Camisa", precio: 50000 },
    { producto: "Pantalón", precio: 80000 },
    { producto: "Zapatos", precio: 120000 }
];
const usuarioPremium = true;

// 🎯 Lo que debes hacer:
// 1️⃣ Si es usuario premium y compra más de $150,000, imprime "Descuento del 20%"
// 2️⃣ Si no es premium pero compra más de $200,000, imprime "Descuento del 10%"
// 3️⃣ Si no califica, imprime "Sin descuento"
// 4️⃣ Usa reduce para sumar el total del carrito.



const totalCompra = carrito.reduce((acc, prod) => acc + prod.precio, 0)
console.log(totalCompra)

if (usuarioPremium && totalCompra > 150000) {
    console.log("Descuento del 20%")
} else if (!usuarioPremium && totalCompra > 200000) {
    console.log("Descuento del 10%")
} else {
    console.log("Sin descuento")
}
