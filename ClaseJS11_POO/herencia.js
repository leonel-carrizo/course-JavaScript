// Inherencia - Herencia (subClases)
class Persona {
	_nombre;
	_edad;
	constructor(nombre, edad) {
		this._nombre = nombre;
		this._edad = edad;
	}
	saludo() {
		return `Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años`;
	}
}

class Desarrollador extends Persona {
	constructor(nombre, edad, lenguaje) {
		super(nombre, edad);
		this.lenguaje = lenguaje;
	}
	saludo() {
		// Override
		return super.saludo() + ` y soy desarrollador de ${this.lenguaje}.`;
	}
}

const nuevodev = new Desarrollador("Leonel", 35, "JavaScript");
console.log(nuevodev, '\n');
console.log(nuevodev.saludo());

// Polimorfismo => Las calases pueden tomar varias formas
