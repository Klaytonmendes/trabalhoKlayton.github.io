var numero = parseInt(prompt('Digite um número à sua escolha'));
console.log(numero);

if (isNaN(numero)) {
alert("Digite apenas números");
location.reload();
} else if (numero === 0) {
alert("O número é neutro");
} else if (numero > 0) {
alert("Seu número é positivo");
} else {
alert("Seu número é negativo");
}