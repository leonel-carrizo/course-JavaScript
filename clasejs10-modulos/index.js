// // Formas de importar/exportar módulos:
// // 1. CommonJS - require
// // 2. Import ES6 - import
////////Primera forma
//const moduloMatematicas = require('./modulos/matematicas.js')

///////// Otra forma de importar el módulo a una variable
//const factorial = moduloMatematicas.factorial

///////// Otra forma
//const { factorial, suma } = moduloMatematicas;

//////// Cuarta forma
const { factorial, suma } = require("./modulos/matematicas.js");

//console.log(moduloMatematicas.eleva);

const fact = factorial(5);
console.log(fact);

const sum = suma(10, 10);
console.log(sum);

//console.log(module)
