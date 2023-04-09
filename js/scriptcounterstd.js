let valorveneno = 0;
//Valor do marcador veneno não pode ficar abaixo de 0.
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

let stdvalorvida = 20;
//Se a vida ficar abixo de 5 deve mudar a cor da fonte para vermelho e Se ficar em 0 ou abaixo, perde o jogo.
document.getElementById('stdvmenos').onclick = function () {
    stdvalorvida -= 1;
    document.getElementById('stdvalorvida').innerText = stdvalorvida;
    if (stdvalorvida <= 5) {
        document.querySelector('.valorvida').classList.add('danger');
    }
    if (stdvalorvida <= 0) {
        alert('Você foi derrotado!');
    }
}
document.getElementById('stdvmais').onclick = function () {
    stdvalorvida += 1;
    document.getElementById('stdvalorvida').innerText = stdvalorvida;
    if (stdvalorvida >= 6) {
        document.querySelector('.valorvida').classList.remove('danger');
    }
}
//Resetar para os valores padrões.
document.getElementById('reset').onclick = function () {
    stdvalorvida = 20;
    document.getElementById('stdvalorvida').innerText = stdvalorvida;
    valorveneno = 0;
    document.getElementById('valorveneno').innerText = valorveneno;
    document.querySelector('.valorvida').classList.remove('danger');
}