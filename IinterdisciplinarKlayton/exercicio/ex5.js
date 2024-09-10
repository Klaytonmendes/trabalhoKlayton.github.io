var soma = 0;
var number = Array();

do{
    number = parseInt(prompt("Digite um número (Caso queira calcular digite 0):"));
    if(number !== 0) {
        soma +=number;
    }
} while (number !== 0);

alert("A soma dos números é:"+soma)
