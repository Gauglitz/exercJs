function repetir(item, quantidade) { let resultado = []
    for (let i = 0; i < quantidade; i++) resultado.push(item)
    return resultado
}
console.log(repetir("vitor", 3))

const repetirArw = (serRepetido, vzs) => { let resultado = []
    for(let i = 0; i < vzs; i++) resultado.push(serRepetido) 
    return resultado
}
console.log(repetirArw("sla", 4))
