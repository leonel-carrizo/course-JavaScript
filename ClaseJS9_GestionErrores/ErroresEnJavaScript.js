//Es recomendable en puntos claves del proyecto, envolver el código con 'try' y 'catch' para gestionar de manera personalizada los errores.

const miFuncion = (val) => {
	if (typeof val === "number") {
		return 2 * val;
	}
	//return false
	throw new Error("Debe ser de tipo número");
};
//const elDoble = miFuncion('a1a')
const numero = "8";

try {
	//Código que puede fallar
	console.log("Esta ejecutandose de manera correcta");
	const doble = miFuncion(numero);
	console.log(doble);
} catch (e) {
	//En caso de fallar, ejecuta esto
	console.log("ERROR!!!");
	console.error(`El valor de e es ${e}`);
} finally {
	console.log("Siempre se ejecuta este finally");
}

//InternalError -> Problema interno como un bucle infinito-overflow
//SyntaxError -> Problemas de escritura.
//TypeError -> Pasando una funcion numero cuando espera un booleano.
//RangeError -> Tratar de acceder a una posición que esta sobrepasando la cantidad de ítems
//ReferenceError -> Tratar de acceder a una variable que no está definifa.
//Lista de errores preconfigurado: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
