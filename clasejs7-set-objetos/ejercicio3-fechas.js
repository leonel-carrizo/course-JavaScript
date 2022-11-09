// - La fecha de hoy

const fecha = new Date();
console.log(fecha);

const fechaNacimiento = new Date(1987, 4, 12);
console.log(fechaNacimiento);
console.log(fechaNacimiento.getDay());

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const fechaMayor = fecha > fechaNacimiento;
console.log(fechaMayor);

// Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento;
console.log(diaNacimiento.getDate());

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);
