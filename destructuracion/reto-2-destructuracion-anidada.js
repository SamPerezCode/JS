// 📦 Objeto base: respuestaPedido
const respuestaPedido = {
    data: {
        cliente: {
            nombre: "Carlos",
            direccion: {
                ciudad: "Bogotá",
                pais: "Colombia"
            }
        },
        pedido: {
            producto: "Laptop",
            cantidad: 2,
            precioUnitario: 3500
        },
        estado: "Procesando"
    },
    status: 200
};

// ✅ Desafíos
// 1️⃣ Extrae nombre, ciudad, pais usando destructuración anidada
const {
    data: {
        cliente: {
            nombre,
            direccion: { ciudad, pais }
        }
    }
} = respuestaPedido
console.log(`Cliente: ${nombre}, Ciudad: ${ciudad}, País: ${pais}`)

// 2️⃣ Extrae producto, cantidad, precioUnitario y calcula el total del pedido

const {
    data: {
        pedido: {
            producto, cantidad, precioUnitario
        }
    }
} = respuestaPedido
const total = cantidad * precioUnitario;
console.log(total)

const pedido = {
    id: 101,
    cliente: {
        nombre: "Ana Gómez",
        direccion: {
            ciudad: "Medellín",
            zip: "050001"
        }
    },
    productos: [
        { nombre: "Camisa", precio: 30000 },
        { nombre: "Pantalón", precio: 50000 }
    ]
};

// 🎯 1️⃣ Función mostrarCliente
// Requerimiento:
// Recibe el objeto pedido

// Imprime:
// Cliente: Ana Gómez, Ciudad: Medellín

function mostrarCliente() {

}
