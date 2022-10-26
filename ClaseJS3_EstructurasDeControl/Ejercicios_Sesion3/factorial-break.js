// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let i = 1;
let numero = 10;
let resultado = 1;

while (i < numero) {
	if (numero <= 0) {
		resultado = 1;
		break;
	}
	i++;
	resultado = resultado * i;
}
console.log(resultado);
