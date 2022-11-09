// Ordenar Arrays

//Método .sort() ordenar elementos de array de acuerdo a criteriodado.
const array = [2, 5, 9, 15, 1, 2, 0, 4];
console.log(array);

array.sort((a, b) => {
	return b - a;
});
console.log(array);

//ordenar arrayuas numericos
const arrayNymerico = [4, 1, 7, 3, 56, 1, 546];

arrayNymerico.sort((a, b) => b - a);
console.log(arrayNymerico);

// array de objetos
const listaObjetos = [
	{ nombre: "Leire", edad: 35 },
	{ nombre: "Gorka", edad: 34 },
	{ nombre: "Miguel", edad: 28 },
	{ nombre: "Lucia", edad: 3 },
	{ nombre: "Amaia", edad: 29 },
];

/*listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1
    } else if (a.edad > b.edad) {
        return +1
    } else {
        return 0
    }
})
console.log(listaObjetos)*/

listaObjetos.sort((a, b) => a.edad - b.edad);
console.log(listaObjetos);
