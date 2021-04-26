
let valorDoKg = parseFloat(prompt(`Digite o valor do KG:`))
let gramasConsumidas = parseFloat(prompt(`Qual a quantidade consumida em gramas:`))
let preco = valorDoKg*gramasConsumidas/1000
let preco2 = preco.toFixed(2)
document.write(`Valor a ser pago R$${preco2}`)