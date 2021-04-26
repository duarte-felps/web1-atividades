
let precoProduto = parseFloat(prompt(`Digite o valor do produto:`))
let valorDoDesconto = precoProduto*0.1
let precoComDesconto = precoProduto-valorDoDesconto
let precoComDesconto2= precoComDesconto.toFixed(2)
let parcelado = precoProduto/3
let parcelado2 = parcelado.toFixed(2)

document.write(`O valor do produto com desconto é de R$${precoComDesconto2}`)
document.write("<br>")
document.write(`Caso escolha a opção parcelada, cada parcela saíra R$${parcelado2}`)