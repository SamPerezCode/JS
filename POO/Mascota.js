// ENCAPSULAMIENTO: capacidad de hacer que las propiedades dle objeto sean privadas y no puedan ser modificadas desde aadentro
console.clear()
class Mascota {
    // ES2022 se agregó la posibilidad de hacer privadas las propiedas utilizando el # al comenzar el nombre

    #nombre
    #especie
    #energia
    #hambre

    constructor(nombre, especie) {
        this.#nombre = nombre
        this.#especie = especie
        this.#energia = 100
        this.#hambre = 0

    }
    // GETTER (obtener)
    obtenerNombre() {
        return this.#nombre
    }
    // SETTER (establecer o configurar)
    establecerNombre(nombre) {
        if (nombre.length > 1) {
            this.#nombre = nombre
        } else {
            console.log('El nombre debe ser mayor a una letra')
        }

    }

    jugar() {
        if (this.#energia > 0) {
            console.log(`${this.obtenerNombre()}Está jugado y divirtiendose`);
            this.#energia -= 20
            this.#hambre += 10
        } else {
            console.log(`${this.obtenerNombre()}Está demasiado cansado para jugar`)
        }
    }

    alimentar() {
        if (this.#hambre > 0) {
            console.log(`${this.obtenerNombre()} está comiendo una sabrosa comida`)
            this.#hambre -= 20
            this.#energia = 10
        } else {
            console.log(`${this.obtenerNombre()} no tiene hambre`)
        }
    }

    estado() {
        console.log(`${this.obtenerNombre()} es un ${this.#especie} tiene ${this.#energia} de energía y ${this.#hambre} de hambre.`)
    }
}

const manchita = new Mascota('Manchita', 'Perro')

console.clear()
manchita.estado()
manchita.jugar()
manchita.jugar()
manchita.estado()
manchita.alimentar()
manchita.jugar()
manchita.jugar()
manchita.estado()