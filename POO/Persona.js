// CLase: es una plantilla
console.clear();
class Persona {
    // Constructor: es un método especial que permite instanciar objetos basándose en la clase (Es un metodo para crear una instancia)
    //normalmente los argumentos y las caracteristicas suelen llevar el mismo nombre
    constructor(nombre, edad, profesion) {
        // Propiedades o caracteristicas
        // this hace referencia a la persona que estamos instanciando
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
        // this → se usa para referirse a las propiedades del objeto actual.
    }
}

//  De esta forma estamos instanciando un objeto basado en la clase(plantilla);
const carolina = new Persona('Carolina', 31, 'Ingeniera');
const ricardo = new Persona('Ricardo', 18, 'Estudiante de Programación')

// ---------------------------------
// SET: Como modificar las propiedades: 
carolina.edad = 30;
ricardo.profesion = 'Estudiante de artes'


// GET: OBtener la información
console.log(carolina.edad)
console.log(ricardo.profesion)

