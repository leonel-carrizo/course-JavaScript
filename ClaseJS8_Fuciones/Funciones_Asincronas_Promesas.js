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
