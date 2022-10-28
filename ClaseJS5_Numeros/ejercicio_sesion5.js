// - Una variable que contenga tu altura en centímetros (entero)
let altura = 173;

//- Una variable que contenga tu altura en metros (número de coma flotante)
let altura2 = 1.73;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 89.75;

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_mts = altura2.toFixed();
console.log(altura_mts);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_2 = Math.floor(peso);
console.log(peso_2);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let max_valor_JS = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(max_valor_JS);
