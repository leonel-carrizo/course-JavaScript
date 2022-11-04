try {
    const miFuncion = (a) => {
        if (a <= 5) {
            return  a = `El numero es ${a}`
        }
        throw new Error('El numero debe ser menor de 5')
    }
    const a = 6;
    console.log(miFuncion(a))
} catch (e) {
    console.error(`Valor del ${e}`);
}