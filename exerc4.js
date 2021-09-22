//inverso boolean e n° negativo

function inverso(val) {
    const tipo = typeof val
    if(tipo == "boolean") return !val
    else if(tipo == "number") return -val
}
console.log(inverso(true))
console.log(inverso(2))
