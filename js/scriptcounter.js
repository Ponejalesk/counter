let valorcastcmd = 0;
//Valor do marcador Cast Comandante não pode ficar abaixo de 0.
document.getElementById('btnmenos').onclick = function () {
    if (valorcastcmd !== 0) {
        valorcastcmd -= 2;
        document.getElementById('valorcastcmd').innerText = valorcastcmd;
    }
}
document.getElementById('btnmais').onclick = function () {
    valorcastcmd += 2;
    document.getElementById('valorcastcmd').innerText = valorcastcmd;
}

let valordanocmd = 0;
//Valor do marcador Dano de Comandante não pode ficar abaixo de 0.
document.getElementById('btmenos').onclick = function () {
    if (valordanocmd !== 0) {
        valordanocmd -= 1;
        document.getElementById('valordanocmd').innerText = valordanocmd;
    }
}
//Se o valor do marcador Dano Comandante for igual ou maior que 21, vence o jogo.
document.getElementById('btmais').onclick = function () {
    valordanocmd += 1;
    document.getElementById('valordanocmd').innerText = valordanocmd;
    if (valordanocmd >= 21) {
        alert("Parabéns você venceu o jogo!");
    }
}

let valorveneno = 0;

document.getElementById('bmenos').onclick = function () {
    if (valorveneno !== 0) {
        valorveneno -= 1;
        document.getElementById('valorveneno').innerText = valorveneno;
    }
}
//Se o valor do marcador Veneno for igual ou maior que 10, perder o jogo.
document.getElementById('bmais').onclick = function () {
    valorveneno += 1;
    document.getElementById('valorveneno').innerText = valorveneno;
    if (valorveneno >= 10) {
        alert('Você foi derrotado!');
    }
}

let valorvida = 40;
//Se a vida ficar abixo de 5 deve mudar a cor da fonte para vermelho e Se ficar em 0 ou abaixo, perde o jogo.
document.getElementById('vmenos').onclick = function () {
    valorvida -= 1;
    document.getElementById('valorvida').innerText = valorvida;
    if (valorvida <= 5) {
        document.querySelector('.valorvida').classList.add('danger');
    }
    if (valorvida <= 0) {
        alert('Você foi derrotado!');
    }
}
document.getElementById('vmais').onclick = function () {
    valorvida += 1;
    document.getElementById('valorvida').innerText = valorvida;
    if (valorvida >= 6) {
        document.querySelector('.valorvida').classList.remove('danger');
    }
}
//Resetar para os valors padrões.
document.getElementById('reset').onclick = function () {
    valorcastcmd = 0;
    document.getElementById('valorcastcmd').innerText = valorcastcmd;
    valordanocmd = 0;
    document.getElementById('valordanocmd').innerText = valordanocmd;
    valorveneno = 0;
    document.getElementById('valorveneno').innerText = valorveneno;
    valorvida = 40;
    document.getElementById('valorvida').innerText = valorvida;
    document.querySelector('.valorvida').classList.remove('danger');
}