// Trabajar con fechas
const fecha = new Date();
console.log(fecha);

// en base a la fechas que definamos. Los meses inicializan en 0.
const fecha2 = new Date(1987, 4, 12, 1, 23, 52, 192);
console.log(fecha2);

// Fecha calculada en milisegundos desde el inicio de su configuración.
const fecha3 = new Date(1667499999990);
console.log(fecha3);
// Si se le asignas valores negativos muestra fechas inferiores a 1970
const fechaa = new Date(-16674999999999);
console.log(fechaa);

// Fechas a traves de strings
const fecha4 = new Date("octuber 13, 1979, 12:12:12");
console.log(fecha4);

// Comparar dos fehas. si uns fecha es posterior a otra.

console.log(fecha < fecha2);

const fecha5 = new Date(1987, 4, 12, 1, 23, 52, 192);
console.log(fecha5);

console.log(fecha5 === fecha2); // ERROR! no se pueden comparar de esta forma. DEBE CONVERTIRSE EN MILISEGUNDOS.
console.log(fecha2.getTime() === fecha5.getTime());

// Obetener el día, el mes y el año de una fecha.
// Método .getDay() para obtener el día
console.log(fecha2.getDay());

// Obetner Mes con .getMonth()
console.log(fecha2.getMonth() + 1); // se suna uno porque el indice del mes comienza con 0.

// Obtener Año con . getFullYear()
console.log(fecha2.getFullYear());

// MOSTRAR UNA FECHA EN UN STRING con .toLocalDateString.
//Se debe pasa el formato que deseamos. Ejemplos 'en-US' , 'en-GB' , 'ar-EG' (arabic)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-GB"));
