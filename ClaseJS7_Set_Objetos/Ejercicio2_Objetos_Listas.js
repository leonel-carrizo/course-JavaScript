// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const misDatos = {
	nombre: "Leonel",
	apellido: "Carrizo",
	edad: 35,
	altura: 173,
	eresDesarrollador: true,
};

//- Una variable que obtenga tu edad a partir del objeto anterior
let edad = misDatos.edad;
console.log(`Mi edad es ${edad} años`);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [misDatos].concat([
	{
		nombre: "Jorge",
		apellido: "Martinez",
		edad: 36,
		altura: 170,
		eresDesarrollador: false,
	},
	{
		nombre: "Juan",
		apellido: "Gonzalez",
		edad: 39,
		altura: 171,
		eresDesarrollador: false,
	},
]);
console.log(lista);

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listOrdered = lista.sort((a, b) => b.edad - a.edad);
console.log(listOrdered);
