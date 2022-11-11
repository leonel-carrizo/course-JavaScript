//// Trabajando con el Local Storage

////Pasar datos
// localStorage.setItem("nombre", "Leonel")
// localStorage.setItem("nombre", "Miguel")
// console.log(localStorage.getItem("nombre"));

// JASON.stringify -> Convierte un objeto a string
// localStorage.setItem("persona", JSON.stringify({ nombre: "leonel", edad: 35 }))

////JSON.parse -> Convierte un objeto/string convertido a través de stringify en un objeto javScript
// console.log(JSON.parse(localStorage.getItem("persona")));

//// Eliminar un Item de local  storage
localStorage.removeItem("nombre")


//// Trabjando con Sesion Storage, es igual que Local Storage

sessionStorage.setItem("nombre-sesion", "leonel")

/* Trabajando con Cookies */
document.cookie = "nombreCookie=LeonelCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie);