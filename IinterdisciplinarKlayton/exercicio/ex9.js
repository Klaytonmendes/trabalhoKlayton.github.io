const vetor = [1,34,2,56,7];
const number = parseInt(prompt("Digite o número que você deseja comparar"));
const new_vetor = [];
for (let i = 0; i < vetor.length; i++) {
    if (vetor [i] > number) {
        new_vetor.push(vetor[i]);
    }
}
alert(new_vetor)