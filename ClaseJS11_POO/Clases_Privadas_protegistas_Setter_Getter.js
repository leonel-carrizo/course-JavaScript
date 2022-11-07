class Persona {
	constructor(nombre, edad, isDeveloper) {
		this.nombre = nombre;
		this.edad = edad;
	}

	saludo() {
		console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} años`);
	}
}

const persona = new Persona("Leo", 90);
console.log(persona);
console.log(persona.nombre);
persona.saludo();

// Variables y propiedades privadas (#). Protección para evitar que se acceda a ellas.
class Animal {
	// privada -> #   Solo se pueden aceder desde la clase
	#nombre;
	#tipo;
	// Protegidas -> _    Solo se pueden acceder desde la clase y desencientes
	_edad = 5;
	constructor(a, b) {
		this.#nombre = a;
		this.#tipo = b;
	}
	obetenNombre() {
		//Funcion getter -> permite acceder a una variable privada.
		return this.#nombre;
	}
	// Método privado
	#obtenTipo() {
		return this.#tipo;
	}
	// getter
	getTipo() {
		return this.#tipo;
	}
	// Setter
	setTipo(nuevoTipo) {
		this.#tipo = nuevoTipo;
	}
}
const mascota = new Animal("Pucho", "Perro");
console.log(mascota.obetenNombre());
console.log(mascota._edad);

const mascota_1 = new Animal("Ruso", "Gato");
//console.log(tipoAnimal.#obtenTipo());
console.log(mascota_1._edad);
console.log(mascota_1.obetenNombre());

//Getter -> Métoidos que permiten obtener atributos/métodos privados o protegidos
console.log(mascota_1.getTipo());

// Stter -> métodos que permiten cambiar el valor de alguno de los atributos privados o protegido
// Cambiar tipo de mascota
mascota.setTipo("Rinoceronte");
console.log(mascota.getTipo());
