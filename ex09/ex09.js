/* 
  9.	Elaborar um programa para uma Lan House. O programa deve ler o valor por hora de uso do computador e o tempo de uso de um cliente em minutos. 
  O programa deve calcular e exibir o valor a ser pago pelo cliente.
*/
let valorDaHora = parseFloat(prompt(`Digite o valor da hora:`))
let tempoUtilizado = parseFloat(prompt(`Quanto tempo foi utilizado o computador em minutos:`))
let preco = valorDaHora*(tempoUtilizado/60)
let preco2 = preco.toFixed(2)
document.write(`Valor a ser pago R$${preco2}`)