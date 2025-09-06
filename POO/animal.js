// Como usar los metodos
console.clear();
class Animal {

    constructor(nombre, edad, especie, sonido) {
        // Propiedades o caracteristicas
        // this hace referencia a la persona que estamos instanciando
        this.nombre = nombre
        this.edad = edad
        this.especie = especie
        this.sonido = sonido
        // this → se usa para referirse a las propiedades del objeto actual.
    }

    // Método: es una función qeu repesenta un comportamiento propio de esta clase

    hacerSonido() {
        console.log(this.sonido);
    }
    decirNombre() {
        console.log(`Hola mi nombre es: ${this.nombre}`)
    }
}

const manchita = new Animal('Manchita', 1, 'Perro', 'Guau');
const pelusa = new Animal('Pelusa', 2, 'Gato', 'Miau');

console.log(pelusa)
pelusa.hacerSonido();
manchita.hacerSonido()
pelusa.decirNombre();