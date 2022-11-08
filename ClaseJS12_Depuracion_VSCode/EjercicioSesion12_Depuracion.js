function Operacion(num) {
    let numeros = [1,1]
    let a = 1
    let b = 1
    let r = 0;
    if (num === 1) {
        return [1]
    }else if (num === 2) {
        return [1,1]
    }else
    for (let i = 2; i < num; i++ ) {
        r = a + b
        a = b
        b = r
        numeros.push(r)
    }
    return numeros
}
console.log(Operacion(10));