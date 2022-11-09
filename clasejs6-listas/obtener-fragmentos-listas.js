// Cómo obtener una lista a partir de otra con .slice(indice inicio, indice final). ( no modifica el valor del array original)
const array = ["hola", 1, 2, 3, true, null, "adios"];

console.log(array.slice(1, 4));

const array2 = array.slice(2, 5);
console.log(array2);

// Usando indices negativos
const array3 = array.slice(2, -2);
console.log(array3);
