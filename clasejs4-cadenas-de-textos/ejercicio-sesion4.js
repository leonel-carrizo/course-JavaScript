//- Una cadena de texto con tu Nombre

let nombre = "Leonel";

//- Otra cadena de texto con tu Apellido
let apellido = "Carrizo";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = nombre + " " + apellido;
console.log(estudiante);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let num_str = estudiante.length;
console.log(num_str);

//- Una variable que contenga la primera letra del Nombre
let pr_nombre = nombre.charAt(0);
console.log(pr_nombre);

// - Otra variable que contenga la última letra del Apellido
let ul_apellido = apellido.charAt(6);
console.log(ul_apellido);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let del_estudiante = estudiante.replace(/\s+/, "");
console.log(del_estudiante);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let if_nombre = estudiante.match(/Leonel/g);
console.log(if_nombre);
