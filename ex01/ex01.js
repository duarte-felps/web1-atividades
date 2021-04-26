const inputNumero = document.querySelector("input") 
const btnMostrar = document.querySelector("button")

function mostrarVizinhos(){
    let numero = parseInt(inputNumero.value)
    document.write(`Os vizinhos são: ${numero-1} e ${numero+1}`)
}