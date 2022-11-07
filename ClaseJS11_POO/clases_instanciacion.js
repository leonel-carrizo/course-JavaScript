// Creación y suso de clases
class Persona {
// Las variables siguientes son publicas por lo que se pueden obviar.
// nombre;
// edad;
// isDeveloper;
constructor(nombre, edad, isDeveloper) {
this.nombre = nombre;
this.edad = edad;
this.isDeveloper = isDeveloper;
	}

	saludo() {
		console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} años`);
	}
}

// Crear objeto con la clase
const nueva_persona = new Persona("Pedrito", 40, true);
console.log(nueva_persona);
nueva_persona.saludo();

// Instanciar vs instanciar
let numero = 60; // incializando una variable
let persona2 = new Persona("Maria", 34, false); // Instanciar clase

// instanceof -> similar a typeof pero para clases
let persona3 = new Persona("Mariza", 24, false); // Instanciar clase
console.log(typeof persona3);
console.log(persona3 instanceof Persona);
