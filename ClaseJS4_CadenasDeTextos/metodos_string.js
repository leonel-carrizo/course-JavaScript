// Métodos mpás utilizados con Strings

// Obtener longuitud de un String. Atributo 'lenght'
let str = "Hola soy un string";
console.log(str.length);

//Obetener partes de Strings. Métodos: 'slice()' 'subtring()' 'substr() obsoleto'
let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto

// Método 'replace' : solo reeplaza la primera intancia que concuerde.
let cadena = "Hola mi nombre es Leonel";
console.log(cadena);
console.log(cadena.replace("Leonel", "Ricardo"));

let texto =
	"La vida es muiy calidad, que calidad es la vida, solo porque sí y nada más, punto";
console.log(texto.replace("es", "Es"));

// Si queremos reemplazar todas las palabras en el texto, se pyde usar la EXPRESIÓN REGULAR 'global':
console.log(texto.replace(/es/g, "No Es"));
