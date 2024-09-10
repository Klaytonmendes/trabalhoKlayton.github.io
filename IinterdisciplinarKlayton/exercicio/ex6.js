const random = Math.round(Math.random()*10);
let resposta = 0;
let i = 0;
console.log(random)
while(resposta !== random){
    resposta = prompt("tente acertar o numero entre 1 e 10");
    if (resposta == random) {
        alert("parabens o numero correto é " + random)
        break;
    } else {
        alert("errado tente novamente")
    }
}

