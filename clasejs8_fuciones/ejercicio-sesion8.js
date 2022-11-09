// - Una función sin parámetros que devuelva siempre "true"
function verdadero() {
	return true;
}
const cierto = verdadero();
console.log(cierto);
//otra forma
const verdad = (verdadero) => (verdadero = true);
console.log(verdad());

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const saludo = "Hola soy una promesa";

const miPromeasa = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(saludo);
		}, 5000);
	});
};
miPromeasa()
    .then(() => console.log(saludo))

// - Una función generadora de índices pares automáticos

function* generatorIndex() {
	let index = 0;
	while (true) {
		index += 2;
		if (index === 16) {
			return index;
		}
		yield index;
	}
}
const gen = generatorIndex();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
