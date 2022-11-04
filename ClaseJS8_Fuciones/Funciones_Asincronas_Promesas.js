// Funciones asíncronas

function miAsinc() {
	// llamada a base de datos externa
	//Puede dar algun error
}

//Promesas. Pueden o no ejecutarse de forma exitosa.
const miPromesa = new Promise((resolve, reject) => {
	const i = Math.floor(Math.random() * 2);
	// Si está todo correcto
	if (i !== 0) {
		resolve();
	} else {
		reject();
	}
});

miPromesa
	.then(() => console.log("Se ha ejecutado de forma correcta"))
	.catch(() => console.log("ERROR!!"))
	.finally(() => console.log("Yo me ejecuto siempre"));


    ///////////////////////////////////////////
// https://www.youtube.com/watch?v=rKK1q7nFt7M

const datos = [
	{
		id: 1,
		title: "Iron Man",
		year: 2008,
	},
	{
		id: 2,
		title: "Spiderman : Homecoming",
		year: 2017,
	},
	{
		id: 3,
		title: "Avengers: Endgame",
		year: 2019,
	},
];

// const getDatos = ()=> {
//   return datos;
// }

// Con setTimeout() se simula el retraso que podría presentar el cosumir datos desde una API o una Base de datos.
// Nos ayuda a ver como funcionan las promesas en funciones asíncronas.
// const getDatos = () => {
//   setTimeout(()=>{
//     return datos;
//   }, 1500);
// }

// console.log(getDatos()); // Al ejecutar devolverá undefined porque con el retrazo no hay nada qu ejecutar

// Se resuelve gracias a las promesas. Permite ejecutar un trozo de código mientras espera el retrazo y posteriormente resolvera la funcion que hizo la solicitud.

const getdatos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(datos);
		}, 2000);
	});
};
getdatos()
    .then((datos) => console.log(datos))
    .catch(() => console.log('Hay un error'))
    .finally(() => console.log('Yo me ejecutaré tambien'));