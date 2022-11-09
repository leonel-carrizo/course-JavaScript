const winston = require("winston");

const logger = winston.createLogger({
	level: "error",
	format: winston.format.json(),
	defaultMeta: { service: "user-service" },
	transports: [
		//
		// - Write all logs with importance level of `error` or less to `error.log`
		// - Write all logs with importance level of `info` or less to `combined.log`
		//
		new winston.transports.File({ filename: "error.log", level: "error" }),
		//new winston.transports.File({ filename: "combined.log" }),
	],
});

try {
	const miFuncion = (a) => {
		if (a <= 5) {
			return (a = `El numero es ${a}`);
		}
		throw new Error("El numero debe ser menor de 5");
	};
	const a = 9;
	console.log(miFuncion(a));
} catch (e) {
	logger.error(`Valor del ${e}`);
	console.error(`Valor del ${e}`);
}
