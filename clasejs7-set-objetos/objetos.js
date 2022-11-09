// Objetos

const obj = {
	id: 4,
	nombre: "Juan",
	apellido: "Gonzalez",
	isDeveloper: true,
	libros_favoritos: ["El Métdo", "El código de la Manifestación"],
	"4-juegos": [1, 2, 3, 4], // se puede definir así porque l asintaxis no permite iniciar con un numero o guión.
};

// Aceder a los valores del objeto. (con su index)
console.log(obj.id);
console.log(obj["4-juegos"]);

//acceder a una propiedad a trevés de una variable
const prop = "isDeveloper";
console.log(obj[prop]);

// Replicar objeto
const obj2 = obj;
console.log(obj2);

// cambio en onj 2
obj2.nombre = "Leonel";
console.log(obj2.nombre);

console.log(obj.nombre); //Cuando se define un objeto a partir de otro, copia el mismo objeto y asigna la direccion de memoria al objeto inicial. Los cambio que se realicen en un se ven en ambos

let val1 = 4;
let val2 = val1;
val2 = 6;
console.log(val1);
console.log(val2); // Con variables primitivas si se modifica el valor.

//¡¡¡¡ Copiar y dubplicar un objeto dentro de otro. con {...objeto}. Con esto se asigna un espacio de memoria distinto y no se compia el mismo valor inicial sino que se transforma a uno nuevo.!!!!
const obj3 = { ...obj };
console.log(obj.nombre);
console.log(obj3.nombre);

obj.nombre = "Pedro";
console.log(obj3.nombre);
console.log(obj.nombre);

// Ordenar listas de objetos en función de una propiedad
const listPeliculas = [
	{ tituo: "Lo que el viento se llevo", anyo: 1939 },
	{ tituo: "Titanic", anyo: 1997 },
	{ tituo: "Moana", anyo: 2016 },
	{ tituo: "El efecto Mariposa", anyo: 2004 },
	{ tituo: "TED", anyo: 2012 },
];
console.log(listPeliculas);

// ordenar por año con .sort() (muta el valor del array original)
listPeliculas.sort((a, b) => a.anyo - b.anyo);
console.log(listPeliculas);
