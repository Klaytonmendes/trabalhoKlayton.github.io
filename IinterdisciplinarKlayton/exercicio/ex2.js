var idade = parseFloat(prompt('Digite sua idade:'));

if (isNaN(idade)) {
    alert("É APENAS NÚMEROS.");
    location.reload();
} else if (idade <= 12) {
    alert("Você é uma criança.");
} else if (idade >= 13 && idade < 17) {
    alert("Você é um adolescente.");
} else if (idade >= 18 && idade < 64) {
    alert("Você é um adulto.");
} else if (idade >= 65 && idade < 99) {
    alert("Você é um idoso.");
} else if (idade >= 100 && idade < 2023) {
    alert("Eu diria idoso, mas você está vivo?");
} else if (idade >= 2024) 
    alert("Você andou com Jesus.");