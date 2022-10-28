// Operador .valueOf() Obtener valores númericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hoola soy un string");
console.log(str);
console.log(str.valueOf());

// NaN ( Not a Number) - Infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n));
// Infinity
let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor2 = null;
console.log(numerador / divisor2);

// Cómo convertir los strings a valores númericos con Number, parseInt, paseFloat
let numero = "5.89";
let num2 = 17.2;

// Number
console.log(numero + num2); // error de concepto
console.log(Number(numero) + num2);

// parseIn - convierte un string en numero entero

console.log(parseInt(numero));

// parseFloat - convierte un string en un numero decimal
console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

// Números hexadecimales - numeros en base 16. Se utilizan para asignación de memoria, bit ó 1 y 0.
let numHex = "0x3a5b7";
console.log(parseInt(numHex, 16));

// Obtener valores máximos y mínimo en JavaScript- con el numero de bit que ocupa.
let min_presicion = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_presicion);
console.log(min_valor_JS);
console.log(max_valor_JS);
