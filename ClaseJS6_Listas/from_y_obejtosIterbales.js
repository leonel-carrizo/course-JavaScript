// SAber si solo algunos elementos cumple con una condición
//.some() devolverá TRUE si al menos un elemento cumple con la condicion.

const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -1];

const res = array.some((valor) => valor < 0);
console.log(res);

//veriicar si existe un valor determinado por nosotros
const existe = array.some((valor) => valor === 9);
console.log(existe);

//Verificar si existe un nombre dentro de una lista de objetos.
const listaObjetos = [
	{ nombre: "Leire", edad: 35 },
	{ nombre: "Gorka", edad: 34 },
	{ nombre: "Miguel", edad: 28 },
	{ nombre: "Lucia", edad: 3 },
	{ nombre: "Amaia", edad: 29 },
];
const existeMiguel = listaObjetos.some(
	(persona) => persona.nombre === "Miguel"
);
console.log(existeMiguel);

//cómo obtener una lista a partir de un objeto iterable.(ejemplo strings)
const str = "Hola soy Leonel";
console.log(str[5]);

//Método Array.from
const ar_str = Array.from(str);
console.log(ar_str);

// Método .Array.from() a un Set
const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

// Tener un iterable de todos los indices del array
// Método .keys()
const keys = array.keys();
console.log(keys); // Es de tipo Interator

const ar_keys = Array.from(keys);
console.log(ar_keys);
