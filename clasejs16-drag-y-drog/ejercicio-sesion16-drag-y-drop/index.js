const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelectorAll(".boton")
console.log(papelera);

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        event.dataTransfer.setData("id", parrafo.id)
        parrafo.classList.add("dragging")
    })
    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
});

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

papelera.forEach(boton => {
    boton.addEventListener("dragover", event => {
        event.preventDefault()
    })
    boton.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove()
    })
})




