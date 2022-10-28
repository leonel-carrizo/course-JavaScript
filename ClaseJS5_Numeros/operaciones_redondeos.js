// Operaciones aritmeticas
let a = 3.5;
let b = 4.8;

//Suma (+)
console.log(a + b);
// Resta (-)
console.log(a - b);
// MUltiplicación(*)
console.log(a * b);
// División (/)
console.log(a / b);

// representación de los numeros como strings.
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;
console.log(d);

// .toFixed(x) limita el numero a los decimales indicados pero en forma de <---string--->
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let e = 1839.1234567889;
let f = 225359423;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toPrecision(x) Limita el numero de cifras significativas. También devuelve un <---STRING--->
console.log(e.toPrecision(7));
console.log(f.toPrecision(6));
