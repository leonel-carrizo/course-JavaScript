// bucles For: for (inicializacon; condicion; actualizacion) { operaciones del bucle}
// i = i +1 -> i += 1 -> i++

for (let i = 0; i < 10; i += 4) {
	//esto es el bucle
	console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 900];
for (let i = 0; i < lista.length; i++) {
	console.log(lista[i] * 2);
}

// Estructura For... Of
for (let valor of lista) {
	console.log(valor);
}

// Estructura ForEach
lista.forEach((valor) => {
	console.log(valor);
});

// Estructura For... in
let persona = {
	nombre: "Gorka",
	apellido: "Villa",
	edad: 34,
	isDeveloper: true,
};

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
	console.log(persona[propiedad]);
	//se accede al valor de la propidad como si se tratase de un array
	console.log(propiedad);
}
