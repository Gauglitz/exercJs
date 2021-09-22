function calcSalarioLiq(hrsTrab, ganhoprHora) {
    const salarioBruto = hrsTrab * ganhoprHora
    const salarioLiq = salarioBruto * 0.3

    return `Salário igual a R$ ${salarioLiq}`
}
console.log(calcSalarioLiq(180, 60))