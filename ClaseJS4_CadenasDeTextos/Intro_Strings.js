// Strings
let str = "hola soy un texto";
let st2 = "Hola soy un texto con comillas simples";
console.log(str);
console.log(st2);

let str_comillas = 'Este mensaje "tiene muchas comillas"';
let str_comillas_simples = "Este mensaje 'tiene muchas comillas'";
let str_comillas_dobles = 'Este mensaje "tiene muchas comillas"';

console.log(str_comillas);
console.log(str_comillas_dobles);
console.log(str_comillas_simples);

//Comillas invertidas ( backticks)

let str_backticks = `Este es un strinig con backstick`;
console.log(str_backticks);

//tambien nos permiten introducir variables dentro del texto
let nombre = "Leonel";
let saludo = `Hola ${nombre} bienvenido`;
console.log(saludo);

// Tambien como plantilla HTML
let plantilla = `
<html>
<h1>Página web de ${nombre}</h1>
<p>Este seria un parrafo</p>
</html>
`;
console.log(plantilla);

//Introducción de variables en HTML
let lista = [
	"Empieza por el por qué",
	"El monje que vendió su ferrari",
	"El poder del ahora",
];
