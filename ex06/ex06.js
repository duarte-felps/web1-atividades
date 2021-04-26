let quantHoras = parseFloat(prompt(`Digite a quantidade de horas trabalhadas:`))
let valorPorHoras = parseFloat(prompt(`Digite o valor recebido por hora:`))
let salario = quantHoras*valorPorHoras
let salario2 = salario.toFixed(2)
document.write(`Salário igual a R$${salario2}`)