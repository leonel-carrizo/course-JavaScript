const boton = document.getElementById("btn")

boton.addEventListener("click", () => {
    console.log("click en el boton");
})

$(() => {
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando JQuery")
    });
})