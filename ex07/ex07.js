/* 
   7.	Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string.
    Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
*/
let mes = parseFloat(prompt(`Digite o mês que deseja converter em algarismo:`))
if (mes == 1){
    document.write(`Janeiro`)
}
else if (mes == 2){
    document.write(`Fevereiro`)
}
else if (mes == 3){
    document.write(`Março`)
}
else if (mes == 4){
    document.write(`Abril`)
}
else if (mes == 5){
    document.write(`Maio`)
}
else if (mes == 6){
    document.write(`Junho`)
}
else if (mes == 7){
    document.write(`Julho`)
}
else if (mes == 8){
    document.write(`Agosto`)
}
else if (mes == 9){
    document.write(`Setembro`)
}
else if (mes == 10){
    document.write(`Outubro`)
}
else if (mes == 11){
    document.write(`Novembro`)
}
else if (mes == 12){
    document.write(`Dezembro`)
}else {
    document.write(`Mês não válido`)
}


