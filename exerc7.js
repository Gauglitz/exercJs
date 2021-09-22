function objArray(objeto) {
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
}
const obj = {
    nome: "João",
    idade: 19
}
console.log(objArray(obj))

function objetoParaArray(objeto) {
    return Object.entries(objeto)
}
console.log(objetoParaArray(obj))

const objt = (objto) => Object.entries(objto)
console.log(objt(obj))
//implícito
    
    