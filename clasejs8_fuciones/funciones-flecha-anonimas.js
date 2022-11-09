// Funciones de tipo flecha

// Forma con funcion clasica
const array = [1, 2, 3, 4, 5, 6, 7];
const array2 = array.map(function (valor) {
	return valor * 2;
});
console.log(array2);

// usando funcion tipo flecha ANONIMA, no tiene un nombre
const array3 = array.map((valor) => valor * 2);
console.log(array2);

// Otra forma es definiendo primero la función y guardarla en una variable
const dobleValor = (valor) => {
	return valor * 2;
};
//Funcion tipo flecha
const dobeleDeValor = (valor) => valor * 2;

const array4 = array.map(dobeleDeValor);
console.log(array4);
