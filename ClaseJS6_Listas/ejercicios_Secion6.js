// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaComras = ["harina", "pan", "queso", "huevos", "leche"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaComras.push("Aceite de Girasol");
console.log(listaComras);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaComras.pop();
console.log(listaComras);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
	{ titulo: "Rambo", director: "Sylvester Stallone", fecha: 2008 },
	{ titulo: "Bamby", director: "David Hand", fecha: 1942 },
	{ titulo: "Rey Leon", director: "Jon Favreau", fecha: 2019 },
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const newPeliculas = peliculas.filter((obj) => obj.fecha > 2010);
console.log(newPeliculas);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directoesPeliculas = peliculas.map((valor) => valor.director);
console.log(directoesPeliculas);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaPeliculas = peliculas.map((valor) => valor.titulo);
console.log(listaPeliculas);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const newList2 = directoesPeliculas.concat(listaPeliculas);
console.log(newList2);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const otraLista = [directoesPeliculas, listaPeliculas];
console.log(otraLista);
