class Estudiante {
	_nombre;
	_asignaturas = ["JavaScript", " HTML", " CSS"];
	constructor(nombre) {
		this._nombre = nombre;
	}
	obetenrDatos() {
		return {
			nomrbes: this._nombre,
			asignaturas: this._asignaturas,
		};
	}
	mensaje() {
		return `Hola soy ${this._nombre} y estoy aprendiendo ${this._asignaturas}.`;
	}
}

const datos = new Estudiante("Leonel");
console.log(datos, "\n");
console.log(datos.obetenrDatos(), "\n");
console.log(datos.mensaje(), "\n");
