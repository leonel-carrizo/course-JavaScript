const nombre = "Leonel"
const apellido = "Carrizo"
const persona = { nombre: nombre, apellido: apellido }

// sessionStorage.setItem("persona", persona)

// localStorage.setItem("persona", persona)


const now = new Date()
document.cookie = `persona=${JSON.stringify(persona)}; expires=${new Date(now.getTime() + 2 * 600)}`
