function encontrarMedia(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]; 
    }
    let media = soma / vetor.length;
    return media;
}
function criarVetor(qtdItens) {
    let vetor = [];
    for (let i = 0; i < qtdItens; i++) {
        let input = prompt("Digite o valor " + (i + 1)); 
        let valor = parseFloat(input);
        if (isNaN(valor)) {
            alert("Tá acabando e vc ainda digita LETRAS????");
            i--; // Decrementa o índice para repetir a entrada
        } else {
            vetor[i] = valor;
        }
    }
    return vetor;
}
let quantidade = parseInt(prompt("Digite a quantidade de valores que deseja informar"));
if (isNaN(quantidade) || quantidade <= 0) {
    alert("Tá acabando e vc ainda digita LETRAS????");
} else {
    const array = criarVetor(quantidade);
    alert("A média dos valores informados é: " + encontrarMedia(array));
}