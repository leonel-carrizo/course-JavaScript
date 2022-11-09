import * as matematicas from "./modulos/controller.js";
import chalk from "chalk";

const operacion = matematicas.suma(1, 2) * matematicas.suma(4, 5);

console.log(chalk.green.bold(operacion));
