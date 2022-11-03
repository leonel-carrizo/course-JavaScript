// - Un nuevo Set con los nombres de tu familia
const miFamilia = new Set(["Maribel", "Pedro", "Leonardo", "Leonel"]);
console.log(miFamilia);

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miFamilia.add("Leonel");
console.log(miFamilia);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miFamilia.add("JavaScript");
console.log(miFamilia);
