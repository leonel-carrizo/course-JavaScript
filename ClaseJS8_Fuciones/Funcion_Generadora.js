//Funciones Generadoras

// Generar ID incremental
function* generaId() {
	let id = 0;
	while (true) {
		id++;
		if (id === 10) {
			return id;
		}
		yield id; //Esperando hasta que vuelva a invocar
	}
}
const gen = generaId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
