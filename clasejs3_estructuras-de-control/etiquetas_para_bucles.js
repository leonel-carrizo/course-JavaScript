// break y continue
// labels: nos permiten etiquetar los bucles for o while de esta forma podemos utilizar los breaks y continue de forma mas controlada, ejemplo, cuando tenemos un bucle dentro de otro.

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
	bucleUInidades: while (true) {
		console.log(`El numero actual es: ${decenas}${unidades}`);
		unidades++;
		if (unidades === 10) {
			unidades = 0;
			break bucleUInidades;
		}
		if (decenas === 2) {
			break bucleDecenas;
		}
	}
	decenas++;
}
console.log("Ya hemos terminado");
