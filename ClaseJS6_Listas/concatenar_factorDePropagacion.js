// Unir dos listas .concat(lista2)
const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", 8, true, undefined];

const lista3 = lista1.concat(lista2);
///console.log(lista3);

// Unir con factor de propagacion. Trata a los valores de la lista cada uno por separado.
//console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);

//  ERROR!! Mal entendido el concepto del factor de propagación.
const lista5 = [lista1, lista2]; // Se obtiene una lista de las listas.
console.log(lista5);
