/* Tipado en js = Tipado inferido. Al definir una variable se define de forma general. Ej.
        a = 1 esta variabell seria de tipo número.
        a = "hola" la variable sería tipo cadena.
    No se necesita declarar el tipo de variable. (Boleano, número, string,).

    Tpos:
        Primitivos: -Number: var a = 1
                    -String: var str = "String"
                    -Boolean: var bool = true
                    -Null: Espacio vacio de memoria, significa "nada" y es intencional. var nul = null
                    -Undefined: No esta asignada a una parte de memoria, se declara la variable pero no se le da un valor. var nombre = undefined.
                    -Relación entre null, undefined, false y 0: todos son Falsy

        Objetos: -Tipos
                - arrays
                - listas

        Variables:
                -var
                -let
                -const
                -typeof
*/

// Number
4;

// strting
("hola mundo");
("hola mundo");
`hola mundo`;

//booleanos
true;
false;

//null and undefined
null;
undefined;

//null, undefined, false, 0
if (0) {
	console.log("cumple");
} else {
	console.log("no cumple");
}

