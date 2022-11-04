// Introducción a funciones

//funcion saludar
// variable por valor
const nom = "Pedro";

saludar("perro");

function saludar(nom) {
	console.log(`Hola ${nom}`);
}

let nombre_2 = "Leonel";
console.log(nombre_2);

despedir(nombre_2);

function despedir(nombre) {
	nombre = "Juan";
	console.log(`adios ${nombre}`);
}

// Pasando un objeto
// Variable por referencia
let persona = { nombre: "Juan", apellido: "Gonzalez" };

saludarPersona(persona);

console.log(persona);

function saludarPersona(objeto) {
	persona.apellido = "Villar ";
	console.log(`hola ${objeto.nombre} ${objeto.apellido}`);
}

// funcion con valor por defecto, parametros opcionales.
function imprimeNumero(numero = 7) {
	console.log(numero);
}
imprimeNumero();

// Funciones con parametros indeterminados

// Factor de propagacion
function imprimir(...parametros) {
	console.log(parametros);
}
imprimir(1, 3, 5, "holas", { id: 4 });

//funcion suma de todos los parametros
function suma(...nums) {
	res = nums.reduce((a, b) => a + b);
	console.log(res);
}
suma(2, 3, 4, 5, 3, 4, 45, 1200);

// Uso palabra reservada 'return' para que pueda devolver un valor
function suma(...nums) {
	return nums.reduce((a, b) => a + b);
}
const res = suma(10, 1, 1, 1, 1, 1, 5);
console.log(res);

// Ambito de una funcion
// las variables declaradas dentro de la funcion solo se pueden acceder dentro de la funcion.
// Las variables declaradas fuera de la funcion pueden accederse desde dentro de la suncion.
let variable = "hola";

function multiplicar(a = 0, b = 0) {
	console.log(variable);
	const variable_interna = "adios";
	console.log(variable_interna);
	return a * b;
}
// console.log(variable_interna)
const res1 = multiplicar(3, 3);
console.log(res1);
