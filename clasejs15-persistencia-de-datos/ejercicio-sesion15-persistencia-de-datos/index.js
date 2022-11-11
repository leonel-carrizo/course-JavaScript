const nombre = "Leonel"
const apellido = "Carrizo"
const persona = { nombre: nombre, apellido: apellido}

// sessionStorage.setItem("persona", persona)

// localStorage.setItem("persona", persona)

document.cookie = "nombreCookie=LeonelCookie"

document.cookie = "nombreCaducidad=nombreCookie; expires=" + new Date(2022, 11, 11,0,2).toUTCString()