//Sets y Conjuntos. Los Set un conjunto no ordenado de elementos UNICOS, no se repiten sus valores.
const array = [1, 2, 3, 4, 5, 1, 3, 5, 10, { id: 5 }, "hola", "hola"];

const miSet = new Set(array);
console.log(array);
console.log(miSet);

// Añadir valores con .add()

miSet.add(9);
console.log(miSet);
miSet.add(4);
console.log(miSet); // no se añade el valor porque ya existia

//Eliminar valores con .delete()
miSet.delete("hola");
console.log(miSet);

// Eliminar todos los valores del Ser con .clear()
//miSet.clear()
console.log(miSet);

// Saber si el Set contiene un valor con . includes().has()
console.log(array.includes(2));
console.log(miSet.has(1));

// conocer el tamaño del Set
console.log(miSet.size);

// Hacer interación  con .forEach()
miSet.forEach((valor) => {
	console.log(valor);
});

// obetener los valores iterados del Set despues de iterarlo
const it_miSet = miSet.values();
console.log(it_miSet);
//Conviertiendolo en un array nuevamente
const ar_miSet = [...miSet];
console.log(ar_miSet);
