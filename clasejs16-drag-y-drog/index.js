const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

// Listener por cada vez que se arrastra un párrafo
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log(`Estoy asrrastrando el parrafo: ${parrafo.innerText} `);
        
        parrafo.classList.add("dragging") // añadir una clase para dar estilo
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })
    parrafo.addEventListener("dragend", () => {
        // console.log(`Termine de  asrrastrar parrafo: ${parrafo.innerText} `);
        parrafo.classList.remove("dragging") // quitar la clase asiganda
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
        // console.log("drag over");
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id")
        console.log("Párrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})