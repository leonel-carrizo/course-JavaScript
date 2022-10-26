// casos especificos para el uso de breack y continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
	if (lista[i] === 3) {
		continue;
	}
	let j = 50;
	const k = 100;
	var h = 1;
	console.log(lista[i]);
	console.log(k);
	console.log(j);

	if (lista[i] > 5) {
		break;
	}
}

// ambito de un bucle
//al declarar una variable var se podra usar en todo el codigo perto para buenas practicas al momento de usar el contador "i" es mejor declararlo con let o const, de esta forma solo se podra usar dentro del bloque del bucle para dichas operaciones.

console.log(h);
console.log(j);
console.log(i);
console.log(k);
