let valorDaConta = parseFloat(prompt(`Digite o valor da conta:`))
let quantClientes = parseFloat(prompt(`Digite a quantidade de clientes:`))

let valorPorCliente = valorDaConta/quantClientes
document.write(`o valor por cliente é R$${valorPorCliente}`)