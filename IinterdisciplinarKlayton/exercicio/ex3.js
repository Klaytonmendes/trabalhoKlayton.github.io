var input = prompt('Digite um número de 1 a 7 que corresponda com os dias da semana.');

if (isNaN(input)) {
    alert("Por favor, digite apenas números.");
} else {
    var diadasemana = parseInt(input);

    switch (diadasemana) {
        case 1:
            alert("Domingo");
            break;
        case 2:
            alert("Segunda-Feira");
            break;
        case 3: 
            alert("Terça-Feira");
            break; 
        case 4:
            alert("Quarta-Feira");
            break;
        case 5:
            alert("Quinta-Feira");
            break;
        case 6:
            alert("Sexta-Feira");
            break;
        case 7:
            alert("Sábado");
            break;
        default:
            alert("O número deve ser entre 1 e 7");
    }
}