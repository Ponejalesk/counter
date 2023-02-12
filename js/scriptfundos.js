let tela = document.querySelector('main')

let imagem2 = document.querySelector('#img2')
let imagem3 = document.querySelector('#img3')
let imagem4 = document.querySelector('#img4')
let imagem5 = document.querySelector('#img5')
let imagem6 = document.querySelector('#img6')
let imagem7 = document.querySelector('#img7')
let imagem8 = document.querySelector('#img8')
let imagem9 = document.querySelector('#img9')
let imagem10 = document.querySelector('#img10')
let imagem11 = document.querySelector('#img11')

imagem2.addEventListener('click', fundo2)
imagem3.addEventListener('click', fundo3)
imagem4.addEventListener('click', fundo4)
imagem5.addEventListener('click', fundo5)
imagem6.addEventListener('click', fundo6)
imagem7.addEventListener('click', fundo7)
imagem8.addEventListener('click', fundo8)
imagem9.addEventListener('click', fundo9)
imagem10.addEventListener('click', fundo10)
imagem11.addEventListener('click', fundo11)

function fundo2() {
    console.log('imagemfundo2');
    tela.classList.add("tela2");
    tela.classList.remove("tela3");
    tela.classList.remove("tela4");
    tela.classList.remove("tela5");
    tela.classList.remove("tela6");
    tela.classList.remove("tela7");
    tela.classList.remove("tela8");
    tela.classList.remove("tela9");
    tela.classList.remove("tela10");
    tela.classList.remove("tela11");
}
function fundo3() {
    console.log('imagemfundo3');
    tela.classList.add("tela3");
    tela.classList.remove("tela2");
    tela.classList.remove("tela4");
    tela.classList.remove("tela5");
    tela.classList.remove("tela6");
    tela.classList.remove("tela7");
    tela.classList.remove("tela8");
    tela.classList.remove("tela9");
    tela.classList.remove("tela10");
    tela.classList.remove("tela11");
}
function fundo4() {
    console.log('imagemfundo4');
    tela.classList.add("tela4");
    tela.classList.remove("tela2");
    tela.classList.remove("tela3");
    tela.classList.remove("tela5");
    tela.classList.remove("tela6");
    tela.classList.remove("tela7");
    tela.classList.remove("tela8");
    tela.classList.remove("tela9");
    tela.classList.remove("tela10");
    tela.classList.remove("tela11");
}
function fundo5() {
    console.log('imagemfundo5');
    tela.classList.add("tela5");
    tela.classList.remove("tela2");
    tela.classList.remove("tela3");
    tela.classList.remove("tela4");
    tela.classList.remove("tela6");
    tela.classList.remove("tela7");
    tela.classList.remove("tela8");
    tela.classList.remove("tela9");
    tela.classList.remove("tela10");
    tela.classList.remove("tela11");
}
function fundo6() {
    console.log('imagemfundo6');
    tela.classList.add("tela6");
    tela.classList.remove("tela2");
    tela.classList.remove("tela3");
    tela.classList.remove("tela4");
    tela.classList.remove("tela5");
    tela.classList.remove("tela7");
    tela.classList.remove("tela8");
    tela.classList.remove("tela9");
    tela.classList.remove("tela10");
    tela.classList.remove("tela11");
}
function fundo7() {
    console.log('imagemfundo7');
    tela.classList.add("tela7");
    tela.classList.remove("tela2");
    tela.classList.remove("tela3");
    tela.classList.remove("tela4");
    tela.classList.remove("tela5");
    tela.classList.remove("tela6");
    tela.classList.remove("tela8");
    tela.classList.remove("tela9");
    tela.classList.remove("tela10");
    tela.classList.remove("tela11");
}
function fundo8() {
    console.log('imagemfundo8');
    tela.classList.add("tela8");
    tela.classList.remove("tela2");
    tela.classList.remove("tela3");
    tela.classList.remove("tela4");
    tela.classList.remove("tela5");
    tela.classList.remove("tela6");
    tela.classList.remove("tela7");
    tela.classList.remove("tela9");
    tela.classList.remove("tela10");
    tela.classList.remove("tela11");
}
function fundo9() {
    console.log('imagemfundo9');
    tela.classList.add("tela9");
    tela.classList.remove("tela2");
    tela.classList.remove("tela3");
    tela.classList.remove("tela4");
    tela.classList.remove("tela5");
    tela.classList.remove("tela6");
    tela.classList.remove("tela7");
    tela.classList.remove("tela8");
    tela.classList.remove("tela10");
    tela.classList.remove("tela11");
}
function fundo10() {
    console.log('imagemfundo10');
    tela.classList.add("tela10");
    tela.classList.remove("tela2");
    tela.classList.remove("tela3");
    tela.classList.remove("tela4");
    tela.classList.remove("tela5");
    tela.classList.remove("tela6");
    tela.classList.remove("tela7");
    tela.classList.remove("tela8");
    tela.classList.remove("tela9");
    tela.classList.remove("tela11");
}
function fundo11() {
    console.log('imagemfundo11');
    tela.classList.add("tela11");
    tela.classList.remove("tela2");
    tela.classList.remove("tela3");
    tela.classList.remove("tela4");
    tela.classList.remove("tela5");
    tela.classList.remove("tela6");
    tela.classList.remove("tela7");
    tela.classList.remove("tela8");
    tela.classList.remove("tela9");
    tela.classList.remove("tela10");
}