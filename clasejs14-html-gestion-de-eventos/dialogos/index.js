const boton = document.querySelector("#btn")
// console.log(boton);
boton.addEventListener("click", () => {
    // alert("Se ha hecho click")
    // confirm("¿Estás de acuerdo?") && console.log("OK")
    // confirm("¿Estás de acuerdo?") ?
    //     console.log("OK")
    //     : console.log("NO!!");

    const respuesta = confirm("Seguro?")
    if (respuesta) {
        console.log("Estás de acuerdo");
    } else {
        console.log("No estás de acuerdo");
    }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")
    if (nombre) {
        console.log("Tu nombre es " + nombre);
        alert("Gracias!");
    } else {
        alert("No has introducido nada");
    }
})

const lista = [{
    nombre: "leonel",
    edad: 35,
}, {
    nombre: "julian",
    edad: 21
}, {
    nombre: "Rem-L",
    edad: 33
}]
// console.log(lista);
console.table(lista)