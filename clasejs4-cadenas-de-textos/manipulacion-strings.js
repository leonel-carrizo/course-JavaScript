// Métodos parte 2
// Convertir toda la cadena de texto en mayusculas o minusculas:

let input = "CaPriCorNio";
let bd = "tauro";
console.log(input === bd);

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toLowerCase() === bd.toLowerCase());

console.log(input.toUpperCase());
console.log(input.toUpperCase() === bd.toUpperCase());

// Formas de Concatenar dos cadenas. 'concat'

let str1 = "Hola soy la primera cadena.";
let str2 = "Hola soy la cadena numero 2";
console.log(str1.concat(" ", str2, ". Más cosas"));

//con +
console.log(str1 + " " + str2);

//con ``
console.log(`${str1} ${str2}`);

// Quitar Al inicio y al final

let str3 = "        Soy uina cadena con espacios al final.          ";
console.log(str3.length);
//trim() elimina espacios del string
console.log(str3.trim());
//trimStart() Elimina espacios al inicio del string
console.log(str3.trimStart());
//trimEnd() Elimina espacios al final del string
console.log(str3.trimEnd());

// Obtener un caracter en cierta posición
let str4 = "Hola soy el String 4";
console.log(str4.charAt(5));
console.log(str4[5]);

// Obntener la posición de una palabra dentro de una cadena

let str5 =
	"Hola soy leonel y me gusta la gustadera. Soy leonel pero mi apellido es carrizo";
//indexOf para encontrar la posición de la palabra, mostrara el primero que encuentre en la secuencia. si no la encuentra devuelve -1
console.log(str5.indexOf("leonel"));
console.log(str5[9]);
//lastIndexOf() ubicara la poisicion de la ultima intancia dentro de la cadena
console.log(str5.lastIndexOf("leonel"));
