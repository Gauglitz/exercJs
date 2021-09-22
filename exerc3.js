function maiorIgual(primeiro, segundo) {
    if(primeiro >= segundo) 
    return `O primeiro é maior que o segundo`
}
console.log(maiorIgual(3, 2))

//ou
function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}
console.log(maiorOuIgual(2, 3))
    