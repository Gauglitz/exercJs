function mult(num1, num2) {
    if (num1 && num2 === 0) return 0
    const maiornum = Math.max(num1, num2)
    const menornum = Math.min(num1, num2)
    function multmin(numero, multiplicador) {
        return(
            multiplicador === 1 ?
            numero : numero + multmin(numero, multiplicador -1)
        )
    }
    return multmin(maiornum, menornum)
}
console.log(mult(2, 10))

//ex
function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
 }
console.log(multiplicar(10,20))

// :)
const multarrow = (num, mult2) => {if(num && mult2 === 0) return 0 
    return mult2 === 1 ? num : num + multarrow(num, mult2-1)}
console.log(multarrow(2, 3))