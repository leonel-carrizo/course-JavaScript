// Cómo trabajar con listas o arrays:
let var1 = { id: false };
let array = [1, "hola", false, { id: 5 }, null, undefined, var1];
console.log(array);

// acceder a un avlor de un array a través de su posición.
// array[indice] => 0, 2, 3, 4 , 5... n
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// Métodos para introducir valores en arrays:

// .push(). Sirve para agregar valores al final del array. Muta el valor del array, es decir cambia de valor.

array.push("final", 45, 100, false);
console.log(array);

// .Unshift: sirve para agregar valores al principio del array.
array.unshift("inicio", 87, 99);
console.log(array);

// Métodos para eliminar valores de los array.
const array2 = [1, 3, "hola", false];
// .pop() -> Sirve para eliminar valores al final del array. Tambén mutan el valor de los array
array2.pop();
console.log(array2);

// .shift() -> Sirve para eliminar valores al principio del array.
array2.shift();
console.log(array2);

// Método para modificar array. splice(inidice en numero, cantidad a eliminar haciadelante, elementos a insertar)
const array3 = [1, 2, 3, 4, 5, 6];
// Eliminar
array3.splice(2, 1);
console.log(array3);
// añadir
array3.splice(2, 0, "hola");
console.log(array3);
// Modificar
array3.splice(2, 1, 3);
console.log(array3);
