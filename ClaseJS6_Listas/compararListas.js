//Comparar listas con .every() indica si todos los componentes de una lista cumplen cierta condicion. ( comparar listas)

const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

// const resultado = array.every(valor => {
//     if (typeof valor === 'number' || valor > 0) {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(resultado)

const resultado = array.every((valor) => valor > 0);
console.log(resultado);

// Comparacion de listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2); // da false porque las listas no puden compararse directamente

//Se comparan las longitudes de las listas y el valor de cada elemento.
const compararArrays = (array_1, array_2) => {
	if (array_1.length !== array_2.length) return false;
	const res = array_1.every((valor, i) => valor === array_2[i]);
	return res;
};
console.log(compararArrays(ar1, ar2));

const ar3 = [1, 2, 3, 5, 6, 7];
console.log(compararArrays(ar1, ar3));
