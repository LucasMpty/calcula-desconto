function calculaImc() {
    let pesoAtual = parseFloat(document.getElementById("quilos").value);
    let altura = parseFloat(document.getElementById("metros").value);

    if (!pesoAtual || !altura) {
        alert("Preencha peso e altura corretamente!");
        return;
    }

    let imc = pesoAtual / (altura * altura);
    document.getElementById("imcCalc").textContent = "Seu IMC é: " + imc.toFixed(2);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    document.getElementById("classeImc").textContent = classificacao;
}
