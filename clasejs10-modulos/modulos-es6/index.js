//import { eleva, suma, nombre } from './modulos / matematicas.js'
import * as moduloMatematica from './modulos/matematicas.js'
import getAutor, { libro } from './literatura.js';

const sum = moduloMatematica.suma(4, 12)
console.log(sum);

const potencia = moduloMatematica.eleva(2, 21)
console.log(potencia);

console.log(moduloMatematica.nombre);

console.log(getAutor());

console.log(libro);

