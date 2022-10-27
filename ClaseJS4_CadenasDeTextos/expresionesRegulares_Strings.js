//Expresiones regualres y métodos de busqueda.
//https://regexr.com aprender como funsionan las expresiones regulares

let texto =
	"No me des conforme a tu justicia, sino haz de mi micericordia. Mis dolores se han multiplicado y mis huesos crujen por las noches, mi mente anda huyendo de los pensamientos que vienen tras de mi como una ola de escombros oxidados.";

// Método match() utiliza expresion regular dentro del texto para encontrar una instancia. no distingue entre palabras completas sino las veces que existan los carcteres introducidos en la expresion.

console.log(texto.match(/por/g));

// Méetodo includes() para saber si existe una palabra. devuelve si o no.
console.log(texto.includes("al"));

// Método startWith() Saber si un string empiza con una palabra
console.log(texto.startsWith("No me des"));

// Método endsWith() saber si termina con una palabra.
console.log(texto.endsWith("oxidados."));
