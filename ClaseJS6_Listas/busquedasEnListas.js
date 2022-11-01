// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined];

// Forma antigua( Poso eficiente)
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

// Forma ES6 más eficiente = .forEach()
let suma = 0;
const arrayNum = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNum.forEach((valor) => {
	suma += valor;
	console.log(valor);
});
console.log(suma);

// Búsqueda de un valor dentro de una lista con .find()
// Buscar elemento 93 dentro de arrayNum
const variable = arrayNum.find((valor) => {
	if (valor === 93) {
		return true;
	}
});
console.log(variable);

// Buscar una edad dentro de una lista de objetos
const listaObjetos = [
	{ nombre: "Leire", edad: 35 },
	{ nombre: "Gorka", edad: 34 },
	{ nombre: "Miguel", edad: 28 },
	{ nombre: "Lucia", edad: 3 },
	{ nombre: "Amaia", edad: 29 },
];

// const obejto = listaObjetos.find(o => {
//     if (o.nombre === 'Miguel') {
//         return true
//     }
// })
// console.log(obejto.edad)

const objeto = listaObjetos.find((o) => o.nombre === "Miguel");
console.log(objeto.edad);

const { edad } = listaObjetos.find((o) => o.nombre === "Miguel");
console.log(edad);
