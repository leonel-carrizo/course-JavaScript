// Comparaciones

// Igualdad: Igualdad simple == donde solo se compara el valor. igualdad fuerte === compara el valor y el tipo (number, string, bool, etc)

let a = 5;
let b = "5";

if (a == b) {
	// solo compara el valor y no el tipo
	console.log("a es igual a b");
}

if (a === b) {
	console.log("a es MUY  igual a b");
} else {
	console.log(" son diferentes");
}

// desigualdad. de la misma manera que en la igualdad el simbolo != solo compara el valor mientras que !== compara el valor y el tipo.
let c = 4;
let d = "4";

if (c != d) {
	console.log("c es diferente a d - debil");
}

if (c !== d) {
	console.log("c Es diferente a d - fuerte");
}

// Comparaciones mayor que y menor que:

let max = 10;
let min = 5;

//mayor o igual}
if (max > min) {
	console.log("max es mayor que min");
}

if (max >= min) {
	console.log("max es mayor que min");
}

//menor o igual
if (min < max) {
	console.log("min es menor que max");
}

if (min <= max) {
	console.log("min es menor o igual");
}
