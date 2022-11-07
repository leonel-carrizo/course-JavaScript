// Programación Orientada a Objetos
const persona = {
	nombre: "Leonel",
	edad: 35,
	isDeveloper: true,
	saludo: function () {
		console.log("Hola");
	},
};

console.log(persona);
persona.saludo();

const otraPersona = {
	nombre: "Pedro",
	edad: 30,
	isDeveloper: false,
	saludo: function () {
		console.log("Hola");
	},
};

otraPersona.saludo();

const crea_Persona = (nombre, edad, isDeveloper) => {
	return {
		nombre, // nombre : nombre;
		edad,
		isDeveloper,
		saludo: function () {
			console.log("Hello");
		},
	};
};

const nueva_persona = crea_Persona('Juan', 20, false)
console.log(nueva_persona);

const nueva_persona2 = crea_Persona('Pedrito', 10, false)

console.log(nueva_persona2);
