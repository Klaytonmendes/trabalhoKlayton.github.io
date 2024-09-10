var numeros = [];

for (let i = 0; i < 5; i++) {
    let input = prompt("Digite um número");
    let numero = parseFloat(input);
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        i--; 
    } else {
        numeros[i] = numero;
}
}
numeros.sort(function (a, b) {
    return a - b;
});
alert("O menor número inserido é: " + numeros[0]);
alert("O maior número inserido é: " + numeros[numeros.length - 1]);