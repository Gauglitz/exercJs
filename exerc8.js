//média
function calcMedia(nums) {
    const quantidadeDeNumeros = nums.length
    const somaTotal = nums.reduce((numeroA, numeroB) => numeroA + numeroB)
    return somaTotal / quantidadeDeNumeros
}
console.log(calcMedia([1, 2 , 3]))

