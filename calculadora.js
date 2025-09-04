
function calcularDesconto(){
    
//ENTRADADA DE DADOS
let valorOriginal= document.getElementById("valor").value;
let desconto =  document.getElementById("desconto").value;



//PROCESAEMENTO
let valorDesconto = (valorOriginal * desconto) / 100;
let valorFinal = valorOriginal - valorDesconto;



//SAIDA
document.getElementById("resultado").textContent = "valor final:" + valorFinal;

}

